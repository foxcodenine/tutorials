import { Database } from "bun:sqlite";
import { dirname } from "node:path";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const dbPath = process.env.DB_PATH ?? "./data/tinynotes.db";
const resolvedDbPath = resolve(dbPath);

let database: Database | undefined;

function ensureDatabaseDirectory(path: string) {
  mkdirSync(dirname(path), { recursive: true });
}

export function getDatabase() {
  if (database) {
    return database;
  }

  ensureDatabaseDirectory(resolvedDbPath);

  database = new Database(resolvedDbPath, { create: true, strict: true });
  database.run("PRAGMA foreign_keys = ON;");
  database.run("PRAGMA journal_mode = WAL;");
  database.run("PRAGMA synchronous = NORMAL;");
  database.run("PRAGMA busy_timeout = 5000;");

  return database;
}
