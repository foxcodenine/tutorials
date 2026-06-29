# Frontend Migration Plan — old `frontend/` → `new/frontend/`

## What the new frontend actually is

The new frontend (`new/frontend/`) is a minimal, local-state-only Kanban board with no test
infrastructure, no @dnd-kit, no auth, no API calls, and a fundamentally different data model.
This plan migrates us to it while re-adding all the features we built in Parts 4–10.

---

## Critical differences (updated after full code review)

| Area | Old (`frontend/`) | New (`new/frontend/`) |
|---|---|---|
| Directory layout | `src/app/`, `src/components/`, `src/lib/` | `app/`, `components/`, `lib/`, `hooks/` (no `src/`) |
| tsconfig path alias | `@/*` → `./src/*` | `@/*` → `./*` |
| next.config | `output: "export"` | `reactStrictMode: false` (NO static export) |
| Playwright config | exists, targets Docker port 8000 | **does not exist** |
| Vitest config | exists (happy-dom) | **does not exist** |
| Test packages | vitest, @playwright/test, testing-library | **none** |
| Test files | 4 unit + 1 e2e spec | **none** |
| DnD library | @dnd-kit (pointer sensor, DragOverlay) | **native HTML5 drag events** |
| Column type | `{ id, title, cardIds: string[] }` | `{ id, name, cards: Card[] }` |
| Board type | `{ columns, cards: Record<string,Card> }` (normalised) | **columns is the only state (denormalised)** |
| State pattern | `useState` + `useRef` in `KanbanBoard` | `useKanban()` custom hook |
| Auth | LoginPage + sessionStorage token | **none** |
| API client | `lib/api.ts` (getBoard, putBoard, chatAI) | **none** |
| AI sidebar | `ChatSidebar.tsx` | **none** |
| Drag preview | `KanbanCardPreview.tsx` (DragOverlay) | **none** (native DnD shows original) |
| Fonts | Space Grotesk + Manrope (Google Fonts) | System font stack |
| CSS tokens | CSS custom properties (var(--primary-blue) etc.) | Hardcoded hex colours |
| Packages | 16 prod+dev | 8 prod+dev (no DnD, no test) |

### Data model incompatibility — adapter required

Backend returns **normalised** data:
```json
{ "columns": [{ "id":"1", "title":"Backlog", "cardIds":["1","2"] }],
  "cards": { "1": { "id":"1","title":"...","details":"..." } } }
```

New frontend uses **denormalised** columns:
```ts
Column { id: string; name: string; cards: Card[] }
```

An adapter layer in `lib/api.ts` must convert between the two formats on every API call.

### DnD incompatibility — Playwright tests need updating

Old Playwright tests use `page.mouse.move/down/up` (mouse events → works with @dnd-kit's
PointerSensor). New frontend uses native HTML5 drag events (`dragstart`, `dragover`, `drop`).
Playwright's `page.dragAndDrop(source, target)` fires native drag events and will work, but
all drag tests must be rewritten to use it.

---

## Migration Steps

### Step 1 — Copy new frontend + fix Docker config

**Goal:** Replace `frontend/` with new code; get Docker build passing.

- [x] `rsync` everything from `new/frontend/` into `frontend/` (exclude `node_modules`, `.next`)
- [x] In `frontend/next.config.ts` replace `reactStrictMode: false` with `output: "export"`
      (Dockerfile copies `/frontend/out` to Python static — this is mandatory)
- [x] Create `frontend/playwright.config.ts` (does not exist in new) targeting
      `http://127.0.0.1:8000`, `testDir: "./tests"`, no `webServer` block, 60s timeout
- [x] Run `docker compose build` — confirm build passes and new board UI loads at
      `http://localhost:8000/` (shows local seed data, no auth yet)
- [x] Added `playwright.config.ts` and `vitest.config.ts` to `tsconfig.json` exclude list
      to prevent TypeScript errors during `next build`

**Success criteria:**
- Docker build passes, `curl http://localhost:8000/` returns HTML with the new board

---

### Step 2 — Add test infrastructure back

**Goal:** Restore vitest and playwright packages so unit and e2e tests can run.

- [x] Add to `frontend/package.json` devDependencies:
  - `"vitest": "^3.2.4"` (pin to same major as old to keep config simple)
  - `"@vitejs/plugin-react": "^5.1.2"`
  - `"@testing-library/react": "^16.3.2"`
  - `"@testing-library/jest-dom": "^6.9.1"`
  - `"@testing-library/user-event": "^14.6.1"`
  - `"happy-dom": "^20.10.6"`
  - `"@playwright/test": "^1.58.0"`
- [x] Add test scripts to `package.json`:
  - `"test": "vitest run"`
  - `"test:watch": "vitest"`
  - `"test:e2e": "playwright test"`
- [x] Create `frontend/vitest.config.ts` (environment: happy-dom, alias `@` → `.`,
      setupFiles: `./vitest.setup.ts`)
- [x] Create `frontend/vitest.setup.ts` importing `@testing-library/jest-dom`
- [x] Run `npm install` in `frontend/` on the host to install new packages

**Success criteria:**
- `npm run test` in `frontend/` runs (no tests yet, just confirms vitest starts)

---

### Step 3 — Add the adapter layer + API client

**Goal:** `lib/api.ts` bridges the backend normalised format and the new denormalised
`Column[]` format the frontend uses.

- [x] Create `frontend/lib/api.ts` with:
  - Types: re-export `Board` as `BoardData` from `lib/types.ts`; keep a local
    `ApiBoard = { columns: ApiColumn[]; cards: Record<string,Card> }` for the wire format
  - `apiToColumns(data: ApiBoard): Column[]` — maps `title→name` and resolves `cardIds`
    into embedded `Card[]`
  - `columnsToApi(columns: Column[]): ApiBoard` — maps `name→title` and splits out
    cards into the flat `cards` dict with `cardIds`
  - `getBoard(token): Promise<Column[]>` — fetches `/api/board`, runs `apiToColumns`
  - `putBoard(token, columns: Column[]): Promise<Column[]>` — calls `columnsToApi`,
    PUTs to `/api/board`, runs `apiToColumns` on the response
  - `chatAI(token, message, history): Promise<{ reply, board_updated }>` — unchanged
    from old implementation

**Success criteria:**
- TypeScript compiles cleanly (`docker compose build` or local `npx tsc --noEmit`)

---

### Step 4 — Port auth (LoginPage + page.tsx token flow)

**Goal:** App is behind a login wall.

- [x] Copy `LoginPage.tsx` from old `src/components/` into `frontend/components/`
- [x] The new `globals.css` does not define CSS custom properties — LoginPage uses
      hardcoded hex colors already so no style changes are needed; confirm visually
- [x] Rewrite `frontend/app/page.tsx` as `"use client"`:
  - `token` state: `undefined | null | string` (initialised from `sessionStorage` in
        `useEffect` to avoid SSR/hydration mismatch — same pattern as old `page.tsx`)
  - Render `<LoginPage onSuccess={...}>` when `!token`
  - Render `<Board token={token} onLogout={...}>` when authenticated
- [x] No `clsx` needed — LoginPage uses only inline hex colors and Tailwind classes

**Success criteria:**
- Unauthenticated visit shows login form
- `user` / `password` → board loads; Logout → login returns

---

### Step 5 — Make `useKanban` API-aware

**Goal:** Replace local seed state with API-backed state; all mutations persist.

- [x] Add `token: string` parameter to `useKanban(token)`
- [x] Replace `useState(initialColumns)` with `useState<Column[]>([])`
- [x] Add `loading: boolean` and `error: string | null` state
- [x] Add `useEffect` calling `getBoard(token)` on mount to populate columns
- [x] Add `columnsRef = useRef<Column[]>([])` kept in sync with `columns` — avoids
      stale closures in mutation callbacks (same pattern as old `boardRef`)
- [x] Replace direct `setColumns(next)` in each mutation with a `save(next)` helper:
  ```ts
  async function save(next: Column[]) {
    setColumns(next);               // optimistic update
    const saved = await putBoard(token, next);
    setColumns(saved);              // replace with server response
  }
  ```
- [x] Add `refreshBoard(): Promise<void>` to the returned object (used by ChatSidebar
      when AI updates the board)
- [x] Export `loading`, `error`, `refreshBoard` from the hook
- [x] Update `Board.tsx` to pass `token` to `useKanban` and render loading/error states

**Success criteria:**
- Board loads from API on login ✓
- Add/move/delete a card then refresh page → change persists ✓

---

### Step 6 — Add `data-testid` attributes

**Goal:** Playwright tests need stable selectors; these must match the existing test
helper `loginAsUser` which expects `[data-testid^="column-"]` and `[data-testid^="card-"]`.

- [x] `Column.tsx` — add `data-testid={`column-${column.id}`}` to the outer `<div>`
- [x] `KanbanCard.tsx` — add `data-testid={`card-${card.id}`}` to the outer `<div>`
- [x] `ChatSidebar.tsx` (added in Step 7) — add `data-testid="chat-sidebar"` to `<aside>`

**Success criteria:**
- `page.locator('[data-testid^="column-"]')` returns 5 elements on the board page ✓
  (verified: both patterns compiled into bundle as `card-${e.id}` and `column-${e.id}`)

---

### Step 7 — Port the AI Chat Sidebar

**Goal:** Restore AI sidebar with toggle button.

- [x] Created `ChatSidebar.tsx` in `frontend/components/` (no old source to port — built fresh)
      — imports `chatAI` from `@/lib/api`, `data-testid="chat-sidebar"` on `<aside>`
- [x] Update `Board.tsx`:
  - Accept `token: string` and `onLogout: () => void` props (forward from `page.tsx`)
  - Call `useKanban(token)` instead of `useKanban()`
  - Add `sidebarOpen` state (`useState(false)`)
  - Add "✦ Open AI / ✕ Close AI" toggle button above the columns
  - Render `<ChatSidebar token={token} onBoardRefresh={refreshBoard} />` when open
  - Flex-row layout: board `flex-1 overflow-auto` + sidebar fixed `w-80`

**Success criteria:**
- Toggle opens/closes the sidebar ✓
- Sending a message returns a reply ✓
- AI board update refreshes the board without page reload ✓ (8→9 cards verified)
- `data-testid="chat-sidebar"` in bundle ✓
- Auth guard: no token → 401 ✓

---

### Step 8 — Port unit tests

**Goal:** Unit tests for the hook and components using new names and structure.

- [x] Created `frontend/__tests__/api.test.ts` — 9 tests covering adapter functions:
  - `apiToColumns`: title→name, cardIds→cards[], column order, empty cols, missing refs
  - `columnsToApi`: name→title, flat cards dict, cardIds order, round-trip
- [x] Created `frontend/__tests__/components.test.tsx` — 17 tests covering:
  - `AddCardForm` — render, disabled state, submit with title+details, Escape cancel, whitespace-only guard
  - `Column` — name, cards, badge count, rename input, onRename callback, add card form, data-testid
  - `Board` — renders columns, renders cards, AI toggle button, sidebar open/close
- [x] Added `globals: true` to `vitest.config.ts` so `@testing-library/react` auto-cleanup works
- [x] Explicit imports from `"vitest"` kept in all test files

**Success criteria:**
- `npm run test` passes all unit tests ✓ — 26/26 passed

---

### Step 9 — Port and update e2e tests

**Goal:** All Playwright tests pass against Docker on port 8000.

- [x] Created `frontend/tests/kanban.spec.ts` — 16 tests across 5 suites
- [x] Auth tests: login form visible, wrong credentials error, board loads, logout, 401 guard
- [x] Board tests: 5 columns render, cards visible, badge count visible
- [x] Add card tests: card appears + persists after reload (unique title per run)
- [x] Rename column: uses `getByTitle('Click to rename')` + `input.waitFor()` pattern
- [x] **Drag-and-drop**: rewrote using `page.dragAndDrop()` — native HTML5 DnD ✓
- [x] AI sidebar: toggle open/close, send message + reply, AI board update (total card count)

**Success criteria:**
- `npm run test:e2e` with Docker running on port 8000 — all tests pass ✓ 16/16

---

### Step 10 — Update AGENTS.md and docs

- [x] Rewrote `frontend/AGENTS.md` — full directory layout, all conventions, color scheme, test commands
- [x] Updated `docs/PLAN.md` with migration-complete banner
- [x] Deleted `new/` directory

**Success criteria:**
- `new/` deleted, AGENTS.md accurate ✓

---

## Execution order

Steps must run in sequence — each depends on the previous:

```
1 (copy+Docker) → 2 (test infra) → 3 (adapter+API) → 4 (auth) → 5 (useKanban API)
→ 6 (data-testid) → 7 (AI sidebar) → 8 (unit tests) → 9 (e2e tests) → 10 (docs)
```

Steps 3+4 can run in parallel. Steps 6+7 can run together.
Steps 8+9 only start once the full app works end-to-end (Steps 1–7 done).

---

## Risk notes

- **`output: "export"` is mandatory** — the Dockerfile does
  `COPY --from=frontend-builder /frontend/out ./static`. Without it the build
  produces `.next/` not `out/`, and the Docker copy fails.
- **`name` vs `title` in Column** — the backend and all existing API tests use `title`.
  The adapter in `lib/api.ts` is the only place this translation happens; don't leak
  it into the backend.
- **Native HTML5 DnD vs @dnd-kit** — old Playwright drag tests used mouse events that
  worked with @dnd-kit's PointerSensor. New native DnD listens to HTML drag events.
  `page.dragAndDrop()` fires the correct events; `page.mouse.move/down/up` does not.
- **`@/*` alias points to `frontend/`** (not `frontend/src/`). All ported files must
  use `@/components/...`, `@/lib/...`, `@/hooks/...` without a `src/` segment.
- **Vitest globals off** — every test file needs explicit imports from `"vitest"`.
- **No @dnd-kit** — the new frontend intentionally uses native DnD; do not add @dnd-kit
  back. The `KanbanCardPreview` drag overlay component is not needed.
