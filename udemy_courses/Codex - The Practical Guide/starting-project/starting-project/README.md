# TinyNotes

TinyNotes is a Bun, TypeScript, Next.js App Router, and SQLite notes app.

## Setup

Install dependencies:

```bash
bun install
```

Create a local `.env.local` file:

```bash
DB_PATH=./data/tinynotes.db
AUTH_SECRET=replace-with-a-long-random-secret
APP_URL=http://localhost:3000
```

For production, `AUTH_SECRET` or `BETTER_AUTH_SECRET` must be set, and `APP_URL` must use an `https://` URL.

Run migrations before starting the app:

```bash
bun run db:migrate
```

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `bun run dev` starts the local Next.js development server.
- `bun run build` creates a production build.
- `bun run start` runs the production build.
- `bun run lint` runs oxlint.
- `bun run format` formats the project with oxfmt.
- `bun run db:migrate` applies pending SQLite migrations.
- `bun run db:rollback` rolls back the latest migration.
- `bun run db:status` shows migration status.

## Project Structure

- `src/app/` contains the App Router pages, layouts, loading states, and API routes.
- `src/components/` contains reusable UI, layout, and auth components.
- `src/lib/` contains server/client helpers for auth and SQLite access.
- `migrations/` contains reversible SQL migrations with `-- up` and `-- down` sections.
- `scripts/migrations.ts` runs the migration commands.
