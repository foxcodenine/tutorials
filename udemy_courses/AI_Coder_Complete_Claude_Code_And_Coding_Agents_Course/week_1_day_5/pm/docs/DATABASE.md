# Database

SQLite, created at startup if it does not exist. One file, no server.

## Tables

### users
Stores login credentials. The MVP has a single hardcoded user (`user` / `password`) seeded on first run.

| Column        | Type    | Notes                        |
|---------------|---------|------------------------------|
| id            | INTEGER | Primary key, autoincrement   |
| username      | TEXT    | Unique                       |
| password_hash | TEXT    | bcrypt hash of the password  |

### boards
One board per user for the MVP, but the schema allows multiple.

| Column  | Type    | Notes                          |
|---------|---------|--------------------------------|
| id      | INTEGER | Primary key, autoincrement     |
| user_id | INTEGER | FK → users(id), cascade delete |
| name    | TEXT    | Display name of the board      |

### columns
Fixed set of five columns per board. `position` determines left-to-right order.

| Column   | Type    | Notes                           |
|----------|---------|---------------------------------|
| id       | INTEGER | Primary key, autoincrement      |
| board_id | INTEGER | FK → boards(id), cascade delete |
| title    | TEXT    | Editable column name            |
| position | INTEGER | 0-based ordering within board   |

### cards
Cards belong to a column. `position` determines top-to-bottom order within that column.

| Column    | Type    | Notes                            |
|-----------|---------|----------------------------------|
| id        | INTEGER | Primary key, autoincrement       |
| column_id | INTEGER | FK → columns(id), cascade delete |
| title     | TEXT    |                                  |
| details   | TEXT    | Defaults to empty string         |
| position  | INTEGER | 0-based ordering within column   |

## Cascade deletes

Deleting a user removes their boards, which removes their columns, which removes their cards. This is enforced at the SQLite level with `ON DELETE CASCADE` (requires `PRAGMA foreign_keys = ON` at connection time).

## API shape vs. database shape

The frontend works with a flat `BoardData` object (`{ columns: Column[], cards: Record<string, Card> }`). The backend reads from the four tables and assembles this shape on `GET /api/board`, and decomposes it back into rows on `PUT /api/board`.

## File location

The database file is created at `/app/data/kanban.db` inside the container. Mount a volume at `/app/data` to persist data across container restarts.
