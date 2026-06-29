# Kanban Studio MVP — Project Overview

## What this is

A self-hosted Kanban board with an AI assistant. Runs entirely in a single Docker container: a Python FastAPI backend serves the API and hosts the statically-built Next.js frontend.

## Current state

All planned parts are complete. The project is fully working end-to-end:
- Login → board loads from the database → drag/add/delete/rename all persist
- AI chat sidebar: send a message, AI can read and update the board
- 26 unit tests + 16 Playwright e2e tests all passing

See `docs/PLAN.md` for the full plan and implementation record.
See `docs/FRONTEND_MIGRATION.md` for the frontend migration record.

---

## Repository layout

```
.
├── Dockerfile               # Multi-stage: Node builds frontend, Python serves it
├── docker-compose.yml       # Single service: pm-app, port 8000, named volume for DB
├── .env                     # ANTHROPIC_API_KEY (never commit)
├── .dockerignore
├── backend/                 # FastAPI Python app
├── frontend/                # Next.js app (static export)
├── docs/                    # Planning and migration documents
└── scripts/                 # start/stop shell scripts
```

---

## Running the app

```bash
# Build and start (from project root)
./scripts/start.sh          # Mac/Linux
./scripts/start.ps1         # Windows

# Or directly:
docker compose up -d --build

# Stop
docker compose down
```

App is available at `http://localhost:8000`.
Login: username `user`, password `password`.

---

## Technical stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16 (static export, `output: "export"`) |
| Backend | Python 3.12, FastAPI, Uvicorn |
| Database | SQLite (via stdlib `sqlite3`), named Docker volume |
| Auth | PyJWT, HS256, 24h expiry, Bearer token in `sessionStorage` |
| AI | Anthropic SDK (`claude-sonnet-4-6`), tool use for structured output |
| DnD | Native HTML5 drag events (no @dnd-kit) |
| Package mgr | `uv` for Python (Docker only), `npm` for Node |

---

## Color scheme (active — no purple)

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#032147` | Header bg, primary text, headings |
| Yellow | `#ecad0a` | Accent border, all primary buttons, logout |
| Blue | `#209dd7` | Focus rings, drag highlight, rename input border |
| Gray | `#888888` | Secondary text, labels, placeholders |
| Background | `#eef1f5` | Page background |

Purple (`#753991`) was removed — all CTAs use yellow/navy.

---

## Coding standards

1. Use latest versions of libraries and idiomatic approaches
2. Keep it simple — never over-engineer, no unnecessary defensive programming, no extra features
3. Be concise. No emojis. Minimal comments (only when the WHY is non-obvious)
4. When hitting issues: identify root cause before trying a fix. Prove with evidence, then fix

---

## Environment

- `ANTHROPIC_API_KEY` — required at runtime; loaded from `.env` via `docker compose`
- `DB_PATH` — defaults to `/app/data/kanban.db`; set to `:memory:` in tests
- Do NOT run `uv` commands on the host — only inside Docker (`docker exec pm-app-1 ...`)

---

## Running tests

```bash
# Backend unit tests (inside Docker)
docker exec pm-app-1 bash -c "uv run pytest tests/ -v"

# Frontend unit tests (from frontend/)
cd frontend && npm run test

# Frontend e2e tests (requires Docker running on port 8000)
cd frontend && npm run test:e2e
```

---

## Key architectural decisions

- **Static export**: Next.js builds to `out/`; Dockerfile copies it to `/app/static/`; FastAPI mounts it as a catch-all. `output: "export"` in `next.config.ts` is mandatory.
- **AI structured output**: The `respond` Anthropic tool with `tool_choice={"type":"tool","name":"respond"}` forces a `{"reply": string, "board_update": BoardData|null}` response every time.
- **Data model adapter**: Backend uses normalised `{columns:[{id,title,cardIds}], cards:{}}`. Frontend uses denormalised `Column{id,name,cards:Card[]}`. `apiToColumns`/`columnsToApi` in `frontend/lib/api.ts` are the only translation points.
- **Board persistence**: `PUT /api/board` is a full replace — deletes all columns (cascades to cards) and re-inserts from request body.

---

## Docs index

| File | Contents |
|------|----------|
| `docs/PLAN.md` | Full implementation plan, all parts, design decisions |
| `docs/FRONTEND_MIGRATION.md` | 10-step migration from old src/-based frontend to new native-DnD frontend |
| `docs/DATABASE.md` | Schema details |
| `docs/api.rest` | HTTP request collection for manual testing |
| `frontend/AGENTS.md` | Frontend structure, conventions, test commands |
| `backend/AGENTS.md` | Backend structure, API routes, auth, DB details |
| `scripts/AGENTS.md` | Start/stop scripts reference |
