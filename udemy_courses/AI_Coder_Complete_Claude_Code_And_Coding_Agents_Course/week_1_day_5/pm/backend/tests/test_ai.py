from unittest.mock import MagicMock, patch


def _make_tool_response(reply, board_update=None):
    tool_use = MagicMock()
    tool_use.type = "tool_use"
    tool_use.input = {"reply": reply, "board_update": board_update}
    response = MagicMock()
    response.content = [tool_use]
    return response


# --- /api/ai/test ---

def test_ai_test_route_returns_response(client, auth_headers):
    mock_message = MagicMock()
    mock_message.content[0].text = "4"

    with patch("main.anthropic.Anthropic") as mock_cls:
        mock_cls.return_value.messages.create.return_value = mock_message
        response = client.post("/api/ai/test", headers=auth_headers)

    assert response.status_code == 200
    assert response.json()["response"] == "4"


def test_ai_test_route_requires_auth(client):
    response = client.post("/api/ai/test")
    assert response.status_code == 401


# --- /api/ai/chat ---

def test_ai_chat_with_board_update_persists(client, auth_headers):
    original = client.get("/api/board", headers=auth_headers).json()

    modified = dict(original)
    modified["columns"] = [
        {**col, "title": "AI Column"} if i == 0 else col
        for i, col in enumerate(original["columns"])
    ]

    with patch("main.anthropic.Anthropic") as mock_cls:
        mock_cls.return_value.messages.create.return_value = _make_tool_response(
            "Done", modified
        )
        response = client.post(
            "/api/ai/chat",
            json={"message": "rename first column", "history": []},
            headers=auth_headers,
        )

    assert response.status_code == 200
    data = response.json()
    assert data["reply"] == "Done"
    assert data["board_updated"] is True

    updated = client.get("/api/board", headers=auth_headers).json()
    assert updated["columns"][0]["title"] == "AI Column"


def test_ai_chat_without_board_update(client, auth_headers):
    with patch("main.anthropic.Anthropic") as mock_cls:
        mock_cls.return_value.messages.create.return_value = _make_tool_response(
            "The board has 5 columns", None
        )
        response = client.post(
            "/api/ai/chat",
            json={"message": "how many columns?", "history": []},
            headers=auth_headers,
        )

    assert response.status_code == 200
    data = response.json()
    assert data["reply"] == "The board has 5 columns"
    assert data["board_updated"] is False


def test_ai_chat_requires_auth(client):
    response = client.post("/api/ai/chat", json={"message": "hi", "history": []})
    assert response.status_code == 401


def test_ai_chat_no_tool_use_returns_502(client, auth_headers):
    empty_response = MagicMock()
    empty_response.content = []  # no tool_use block

    with patch("main.anthropic.Anthropic") as mock_cls:
        mock_cls.return_value.messages.create.return_value = empty_response
        response = client.post(
            "/api/ai/chat",
            json={"message": "hi", "history": []},
            headers=auth_headers,
        )

    assert response.status_code == 502


def test_ai_chat_oversized_message_returns_400(client, auth_headers):
    response = client.post(
        "/api/ai/chat",
        json={"message": "x" * 2001, "history": []},
        headers=auth_headers,
    )
    assert response.status_code == 400


def test_ai_chat_oversized_history_returns_400(client, auth_headers):
    history = [{"role": "user", "content": "msg"}] * 21
    response = client.post(
        "/api/ai/chat",
        json={"message": "hi", "history": history},
        headers=auth_headers,
    )
    assert response.status_code == 400


def test_ai_chat_invalid_role_returns_422(client, auth_headers):
    response = client.post(
        "/api/ai/chat",
        json={"message": "hi", "history": [{"role": "system", "content": "x"}]},
        headers=auth_headers,
    )
    assert response.status_code == 422
