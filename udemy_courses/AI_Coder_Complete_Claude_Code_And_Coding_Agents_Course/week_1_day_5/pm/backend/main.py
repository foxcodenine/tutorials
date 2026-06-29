import json
import os
import sqlite3
from collections import defaultdict
from contextlib import asynccontextmanager
from typing import Literal

import anthropic
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from auth import create_token, get_current_user
from database import connect, get_db, init_db


_DEV_JWT_SECRET = "kanban-dev-secret-change-in-production"
_LOGIN_USERNAME = os.environ.get("LOGIN_USERNAME", "user")
_LOGIN_PASSWORD = os.environ.get("LOGIN_PASSWORD", "password")


@asynccontextmanager
async def lifespan(app: FastAPI):
    if not os.environ.get("ANTHROPIC_API_KEY"):
        raise RuntimeError("ANTHROPIC_API_KEY environment variable is required")
    if os.environ.get("JWT_SECRET", _DEV_JWT_SECRET) == _DEV_JWT_SECRET:
        import warnings
        warnings.warn("JWT_SECRET is not set — using insecure dev default", stacklevel=1)
    conn = connect()
    init_db(conn)
    conn.close()
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("CORS_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Auth ---

class LoginRequest(BaseModel):
    username: str
    password: str


@app.post("/api/auth/login")
def login(body: LoginRequest):
    if body.username == _LOGIN_USERNAME and body.password == _LOGIN_PASSWORD:
        return {"token": create_token(body.username)}
    raise HTTPException(status_code=401, detail="Invalid credentials")


# --- Board ---

class CardData(BaseModel):
    id: str
    title: str
    details: str


class ColumnData(BaseModel):
    id: str
    title: str
    cardIds: list[str]


class BoardData(BaseModel):
    columns: list[ColumnData]
    cards: dict[str, CardData]


def _fetch_board(board_id: int, db: sqlite3.Connection) -> dict:
    columns_rows = db.execute(
        "SELECT id, title FROM columns WHERE board_id = ? ORDER BY position",
        (board_id,),
    ).fetchall()

    cards_rows = db.execute(
        """
        SELECT c.id, c.column_id, c.title, c.details
        FROM cards c
        JOIN columns col ON c.column_id = col.id
        WHERE col.board_id = ?
        ORDER BY c.position
        """,
        (board_id,),
    ).fetchall()

    col_cards: dict[int, list] = defaultdict(list)
    for c in cards_rows:
        col_cards[c["column_id"]].append(str(c["id"]))

    columns = []
    for col in columns_rows:
        columns.append({"id": str(col["id"]), "title": col["title"], "cardIds": col_cards[col["id"]]})

    cards = {
        str(c["id"]): {"id": str(c["id"]), "title": c["title"], "details": c["details"]}
        for c in cards_rows
    }

    return {"columns": columns, "cards": cards}


def _get_board_id(username: str, db: sqlite3.Connection) -> int:
    user = db.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    board = db.execute(
        "SELECT id FROM boards WHERE user_id = ?", (user["id"],)
    ).fetchone()
    if not board:
        raise HTTPException(status_code=404, detail="Board not found")
    return board["id"]


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.get("/api/board")
def get_board(
    username: str = Depends(get_current_user),
    db: sqlite3.Connection = Depends(get_db),
):
    return _fetch_board(_get_board_id(username, db), db)


def _replace_board(board_id: int, body: BoardData, db: sqlite3.Connection) -> None:
    all_referenced = {cid for col in body.columns for cid in col.cardIds}
    missing = all_referenced - set(body.cards.keys())
    if missing:
        raise HTTPException(status_code=422, detail=f"Cards referenced in cardIds but missing from cards: {sorted(missing)}")

    db.execute("DELETE FROM columns WHERE board_id = ?", (board_id,))
    for pos, col in enumerate(body.columns):
        result = db.execute(
            "INSERT INTO columns (board_id, title, position) VALUES (?, ?, ?)",
            (board_id, col.title, pos),
        )
        col_id = result.lastrowid
        for card_pos, card_id_str in enumerate(col.cardIds):
            card = body.cards.get(card_id_str)
            if card:
                db.execute(
                    "INSERT INTO cards (column_id, title, details, position) VALUES (?, ?, ?, ?)",
                    (col_id, card.title, card.details, card_pos),
                )


@app.put("/api/board")
def put_board(
    body: BoardData,
    username: str = Depends(get_current_user),
    db: sqlite3.Connection = Depends(get_db),
):
    board_id = _get_board_id(username, db)
    _replace_board(board_id, body, db)
    return _fetch_board(board_id, db)


# --- AI ---

_RESPOND_TOOL = {
    "name": "respond",
    "description": (
        "Respond to the user's message, optionally updating the board. "
        "Set board_update to the complete updated board state if changes are needed, "
        "or null if no changes are needed. When updating, include ALL columns and ALL cards."
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "reply": {"type": "string"},
            "board_update": {
                "anyOf": [
                    {"type": "null"},
                    {
                        "type": "object",
                        "properties": {
                            "columns": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {"type": "string"},
                                        "title": {"type": "string"},
                                        "cardIds": {"type": "array", "items": {"type": "string"}},
                                    },
                                    "required": ["id", "title", "cardIds"],
                                },
                            },
                            "cards": {
                                "type": "object",
                                "additionalProperties": {
                                    "type": "object",
                                    "properties": {
                                        "id": {"type": "string"},
                                        "title": {"type": "string"},
                                        "details": {"type": "string"},
                                    },
                                    "required": ["id", "title", "details"],
                                },
                            },
                        },
                        "required": ["columns", "cards"],
                    },
                ],
                "description": "Complete updated board state, or null if no board changes are needed",
            },
        },
        "required": ["reply", "board_update"],
    },
}


_MAX_HISTORY = 20
_MAX_MESSAGE_LEN = 2000


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []


@app.post("/api/ai/test")
def ai_test(username: str = Depends(get_current_user)):
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=256,
        messages=[{"role": "user", "content": "What is 2+2?"}],
    )
    return {"response": message.content[0].text}


@app.post("/api/ai/chat")
def ai_chat(
    body: ChatRequest,
    username: str = Depends(get_current_user),
    db: sqlite3.Connection = Depends(get_db),
):
    if len(body.history) > _MAX_HISTORY or len(body.message) > _MAX_MESSAGE_LEN:
        raise HTTPException(status_code=400, detail="Request too large")

    board_id = _get_board_id(username, db)
    board = _fetch_board(board_id, db)

    system_prompt = (
        "You are a helpful assistant for a Kanban project management app. "
        "You can answer questions and make changes to the user's board.\n\n"
        "Current board state (JSON):\n"
        f"{json.dumps(board)}"
    )

    messages = [{"role": m.role, "content": m.content} for m in body.history]
    messages.append({"role": "user", "content": body.message})

    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=system_prompt,
        messages=messages,
        tools=[_RESPOND_TOOL],
        tool_choice={"type": "tool", "name": "respond"},
    )

    tool_use = next((b for b in response.content if b.type == "tool_use"), None)
    if tool_use is None:
        raise HTTPException(status_code=502, detail="AI did not return a valid structured response")
    result = tool_use.input

    reply = result["reply"]
    board_update = result.get("board_update")

    board_updated = False
    if board_update:
        _replace_board(board_id, BoardData(**board_update), db)
        board_updated = True

    return {"reply": reply, "board_updated": board_updated}


app.mount("/", StaticFiles(directory="static", html=True), name="static")
