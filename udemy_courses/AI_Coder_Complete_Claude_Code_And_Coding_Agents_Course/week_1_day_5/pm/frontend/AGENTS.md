<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Frontend — Kanban Studio

Next.js 16 app using `output: "export"` (static export). Built inside Docker and served by the Python FastAPI backend at `/`.

## Directory layout

```
frontend/
  app/
    layout.tsx        # html/body shell, h-full, system font
    page.tsx          # "use client" — auth gate (token state: undefined|null|string)
    globals.css       # body bg #eef1f5, system font, box-sizing reset
  components/
    LoginPage.tsx     # Two-panel login form; calls POST /api/auth/login
    Board.tsx         # Kanban board + AI sidebar toggle; calls useKanban(token)
    Column.tsx        # Single column with rename, drag-over, drop zone; data-testid="column-{id}"
    KanbanCard.tsx    # Draggable card; data-testid="card-{id}"
    AddCardForm.tsx   # Inline form shown when "+ Add card" is clicked
    ChatSidebar.tsx   # AI chat panel; calls chatAI(); data-testid="chat-sidebar"
  hooks/
    useKanban.ts      # All board state: loads from API, saves on every mutation
  lib/
    api.ts            # getBoard / putBoard / chatAI + apiToColumns / columnsToApi adapters
    types.ts          # Card { id, title, details } / Column { id, name, cards: Card[] }
    dragState.ts      # Module-level singleton for native HTML5 DnD state
    initialData.ts    # Seed data (only used as a fallback — not active)
  __tests__/
    api.test.ts       # 9 unit tests — adapter functions
    components.test.tsx # 17 unit tests — AddCardForm, Column, Board
  tests/
    kanban.spec.ts    # 16 Playwright e2e tests
  playwright.config.ts  # baseURL: http://127.0.0.1:8000, testDir: ./tests
  vitest.config.ts      # globals: true, happy-dom, @/* → ./
  vitest.setup.ts       # imports @testing-library/jest-dom
```

## Key conventions

- **No `src/` directory** — all source is at `frontend/` root. The `@/*` alias maps to `./` (not `./src/`).
- **`output: "export"`** is mandatory — the Dockerfile copies `out/` to Python's static dir.
- **Native HTML5 DnD** — no @dnd-kit. Cards set `draggable` and use `dragstart`/`dragover`/`drop` events. `dragState.ts` is a module singleton tracking the in-flight card.
- **Data model** — the backend uses a normalised format (`{ columns: [{id, title, cardIds}], cards: {} }`). The frontend uses denormalised `Column { id, name, cards: Card[] }`. The `apiToColumns` / `columnsToApi` functions in `lib/api.ts` are the only place this translation happens.
- **Auth** — JWT stored in `sessionStorage`. Token state: `undefined` = not yet checked (renders nothing to avoid hydration flash), `null` = logged out, `string` = authenticated.
- **useKanban** — accepts `token: string`. Loads board on mount via `getBoard`. Every mutation calls `save(next)` which does an optimistic `setColumns` then calls `putBoard` and replaces state with the server response. Uses `columnsRef` (useRef) to avoid stale closures.
- **vitest** — `globals: true` (needed for `@testing-library/react` auto-cleanup). Unit tests in `__tests__/`. Playwright e2e tests in `tests/` (excluded from vitest).
- **Playwright DnD** — use `page.dragAndDrop(source, target)` for native HTML5 drag events. The old `page.mouse.move/down/up` approach does not work.

## Color scheme

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#032147` | Headings, primary text, header bg |
| Yellow | `#ecad0a` | Accent border, primary buttons, logout |
| Blue | `#209dd7` | Focus rings, hover accents, drag highlight |
| Gray | `#888888` | Secondary text, labels |
| Background | `#eef1f5` | Page background |

No purple (`#753991`) is used — all CTAs use yellow/navy.

## Running tests

```bash
# Unit tests (from frontend/)
npm run test

# E2e tests (requires Docker running on port 8000)
npm run test:e2e
```
