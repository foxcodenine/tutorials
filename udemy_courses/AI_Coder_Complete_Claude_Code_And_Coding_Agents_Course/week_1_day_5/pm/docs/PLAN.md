# Project Plan — Kanban Studio MVP

> **Frontend migration complete** — the old `src/`-based frontend has been fully replaced
> with a new native-DnD frontend. All 10 migration steps done; 26 unit tests + 16 e2e
> tests passing. See `docs/FRONTEND_MIGRATION.md` for the full record.

---

## Part 1: Plan

**Goal:** Produce detailed plans for all parts and get user approval.

### Steps
- [x] Read and understand the existing frontend code
- [x] Create `frontend/AGENTS.md` describing the existing frontend
- [x] Enrich this document with substeps, checklists, and success criteria for each part
- [x] User reviews and approves this plan

### Success Criteria
- User has approved this document before any implementation begins

---

## Part 2: Scaffolding

**Goal:** Working Docker container that serves a "hello world" HTML page and demonstrates a working API call.

### Steps
- [x] Create `Dockerfile` at project root using `uv` as the Python package manager
- [x] Create `docker-compose.yml` (or equivalent) for easy local start/stop
- [x] Create `backend/` Python package with FastAPI, including a `GET /api/health` route returning `{"status": "ok"}`
- [x] Add a `GET /` route serving a static `hello.html` that loads and displays the result of a `GET /api/health` call (proving frontend → backend connectivity)
- [x] Create `scripts/start.sh` (Mac/Linux) and `scripts/start.ps1` (Windows) to build and run the container
- [x] Create matching `stop` scripts
- [x] Update `backend/AGENTS.md` with a description of the backend structure
- [x] Update `scripts/AGENTS.md` with a description of the scripts

### Design Decisions
- Multi-stage Docker build: Node 22-slim stage builds the Next.js static output; Python 3.12-slim stage runs uvicorn and copies the built static files
- `uv` is only available inside Docker — never run `uv` commands on the host; use `docker exec` instead
- `.dockerignore` excludes `frontend/node_modules`, `frontend/.next`, `frontend/out`, `.git`, `.env` — without this the build context is 465 MB+

### Tests & Success Criteria
- `docker compose up` (or start script) completes without errors
- `curl http://localhost:8000/api/health` returns `{"status": "ok"}`
- Browser at `http://localhost:8000/` shows the hello world page with the API response rendered on the page
- Stop script cleanly stops the container

---

## Part 3: Add in Frontend

**Goal:** The static-built NextJS app is served by FastAPI so the Kanban board appears at `/`.

### Steps
- [x] Add a `next build` + `next export` step to the Docker build that outputs static files
- [x] Configure FastAPI to serve the NextJS static output at `/` (catch-all route after API routes)
- [x] Remove or replace the temporary `hello.html`
- [x] Confirm Next.js `next.config.ts` is set to `output: "export"` for static generation
- [x] Write unit tests for existing frontend components (expand coverage on `KanbanBoard`, `KanbanColumn`, `NewCardForm`)
- [x] Write Playwright e2e tests: board loads, column rename works, add card works, drag-and-drop moves a card

### Design Decisions
- Playwright e2e tests point to Docker at `http://127.0.0.1:8000` (no `webServer` config) — Docker must be running before running e2e tests
- Vitest config uses `.mts` extension (`vitest.config.mts`) to force ESM loading — required by `@vitejs/plugin-react@5.x`
- `happy-dom` replaces `jsdom` as the test environment — `jsdom@27` has an ESM incompatibility with `parse5@8`
- `vite` is pinned to `^6.0.0` — `vite@7` breaks `vitest@3.2.4` CJS loader

### Tests & Success Criteria
- `npm run test` in `frontend/` passes (Vitest, against happy-dom)
- `npm run test:e2e` in `frontend/` passes (Playwright, against Docker on port 8000)
- After `docker compose up`, `http://localhost:8000/` shows the full Kanban board
- Refreshing the page still shows the board (static serving works)

---

## Part 4: Fake User Sign-In

**Goal:** The board is behind a login wall. Dummy credentials `user` / `password` grant access; a logout button ends the session.

### Steps
- [x] Create a `LoginPage` component in the frontend
- [x] Add client-side auth state (React context or simple state lifted to layout)
- [x] Redirect unauthenticated users from `/` to `/login` (or render the login page in-place)
- [x] On successful login, store a session token (e.g., cookie or `sessionStorage`) and show the board
- [x] Add a Logout button in the board header that clears the session and returns to login
- [x] Backend: add a `POST /api/auth/login` route validating hardcoded credentials and returning a session token (JWT or signed cookie)
- [x] Backend: protect the API routes with the session token
- [x] Rebuild static frontend and re-test Docker serving

### Design Decisions
- Token stored in `sessionStorage` (cleared when the tab closes; survives page reloads within the same tab)
- JWT signed with PyJWT, HS256, 24-hour expiry; secret is `"kanban-dev-secret-key-change-in-production"` (must be ≥32 bytes for HS256)
- Login credentials are hardcoded string comparison in `auth.py` — not DB-based for the MVP
- `page.tsx` holds token in React state (`undefined` = not yet checked, `null` = logged out, `string` = authenticated) and initialises from `sessionStorage` in a `useEffect` to avoid SSR/hydration mismatch

### Tests & Success Criteria
- Backend test: `POST /api/auth/login` correct credentials → token; wrong credentials → 401
- Playwright e2e: unauthenticated visit to `/` shows the login page
- Playwright e2e: login with `user`/`password` → board visible; logout → back to login
- Playwright e2e: wrong credentials → error message shown (no redirect)

---

## Part 5: Database Modeling

**Goal:** Agree on a SQLite schema that supports the Kanban for multiple users (even though the MVP has one).

### Steps
- [x] Draft database schema as a JSON document saved to `docs/schema.json`
- [x] Write a short `docs/DATABASE.md` explaining the schema, relationships, and reasoning
- [x] Present to user for sign-off before any implementation

### Schema
- `users` table (id, username, password hash)
- `boards` table (id, user_id, name) — cascade delete from users
- `columns` table (id, board_id, title, position) — cascade delete from boards
- `cards` table (id, column_id, title, details, position) — cascade delete from columns

### Success Criteria
- User has reviewed and approved `docs/schema.json` and `docs/DATABASE.md`

---

## Part 6: Backend

**Goal:** API routes for reading and mutating the Kanban, backed by SQLite.

### Steps
- [x] Add SQLite setup with `sqlite3` (sync); create DB and tables on startup if they don't exist
- [x] Seed a default board for the hardcoded user on first run
- [x] `GET /api/board` — return the full board for the authenticated user
- [x] `PUT /api/board` — replace the full board state for the authenticated user
- [x] Write backend unit tests for each route (use an in-memory SQLite DB for tests)

### Design Decisions
- Used sync `sqlite3` (not `aiosqlite`) — FastAPI runs sync endpoints in a thread pool so this is fine
- `PUT /api/board` is a full replace: deletes all existing columns (cascades to cards), then re-inserts from the request body. Simple and correct for the MVP single-board model
- DB integer IDs are serialized as strings in API responses (e.g., `"id": "3"`) to match the frontend `string` type used throughout
- `docker-compose.yml` mounts a named volume `kanban_data` at `/app/data` so the DB survives container restarts
- `DB_PATH` env var defaults to `/app/data/kanban.db`; set to `:memory:` in tests
- In-memory SQLite fixture uses `check_same_thread=False` — FastAPI's TestClient runs sync handlers in a worker thread, not the main thread
- `users.password_hash` is set to `"mvp-placeholder"` in the seed; auth still uses hardcoded string comparison
- Backend tests run inside Docker: `docker exec pm-app-1 bash -c "uv run pytest tests/ -v"`

### Tests & Success Criteria
- pytest: `GET /api/board` returns 5 columns with all card references valid
- pytest: `PUT /api/board` persists; subsequent `GET` reflects the change
- pytest: unauthenticated requests to `/api/board` return 401
- Manual: restarting the container preserves board data (named volume)

---

## Part 7: Frontend + Backend Integration

**Goal:** The app is a fully persistent Kanban — all changes write through to the backend API.

### Steps
- [x] Replace in-memory `useState` in `KanbanBoard` with API-backed state (`useEffect` to load, API calls on mutation)
- [x] Add loading and error states in the UI
- [x] All mutations (move card, rename column, add card, delete card) call `PUT /api/board`
- [x] Rebuild static frontend and confirm Docker serving works end-to-end

### Design Decisions
- `frontend/lib/api.ts` — thin module with `getBoard(token)` and `putBoard(token, board)`; all fetch logic lives here (note: `src/` prefix removed in frontend migration)
- `KanbanBoard` now accepts `token: string` as a prop (passed down from `page.tsx`)
- Column rename updates local state on every `onChange` keystroke (responsive UI) but only calls `PUT /api/board` on input `blur` — avoids hammering the API on every keypress
- A `boardRef` (via `useRef`) holds the latest board state so mutation handlers avoid stale closures without listing `board` as a `useEffect` dependency
- After every `PUT`, the server response replaces local state — server is source of truth. Since `PUT` re-inserts all rows with new autoincrement IDs, the frontend always uses the IDs returned by the server
- `KanbanBoard.test.tsx` mocks `@/lib/api` at module level (`vi.mock`) and sets up implementations in `beforeEach` — avoids the `vi.mock` factory hoisting problem with top-level imports
- E2e board tests use real login (username/password) instead of the old `sessionStorage` bypass — the bypass no longer works because the board now calls a real authenticated API

### Tests & Success Criteria
- [x] Playwright e2e: add a card, refresh → card persists (proves full write-through)
- [x] Playwright e2e: drag card to another column, refresh → card stays in new column
- [x] No regressions in auth or backend tests

---

## Part 8: AI Connectivity

**Goal:** The backend can make a call to Anthropic and get a response.

### Steps
- [x] Add `ANTHROPIC_API_KEY` to `.env` and pass it through `docker-compose.yml` via `env_file`
- [x] Add `anthropic` Python package; use the Anthropic SDK directly
- [x] Create a `POST /api/ai/test` route that sends "What is 2+2?" and returns the raw AI response
- [x] Write a backend test mocking the Anthropic client and confirming the route returns a response

### Design Decisions
- Use the `anthropic` Python SDK directly (not OpenRouter / `openai` SDK)
- Model: `claude-sonnet-4-6` via Anthropic API
- `ANTHROPIC_API_KEY` in `.env`; Docker loads it via `env_file` in `docker-compose.yml` — no `python-dotenv` needed
- Response text is at `message.content[0].text` (Anthropic SDK shape, not `choices[0].message.content`)
- Test mocks `anthropic.Anthropic` using `unittest.mock.patch` on `main.anthropic.Anthropic`
- Parts 9 and 10 will use Anthropic tool use (`tools=` parameter) for structured output instead of `response_format`
- Route is auth-protected (paid API — consistent with all other `/api/` routes)

### Tests & Success Criteria
- pytest: `POST /api/ai/test` with mocked Anthropic client returns the AI response string
- pytest: unauthenticated request returns 401
- Manual: real key in `.env` → route returns a sensible answer to "2+2"

---

## Part 9: AI Board Integration

**Goal:** The AI receives the full board context and user question, and can respond with structured output that optionally updates the board.

### Steps
- [x] Define a Structured Output schema: `{ "reply": string, "board_update": BoardData | null }`
- [x] Create `POST /api/ai/chat` accepting `{ "message": string, "history": [...] }`
- [x] Build the system prompt: include the current board JSON for the authenticated user
- [x] Call Anthropic with the `respond` tool enforced for structured output
- [x] If `board_update` is non-null, persist it to the database
- [x] Return `{ "reply": string, "board_updated": bool }` to the frontend
- [x] Write backend unit tests: board update persisted, no-update path

### Design Decisions
- Structured output uses Anthropic tool use (`tools=` + `tool_choice={"type":"tool","name":"respond"}`) — forces the model to always call the `respond` tool
- `board_update` schema uses `anyOf: [null, BoardData]` — null means no board change
- If `board_update` is non-null, `_replace_board` (shared with `PUT /api/board`) persists it as a full replacement
- `_replace_board` helper extracted from `put_board` to avoid duplication
- History is `[{"role": "user"|"assistant", "content": "..."}]` — maps directly to Anthropic messages format
- Route is auth-protected

### Tests & Success Criteria
- [x] pytest: when AI returns `board_update`, it is persisted and reflected in `GET /api/board`
- [x] pytest: when AI returns `board_update: null`, the board is unchanged
- [x] pytest: unauthenticated request returns 401
- Manual: send "add a card called Test Card to Backlog" and verify the board changes

---

## Part 10: AI Chat Sidebar

**Goal:** A polished sidebar in the UI for chatting with the AI, with live board updates when the AI decides to change the board.

### Steps
- [x] Create a `ChatSidebar` component (collapsible panel on the right)
- [x] Message input, send button, message history display (user and AI turns)
- [x] Wire to `POST /api/ai/chat`; show a loading state while waiting
- [x] If `board_updated: true` in the response, re-fetch the board from `GET /api/board` and update state
- [x] Style using the project color tokens; no emojis
- [x] Add a toggle button in the board header to open/close the sidebar

### Design Decisions
- `ChatSidebar` receives `token` and `onBoardRefresh: () => Promise<void>` — keeps board state in `KanbanBoard`
- `chatAI` helper added to `frontend/lib/api.ts` — consistent with `getBoard`/`putBoard` (note: `src/` prefix removed in frontend migration)
- Sidebar is `w-80` fixed width, flex-row layout alongside the board
- Board area is `flex-1 overflow-auto`; sidebar is a fixed `<aside>` with `w-80`
- `refreshBoard` from `useKanban` calls `getBoard` silently on AI board update
- History passed as `messages` array — maps directly to the backend `history` field
- Toggle button uses yellow/navy (purple was removed in frontend migration)

### Tests & Success Criteria
- [x] Playwright e2e: open sidebar, send a message, reply appears in chat
- [x] Playwright e2e: AI-triggered board update reflects in the UI without a page refresh (60s timeout for real AI call)
- No regressions in existing e2e tests
