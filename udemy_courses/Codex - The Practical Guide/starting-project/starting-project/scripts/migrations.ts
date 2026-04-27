import { Database } from "bun:sqlite";
import { existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

type MigrationFile = {
  filename: string;
  version: string;
  upSql: string;
  downSql: string;
};

type AppliedMigration = {
  version: string;
  applied_at: string;
};

const dbPath = process.env.DB_PATH ?? "./data/tinynotes.db";
const migrationsDir = resolve("migrations");
const resolvedDbPath = resolve(dbPath);

function ensureDatabaseDirectory(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}

function ensureSchemaMigrationsTable(db: Database) {
  db.run(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      version TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);
}

function timestamp() {
  return new Date().toISOString();
}

function markerKey(line: string) {
  return line.trim().toLowerCase();
}

function normalizeMigrationVersion(version: string) {
  return version.replace(/(\.up|\.down)?\.sql$/, "");
}

function parseMigrationFile(sql: string, source: string) {
  const lines = sql.split(/\r?\n/);
  let upStart = -1;
  let downStart = -1;

  for (let index = 0; index < lines.length; index += 1) {
    const key = markerKey(lines[index]);

    if (key === "-- up") {
      if (upStart !== -1) {
        throw new Error(`Duplicate -- up marker in ${source}`);
      }
      upStart = index;
      continue;
    }

    if (key === "-- down") {
      if (downStart !== -1) {
        throw new Error(`Duplicate -- down marker in ${source}`);
      }
      downStart = index;
    }
  }

  if (upStart === -1 || downStart === -1) {
    throw new Error(`Migration file ${source} must contain both -- up and -- down markers`);
  }

  if (upStart > downStart) {
    throw new Error(`Migration file ${source} has -- down before -- up`);
  }

  const upSql = lines
    .slice(upStart + 1, downStart)
    .join("\n")
    .trim();
  const downSql = lines
    .slice(downStart + 1)
    .join("\n")
    .trim();

  if (!upSql) {
    throw new Error(`Migration file ${source} has an empty -- up section`);
  }

  if (!downSql) {
    throw new Error(`Migration file ${source} has an empty -- down section`);
  }

  return { upSql, downSql };
}

function loadMigrationFiles(directory: string): MigrationFile[] {
  return readdirSync(directory)
    .filter(
      (entry) =>
        entry.endsWith(".sql") && !entry.endsWith(".up.sql") && !entry.endsWith(".down.sql"),
    )
    .sort((a, b) => a.localeCompare(b))
    .map((filename) => {
      const path = join(directory, filename);
      const sql = readFileSync(path, "utf8");
      const { upSql, downSql } = parseMigrationFile(sql, filename);

      return {
        filename,
        version: normalizeMigrationVersion(filename),
        upSql,
        downSql,
      };
    });
}

function ensureMigrationDir() {
  if (!existsSync(migrationsDir)) {
    throw new Error(`Missing migrations directory at ${migrationsDir}`);
  }
}

function openDatabase() {
  ensureDatabaseDirectory(resolvedDbPath);

  const db = new Database(resolvedDbPath, { create: true, strict: true });
  db.run("PRAGMA foreign_keys = ON;");
  db.run("PRAGMA journal_mode = WAL;");
  db.run("PRAGMA synchronous = NORMAL;");
  db.run("PRAGMA busy_timeout = 5000;");
  ensureSchemaMigrationsTable(db);

  return db;
}

function applyMigrations() {
  ensureMigrationDir();

  const db = openDatabase();

  try {
    const appliedRows = db.query("SELECT version FROM schema_migrations ORDER BY version").all() as
      | Array<{ version: string }>
      | [];
    const appliedVersions = new Set(
      appliedRows.map((row) => normalizeMigrationVersion(row.version)),
    );
    const migrationFiles = loadMigrationFiles(migrationsDir);
    const pendingFiles = migrationFiles.filter((file) => !appliedVersions.has(file.version));

    if (pendingFiles.length === 0) {
      console.log("No pending migrations.");
      return;
    }

    const applyPending = db.transaction((files: MigrationFile[]) => {
      const insertMigration = db.query(
        "INSERT INTO schema_migrations (version, applied_at) VALUES ($version, $applied_at)",
      );

      for (const file of files) {
        console.log(`Applying ${file.filename}...`);
        db.run(file.upSql);
        insertMigration.run({
          version: file.filename,
          applied_at: timestamp(),
        });
      }
    });

    applyPending(pendingFiles);
    console.log(`Applied ${pendingFiles.length} migration(s).`);
  } finally {
    db.close(false);
  }
}

function normalizeStepCount(input: string | undefined) {
  if (!input) return 1;

  const parsed = Number.parseInt(input, 10);
  if (!Number.isFinite(parsed) || parsed < 1) {
    throw new Error(`Invalid rollback count: ${input}`);
  }

  return parsed;
}

function rollbackMigrations() {
  ensureMigrationDir();

  const steps = normalizeStepCount(process.argv[3]);
  const db = openDatabase();

  try {
    const appliedRows = db
      .query(
        "SELECT version, applied_at FROM schema_migrations ORDER BY applied_at DESC, version DESC",
      )
      .all() as Array<{ version: string; applied_at: string }>;

    if (appliedRows.length === 0) {
      console.log("No applied migrations to roll back.");
      return;
    }

    const migrationFiles = loadMigrationFiles(migrationsDir);
    const migrationMap = new Map(migrationFiles.map((file) => [file.version, file] as const));
    const targetRows = appliedRows.slice(0, steps);

    const rollbackApplied = db.transaction(
      (rows: Array<{ version: string; applied_at: string }>) => {
        const deleteMigration = db.query("DELETE FROM schema_migrations WHERE version = $version");

        for (const row of rows) {
          const version = normalizeMigrationVersion(row.version);
          const migration = migrationMap.get(version);

          if (!migration) {
            throw new Error(`Missing migration file for ${row.version}`);
          }

          console.log(`Rolling back ${migration.filename}...`);
          db.run(migration.downSql);
          deleteMigration.run({ version: row.version });
        }
      },
    );

    rollbackApplied(targetRows);
    console.log(`Rolled back ${targetRows.length} migration(s).`);
  } finally {
    db.close(false);
  }
}

function statusMigrations() {
  ensureMigrationDir();

  const db = openDatabase();

  try {
    const appliedRows = db
      .query(
        "SELECT version, applied_at FROM schema_migrations ORDER BY applied_at DESC, version DESC",
      )
      .all() as AppliedMigration[];
    const appliedVersions = new Set(
      appliedRows.map((row) => normalizeMigrationVersion(row.version)),
    );
    const migrationFiles = loadMigrationFiles(migrationsDir);
    const pendingFiles = migrationFiles.filter((file) => !appliedVersions.has(file.version));
    const missingDownFiles = appliedRows.filter((row) => {
      const version = normalizeMigrationVersion(row.version);
      return !migrationFiles.some((file) => file.version === version);
    });

    console.log(`Database: ${resolvedDbPath}`);
    console.log(`Applied: ${appliedRows.length}`);
    console.log(`Pending: ${pendingFiles.length}`);
    console.log(`Missing migration files: ${missingDownFiles.length}`);

    if (appliedRows.length > 0) {
      console.log("Applied versions:");
      for (const row of appliedRows) {
        console.log(`  - ${row.version} (${row.applied_at})`);
      }
    }

    if (pendingFiles.length > 0) {
      console.log("Pending versions:");
      for (const file of pendingFiles) {
        console.log(`  - ${file.filename}`);
      }
    }

    if (missingDownFiles.length > 0) {
      console.log("Applied entries missing local files:");
      for (const row of missingDownFiles) {
        console.log(`  - ${row.version}`);
      }
    }
  } finally {
    db.close(false);
  }
}

function main() {
  const mode = process.argv[2];

  if (mode === "migrate") {
    applyMigrations();
    return;
  }

  if (mode === "rollback") {
    rollbackMigrations();
    return;
  }

  if (mode === "status") {
    statusMigrations();
    return;
  }

  throw new Error("Usage: bun run scripts/migrations.ts <migrate|rollback|status> [count]");
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Migration failed: ${message}`);
  process.exitCode = 1;
}
