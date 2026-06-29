import sqlite3

import pytest
from fastapi.testclient import TestClient

from auth import create_token
from database import get_db, init_db
from main import app


@pytest.fixture
def client():
    conn = sqlite3.connect(":memory:", check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    init_db(conn)

    def override_get_db():
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise

    app.dependency_overrides[get_db] = override_get_db
    yield TestClient(app)
    app.dependency_overrides.clear()
    conn.close()


@pytest.fixture
def auth_headers():
    return {"Authorization": f"Bearer {create_token('user')}"}
