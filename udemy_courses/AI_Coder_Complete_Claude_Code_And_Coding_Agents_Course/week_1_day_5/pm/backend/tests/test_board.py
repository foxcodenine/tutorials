def test_get_board_returns_five_columns(client, auth_headers):
    response = client.get("/api/board", headers=auth_headers)
    assert response.status_code == 200
    data = response.json()
    assert len(data["columns"]) == 5
    assert isinstance(data["cards"], dict)
    # Every card referenced in a column must exist in the cards map
    for col in data["columns"]:
        for card_id in col["cardIds"]:
            assert card_id in data["cards"]


def test_put_board_persists_changes(client, auth_headers):
    original = client.get("/api/board", headers=auth_headers).json()

    # Rename first column and remove all its cards
    modified = dict(original)
    modified["columns"] = [dict(col) for col in original["columns"]]
    modified["columns"][0] = {**modified["columns"][0], "title": "Modified", "cardIds": []}

    put_response = client.put("/api/board", json=modified, headers=auth_headers)
    assert put_response.status_code == 200

    updated = client.get("/api/board", headers=auth_headers).json()
    assert updated["columns"][0]["title"] == "Modified"
    assert updated["columns"][0]["cardIds"] == []


def test_get_board_invalid_token_returns_401(client):
    response = client.get(
        "/api/board", headers={"Authorization": "Bearer not-a-valid-token"}
    )
    assert response.status_code == 401


def test_put_board_missing_card_in_dict_returns_422(client, auth_headers):
    payload = {
        "columns": [{"id": "c1", "title": "T", "cardIds": ["card-missing"]}],
        "cards": {},
    }
    response = client.put("/api/board", json=payload, headers=auth_headers)
    assert response.status_code == 422
    assert "card-missing" in response.json()["detail"]
