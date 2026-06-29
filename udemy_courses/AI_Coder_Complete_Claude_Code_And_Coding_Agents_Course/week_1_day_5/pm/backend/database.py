import os
import sqlite3
from pathlib import Path

DB_PATH = os.environ.get("DB_PATH", "/app/data/kanban.db")


def connect(path: str | None = None) -> sqlite3.Connection:
    p = path or DB_PATH
    if p != ":memory:":
        Path(p).parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(p)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def get_db():
    conn = connect()
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()


def init_db(conn: sqlite3.Connection) -> None:
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id            INTEGER PRIMARY KEY AUTOINCREMENT,
            username      TEXT    NOT NULL UNIQUE,
            password_hash TEXT    NOT NULL
        );
        CREATE TABLE IF NOT EXISTS boards (
            id      INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            name    TEXT    NOT NULL
        );
        CREATE TABLE IF NOT EXISTS columns (
            id       INTEGER PRIMARY KEY AUTOINCREMENT,
            board_id INTEGER NOT NULL REFERENCES boards(id) ON DELETE CASCADE,
            title    TEXT    NOT NULL,
            position INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS cards (
            id        INTEGER PRIMARY KEY AUTOINCREMENT,
            column_id INTEGER NOT NULL REFERENCES columns(id) ON DELETE CASCADE,
            title     TEXT    NOT NULL,
            details   TEXT    NOT NULL DEFAULT '',
            position  INTEGER NOT NULL
        );
    """)
    _seed_if_empty(conn)


def _seed_if_empty(conn: sqlite3.Connection) -> None:
    if conn.execute("SELECT 1 FROM users LIMIT 1").fetchone():
        return

    cur = conn.cursor()
    # password_hash is a placeholder; auth uses hardcoded credentials for the MVP
    cur.execute(
        "INSERT INTO users (username, password_hash) VALUES (?, ?)",
        ("user", "mvp-placeholder"),
    )
    user_id = cur.lastrowid

    cur.execute(
        "INSERT INTO boards (user_id, name) VALUES (?, ?)",
        (user_id, "My Board"),
    )
    board_id = cur.lastrowid

    seed_columns = [
        ("Backlog", 0, [
            ("Align roadmap themes", "Draft quarterly themes with impact statements and metrics."),
            ("Gather customer signals", "Review support tags, sales notes, and churn feedback."),
        ]),
        ("Discovery", 1, [
            ("Prototype analytics view", "Sketch initial dashboard layout and key drill-downs."),
        ]),
        ("In Progress", 2, [
            ("Refine status language", "Standardize column labels and tone across the board."),
            ("Design card layout", "Add hierarchy and spacing for scanning dense lists."),
        ]),
        ("Review", 3, [
            ("QA micro-interactions", "Verify hover, focus, and loading states."),
        ]),
        ("Done", 4, [
            ("Ship marketing page", "Final copy approved and asset pack delivered."),
            ("Close onboarding sprint", "Document release notes and share internally."),
        ]),
    ]

    for col_title, col_pos, cards in seed_columns:
        cur.execute(
            "INSERT INTO columns (board_id, title, position) VALUES (?, ?, ?)",
            (board_id, col_title, col_pos),
        )
        col_id = cur.lastrowid
        for card_pos, (card_title, card_details) in enumerate(cards):
            cur.execute(
                "INSERT INTO cards (column_id, title, details, position) VALUES (?, ?, ?, ?)",
                (col_id, card_title, card_details, card_pos),
            )

    conn.commit()
