def test_login_correct_credentials_returns_token(client):
    response = client.post(
        "/api/auth/login", json={"username": "user", "password": "password"}
    )
    assert response.status_code == 200
    data = response.json()
    assert "token" in data
    assert isinstance(data["token"], str) and len(data["token"]) > 0


def test_login_wrong_credentials_returns_401(client):
    response = client.post(
        "/api/auth/login", json={"username": "user", "password": "wrong"}
    )
    assert response.status_code == 401
