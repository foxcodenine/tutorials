# Backend

## Overview

A Python FastAPI application that serves the Kanban Studio frontend and exposes a JSON API. Managed with `uv` as the package manager. Runs inside Docker — do not run `uv` commands on the host; use `docker exec` instead.

## Tech Stack

- **Python 3.12**
- **FastAPI** for the HTTP API
- **Uvicorn** (ASGI server)
- **PyJWT** for JWT token creation and validation
- **Anthropic SDK** (`anthropic>=0.40`) for AI chat
- **uv** for dependency management (`pyproject.toml`)

## Structure

| Path | Purpose |
|---|---|
| `pyproject.toml` | Project metadata and dependencies |
| `main.py` | FastAPI app entry point; defines all routes and Pydantic models |
| `auth.py` | JWT helpers: `create_token`, `get_current_user` dependency |
| `database.py` | SQLite connection, `init_db`, `get_db` dependency, seed data |
| `static/` | Built Next.js static output, served at `/` as a catch-all |
| `tests/` | pytest suite (in-memory SQLite) |

## API Routes

| Method | Path | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | None | Returns `{"status": "ok"}` |
| POST | `/api/auth/login` | None | Validates hardcoded credentials (`user`/`password`), returns `{"token": "<jwt>"}` |
| GET | `/api/board` | Bearer JWT | Returns full board for the authenticated user |
| PUT | `/api/board` | Bearer JWT | Full-replace the board; deletes all columns (cascades to cards), re-inserts from request body, returns saved board |
| POST | `/api/ai/test` | Bearer JWT | Smoke-test route — sends "What is 2+2?" to Anthropic, returns raw text response |
| POST | `/api/ai/chat` | Bearer JWT | Main AI chat route — see AI section below |
| GET | `/` (catch-all) | None | Serves built Next.js static files |

## AI Chat (`POST /api/ai/chat`)

**Request body:**
```json
{ "message": "string", "history": [{"role": "user|assistant", "content": "string"}] }
```

**Response:**
```json
{ "reply": "string", "board_updated": true|false }
```

**How it works:**
1. Fetches the current board for the authenticated user
2. Builds a system prompt that includes the full board JSON as context
3. Calls `claude-sonnet-4-6` via the Anthropic SDK with the `respond` tool enforced (`tool_choice={"type":"tool","name":"respond"}`)
4. The `respond` tool schema forces structured output: `{"reply": string, "board_update": BoardData|null}`
5. If `board_update` is non-null, calls `_replace_board()` to persist the new board state
6. Returns `{"reply": ..., "board_updated": bool}`

**Key implementation details:**
- `_replace_board(board_id, body, db)` is a shared helper used by both `PUT /api/board` and `POST /api/ai/chat`
- `ANTHROPIC_API_KEY` must be set in `.env` — loaded by Docker Compose at runtime
- Model: `claude-sonnet-4-6`

## Auth Pattern

JWT signed with HS256, 24-hour expiry. Secret: `"kanban-dev-secret-key-change-in-production"` (must be ≥32 bytes). Credentials are validated by hardcoded string comparison in `main.py` — not DB-based for the MVP. `users.password_hash` is `"mvp-placeholder"` in the seed.

The `get_current_user` FastAPI dependency (in `auth.py`) uses `HTTPBearer` to extract the token from the `Authorization: Bearer <token>` header and returns the username string.

## Database

SQLite via the standard library `sqlite3` (sync). FastAPI runs sync endpoints in a thread pool, so this is fine without `aiosqlite`.

- **`DB_PATH`** env var defaults to `/app/data/kanban.db`; set to `:memory:` in tests
- **Named volume** `kanban_data` is mounted at `/app/data` in `docker-compose.yml` so the DB survives container restarts
- **Foreign keys** are enabled via `PRAGMA foreign_keys = ON`
- **`get_db`** yields a connection, commits on success, rolls back on exception
- **`init_db`** creates all tables and calls `_seed_if_empty` to insert the default user + board on first run

### Schema

```
users    (id, username, password_hash)
boards   (id, user_id→users, name)
columns  (id, board_id→boards, title, position)
cards    (id, column_id→columns, title, details, position)
```

All foreign keys have `ON DELETE CASCADE`. Integer IDs are serialized as strings in API responses (e.g., `"id": "3"`) to match the frontend `string` type.

## Running Tests

Tests run inside Docker:

```
docker exec pm-app-1 bash -c "uv run pytest tests/ -v"
```

The test fixture overrides `DB_PATH` to `:memory:` and uses `check_same_thread=False` (required because FastAPI's `TestClient` runs sync handlers in a worker thread).
