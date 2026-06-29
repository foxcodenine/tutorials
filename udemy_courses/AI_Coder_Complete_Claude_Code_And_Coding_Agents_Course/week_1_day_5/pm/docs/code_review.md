# Code Review

Reviewed: 2026-06-23. All backend and frontend source files read in full.

---

## Critical (must fix — bugs, security, data loss)

---

### 1. ✅ FIXED — Hardcoded JWT secret in source code

**File:** `backend/auth.py:7`

```python
_SECRET = "kanban-dev-secret-key-change-in-production"
```

**Problem:** The JWT signing secret is committed to source control. Anyone with repo access can forge valid tokens for any username without knowing the password — full authentication bypass.

**Fix:** Load from an environment variable with no fallback:
```python
import os
_SECRET = os.environ["JWT_SECRET"]  # fails fast if unset
```

---

### 2. ✅ FIXED — Hardcoded credentials compared in plaintext

**File:** `backend/main.py:35`

```python
if body.username == "user" and body.password == "password":
```

**Problem:** Credentials are hardcoded and compared with `==` (not constant-time). The `password_hash` column in the DB exists but is never used. Susceptible to timing side-channels via Python's short-circuit `and`.

**Fix:** Load credentials from environment variables. Proper fix: hash and verify against the DB column using `bcrypt`/`argon2` and `hmac.compare_digest`.

---

### 3. ✅ FIXED — Silent card data loss in `_replace_board` when a card ID is in `cardIds` but absent from `cards`

**File:** `backend/main.py:114–128`

```python
card = body.cards.get(card_id_str)
if card:
    db.execute("INSERT INTO cards ...")
# else: card is silently dropped
```

**Problem:** If a `card_id` appears in `col.cardIds` but is missing from `body.cards`, the card is permanently deleted from the database with no error. This can happen with a buggy AI response — the AI tool schema does not enforce that every referenced card ID has a corresponding entry in `cards`.

**Fix:** Validate before executing any DELETE:
```python
def _replace_board(board_id: int, body: BoardData, db: sqlite3.Connection) -> None:
    all_referenced = {cid for col in body.columns for cid in col.cardIds}
    missing = all_referenced - set(body.cards.keys())
    if missing:
        raise HTTPException(status_code=422, detail=f"Cards referenced but missing: {missing}")
    db.execute("DELETE FROM columns WHERE board_id = ?", (board_id,))
    ...
```

---

### 4. ✅ FIXED — Unhandled `StopIteration` crash when AI returns no `tool_use` block

**File:** `backend/main.py:247`

```python
tool_use = next(b for b in response.content if b.type == "tool_use")
```

**Problem:** Raises `StopIteration` → 500 if the Anthropic API returns no tool-use block (content filtering, context overflow, max_tokens, etc.), even though `tool_choice` is enforced.

**Fix:**
```python
tool_use = next((b for b in response.content if b.type == "tool_use"), None)
if tool_use is None:
    raise HTTPException(status_code=502, detail="AI did not return a valid response")
result = tool_use.input
```

---

### 5. ✅ FIXED — `ANTHROPIC_API_KEY` absence crashes at request time, leaking traceback

**File:** `backend/main.py:209, 237`

```python
client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
```

**Problem:** `KeyError` at request time — FastAPI returns a 500 with a Python traceback in debug mode, leaking internal details.

**Fix:** Validate at startup in a `lifespan` handler:
```python
@asynccontextmanager
async def lifespan(app: FastAPI):
    if not os.environ.get("ANTHROPIC_API_KEY"):
        raise RuntimeError("ANTHROPIC_API_KEY environment variable is required")
    init_db()
    yield
```

---

## High (significant issues — broken behaviour, unhandled failure modes)

---

### 6. ✅ FIXED — Card IDs generated from `Date.now()` collide across tabs and page reloads

**File:** `frontend/hooks/useKanban.ts:6, 54`

```typescript
let nextId = Date.now();
...
const newCard: Card = { ...card, id: `card-${++nextId}` };
```

**Problem (cross-tab):** Both tabs start with `nextId = Date.now()` at roughly the same timestamp. Cards created within the same millisecond get the same ID. When either tab's `putBoard` fires, one card silently overwrites the other in the flat `cards` dict.

**Problem (cross-reload):** After a reload, `nextId` resets. If stored card IDs like `card-1749000000001` exist on the server and the user adds a card within the same second, the new ID collides, silently overwriting the existing card.

**Fix:** Use `crypto.randomUUID()`:
```typescript
const newCard: Card = { ...card, id: `card-${crypto.randomUUID()}` };
```

---

### 7. ✅ FIXED — Optimistic update is not rolled back on save failure

**File:** `frontend/hooks/useKanban.ts:36–44`

```typescript
setColumns(next);  // optimistic
try {
  const saved = await putBoard(token, next);
  setColumns(saved);
} catch (err) {
  setError(...);
  // columns state diverged from server — no rollback
}
```

**Problem:** On `putBoard` failure the UI shows the changed board but the server has the old state. The next save will send a diverged board, potentially overwriting valid server data.

**Fix:**
```typescript
const save = useCallback(async (next: Column[]) => {
  const prev = columnsRef.current;
  setColumns(next);
  try {
    const saved = await putBoard(token, next);
    setColumns(saved);
  } catch (err) {
    setColumns(prev);   // roll back to last known good state
    setError(err instanceof Error ? err.message : 'Save failed');
  }
}, [token]);
```

---

### 8. ✅ FIXED — `Board.tsx` receives `onLogout` prop but never uses it — 401s trap the user

**File:** `frontend/components/Board.tsx:8–12`

```typescript
type BoardProps = { token: string; onLogout: () => void; };
export default function Board({ token }: BoardProps) { // onLogout destructured out
```

**Problem:** `onLogout` is declared but never destructured or called. When a token expires mid-session the API returns 401, `useKanban` sets `error`, and the board shows an error message. The user has no way to navigate back to the login page — they are stuck.

**Fix:** Destructure `onLogout`, detect 401 errors in `useKanban` (or `Board`), and call `onLogout()`.

---

### 9. ✅ FIXED — `test_auth.py` uses a module-level `TestClient` that hits the real database

**File:** `backend/tests/test_auth.py:4–5`

```python
from main import app
client = TestClient(app)
```

**Problem:** Does not override `get_db`. The lifespan runs `init_db` against the real `DB_PATH` (`/app/data/kanban.db`). In CI where `/app/data/` does not exist these tests fail. In a dev environment they write to the real database.

**Fix:** Use the `client` fixture from `conftest.py`:
```python
def test_login_correct_credentials_returns_token(client):
    response = client.post("/api/auth/login", ...)
```

---

### 10. ✅ FIXED — `conftest.py` override does not commit — tests do not exercise the production commit path

**File:** `backend/tests/conftest.py`

```python
def override_get_db():
    yield conn    # no commit, no rollback
```

**Problem:** Production `get_db` commits on success and rolls back on exception. The test override does neither. Tests pass because the same in-memory connection sees uncommitted writes, but the actual commit/rollback logic is never exercised by any test.

**Fix:**
```python
def override_get_db():
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
```

---

### 11. ✅ FIXED — `error` state is set but never cleared — a transient error permanently hides the board

**File:** `frontend/hooks/useKanban.ts:41–43` and `frontend/components/Board.tsx`

**Problem:** `setError(null)` is never called on a successful save. `Board.tsx` renders the error *instead of* the board (early return), so after any transient network failure the board disappears for the rest of the session even if connectivity is restored.

**Fix:** Clear error at the start of `save`:
```typescript
const save = useCallback(async (next: Column[]) => {
  setError(null);
  ...
```
Also consider rendering the error as an overlay/banner rather than replacing the board entirely.

---

## Medium (meaningful gaps — missing validation, edge cases, test coverage)

---

### 12. ✅ FIXED — No rate limiting or request size limit on AI endpoints

**File:** `backend/main.py:218, 207`

**Problem:** `/api/ai/chat` and `/api/ai/test` make real Anthropic API calls with no throttling. The `history` list and `message` string are unbounded — any authenticated user can drive up API costs arbitrarily.

**Fix:** Add size checks:
```python
MAX_HISTORY = 20
MAX_MESSAGE_LEN = 2000
if len(body.history) > MAX_HISTORY or len(body.message) > MAX_MESSAGE_LEN:
    raise HTTPException(status_code=400, detail="Request too large")
```

---

### 13. ✅ FIXED — `ChatMessage.role` is unconstrained — arbitrary roles are forwarded to the Anthropic API

**File:** `backend/main.py:197–199`

```python
class ChatMessage(BaseModel):
    role: str   # no validation
    content: str
```

**Problem:** An invalid role (e.g. `"system"`) raises an unhandled Anthropic SDK exception → 500.

**Fix:**
```python
from typing import Literal
class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str
```

---

### 14. ✅ FIXED — `hoverIndex` ref initialised once — stale after cards are added/removed

**File:** `frontend/components/Column.tsx:21`

```typescript
const hoverIndex = useRef(column.cards.length);
```

**Problem:** `useRef` initialises once on mount. When cards are added or removed externally (e.g. AI board update), `hoverIndex.current` holds a stale length. If the user starts dragging before hovering over the column, the card is inserted at a wrong index.

**Fix:**
```typescript
useEffect(() => {
  hoverIndex.current = column.cards.length;
}, [column.cards.length]);
```

---

### 15. ✅ FIXED — `editName` state not synced when `column.name` changes externally

**File:** `frontend/components/Column.tsx:18`

```typescript
const [editName, setEditName] = useState(column.name);
```

**Problem:** `useState` initialises once. After an AI update changes the column title, `editName` still holds the old value. The next time the user clicks to rename, the input pre-fills the stale name.

**Fix:**
```typescript
useEffect(() => {
  if (!isRenaming) setEditName(column.name);
}, [column.name, isRenaming]);
```

---

### 16. ✅ FIXED — No test for `PUT /api/board` with a card referenced but missing from `cards` dict

**File:** `backend/tests/test_board.py` (gap)

**Problem:** The silent card-drop bug (finding 3) is not tested. Once the validation fix is applied, this case should return 422. Currently it returns 200 and silently deletes the card.

**Fix — add to `test_board.py`:**
```python
def test_put_board_missing_card_in_dict_returns_422(client, auth_headers):
    payload = {
        "columns": [{"id": "c1", "title": "T", "cardIds": ["card-missing"]}],
        "cards": {},
    }
    response = client.put("/api/board", json=payload, headers=auth_headers)
    assert response.status_code == 422
```

---

### 17. ✅ FIXED — `useKanban` hook has no unit tests — the most complex frontend logic is untested at unit level

**File:** `frontend/__tests__/` (gap)

**Problem:** `useKanban.ts` contains all board state management: optimistic updates, load, card moves, rename, add, delete, rollback. `components.test.tsx` mocks the hook entirely, so bugs in it are only caught by E2E tests.

**Fix:** Add `__tests__/useKanban.test.ts` using `renderHook` from `@testing-library/react` with a mocked `fetch`. Minimum coverage: initial load, `addCard` calls `putBoard`, `moveCard` updates column membership, save failure sets `error` and rolls back columns.

---

### 18. ✅ FIXED — Playwright drag-and-drop test may not trigger native HTML5 DnD events reliably

**File:** `frontend/tests/kanban.spec.ts:160–163`

```typescript
await page.dragAndDrop(source, target);
```

**Problem:** `page.dragAndDrop` synthesizes mouse events. Native HTML5 DnD (`dragstart`/`dragover`/`drop` on `dataTransfer`) is not reliably triggered by mouse simulation in Chromium. The test may pass vacuously (drag silently does nothing, counts coincidentally match) or fail intermittently.

**Fix:** Synthesize the drag events explicitly:
```typescript
await source.dispatchEvent('dragstart');
await target.dispatchEvent('dragover');
await target.dispatchEvent('drop');
await source.dispatchEvent('dragend');
```
Or verify the card's visual position (which column it appears in) rather than just the count delta.

---

## Low (minor improvements worth doing)

---

### 19. ✅ FIXED — No CORS middleware — cross-origin requests fail in split-deploy or local dev scenarios

**File:** `backend/main.py` (absence)

**Problem:** In the current Docker setup the frontend is served from the same origin, so this is not a runtime bug today. But running `npm run dev` (port 3000) against a local backend (port 8000) fails immediately — all API calls are rejected.

**Fix:**
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

### 20. ✅ FIXED — `_fetch_board` uses O(columns × cards) nested scan

**File:** `backend/main.py:77–79`

```python
for col in columns_rows:
    card_ids = [str(c["id"]) for c in cards_rows if c["column_id"] == col["id"]]
```

**Fix:** Build a dict once:
```python
from collections import defaultdict
col_cards: dict[int, list] = defaultdict(list)
for c in cards_rows:
    col_cards[c["column_id"]].append(str(c["id"]))
for col in columns_rows:
    columns.append({"id": str(col["id"]), "title": col["title"], "cardIds": col_cards[col["id"]]})
```

---

### 21. ✅ FIXED — `dragState` singleton is not reset on cancelled drags (drop outside board)

**File:** `frontend/lib/dragState.ts`

**Problem:** If a drag ends without hitting a `onDrop` handler (user drops outside the board area), `drag.active` may remain `true` until the next drag starts. `onDragEnd` on `KanbanCard` does reset it, but if `onDragEnd` fires before the column's `onDrop`, the reset happens correctly. If `onDragEnd` does not fire (browser-level cancel), the singleton stays dirty. Low severity in current single-board setup but a latent bug.

**Fix:** Reset in a `document`-level `dragend` listener added once on mount in `Board.tsx`:
```typescript
useEffect(() => {
  const reset = () => { drag.active = false; };
  document.addEventListener('dragend', reset);
  return () => document.removeEventListener('dragend', reset);
}, []);
```
