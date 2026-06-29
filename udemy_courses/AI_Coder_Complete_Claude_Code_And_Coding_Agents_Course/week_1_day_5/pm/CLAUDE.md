# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Kanban Studio MVP — a self-hosted Kanban board with an AI chat assistant. A multi-stage Docker build produces a single container: Node 22 builds the Next.js static output, Python 3.12/FastAPI serves it and exposes a JSON API.

Login: `user` / `password`. Available at `http://localhost:8000` when running.

## Running the app

```bash
# Build and start (project root)
docker compose up -d --build

# Stop
docker compose down
```

`ANTHROPIC_API_KEY` must be set in `.env` (loaded by Docker Compose via `env_file`). The SQLite database persists in the `kanban_data` named volume.

## Running tests

```bash
# Backend unit tests — must run inside Docker
docker exec pm-app-1 bash -c "uv run pytest tests/ -v"

# Single backend test
docker exec pm-app-1 bash -c "uv run pytest tests/test_board.py::test_get_board -v"

# Frontend unit tests (from frontend/)
cd frontend && npm run test

# Frontend unit tests watch mode
cd frontend && npm run test:watch

# Frontend e2e tests — requires Docker running on port 8000
cd frontend && npm run test:e2e
```

Never run `uv` commands on the host — only inside Docker via `docker exec`.

## Architecture

### Data flow
- **Frontend** (`frontend/`) — Next.js 16 static export (`output: "export"`). Built by Docker, copied to `backend/static/`, served by FastAPI as a catch-all.
- **Backend** (`backend/`) — FastAPI + `sqlite3` (sync). `main.py` defines all routes and Pydantic models; `auth.py` handles JWT; `database.py` handles SQLite init, seeding, and the `get_db` dependency.
- **Single container** — Dockerfile is multi-stage: Node builds `frontend/out/`, Python serves it.

### Key architectural decisions

**Data model translation** — backend uses normalised `{columns:[{id,title,cardIds}], cards:{}}`. Frontend uses denormalised `Column{id, name, cards: Card[]}`. The only translation points are `apiToColumns` / `columnsToApi` in `frontend/lib/api.ts`.

**`PUT /api/board` is a full replace** — deletes all columns (cascades to cards) then re-inserts from the request body. After every `PUT`, server response replaces local state (IDs change on every save because SQLite re-inserts rows with new autoincrement IDs).

**AI structured output** — `POST /api/ai/chat` forces `claude-sonnet-4-6` to always call the `respond` tool via `tool_choice={"type":"tool","name":"respond"}`. This guarantees structured output `{"reply": string, "board_update": BoardData|null}`.

**Auth** — JWT (HS256, 24h) stored in `sessionStorage`. Token state in `page.tsx`: `undefined` = not yet checked (avoids SSR hydration flash), `null` = logged out, `string` = authenticated. Credentials are hardcoded string comparison — not DB-based.

**Native HTML5 DnD** — no `@dnd-kit`. Cards set `draggable`; `dragState.ts` is a module singleton tracking the in-flight card. In Playwright use `page.dragAndDrop()`, not `page.mouse.*`.

**No `src/` directory in frontend** — all source is at `frontend/` root. The `@/*` alias maps to `./` (not `./src/`).

**`DB_PATH` env var** — defaults to `/app/data/kanban.db`; set to `:memory:` in backend tests. The in-memory SQLite fixture uses `check_same_thread=False` because FastAPI's `TestClient` runs sync handlers in a worker thread.

### Frontend structure

```
frontend/
  app/                    # Next.js app router
    layout.tsx            # html/body shell
    page.tsx              # auth gate, token state machine
  components/             # Board, Column, KanbanCard, LoginPage, AddCardForm, ChatSidebar
  hooks/useKanban.ts      # all board state; optimistic updates + server sync
  lib/api.ts              # getBoard / putBoard / chatAI + data model adapters
  lib/types.ts            # Card, Column types
  lib/dragState.ts        # module singleton for HTML5 DnD
  __tests__/              # Vitest unit tests
  tests/                  # Playwright e2e tests
```

### Backend structure

```
backend/
  main.py       # all FastAPI routes + Pydantic models
  auth.py       # create_token, get_current_user (HTTPBearer dependency)
  database.py   # init_db, get_db, seed data
  tests/        # pytest suite (in-memory SQLite)
  static/       # built Next.js output (populated by Docker build)
```

## Color scheme

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#032147` | Header bg, headings, primary text |
| Yellow | `#ecad0a` | All primary buttons, accent borders |
| Blue | `#209dd7` | Focus rings, drag highlight |
| Gray | `#888888` | Secondary text, labels |
| Background | `#eef1f5` | Page background |

No purple (`#753991`) — all CTAs use yellow/navy only.

## Coding standards

- Keep it simple — never over-engineer, no unnecessary defensive programming
- No emojis. Minimal comments (only when the WHY is non-obvious)
- When hitting issues: identify root cause with evidence before fixing
- `uv` for Python dependencies (Docker only), `npm` for Node
