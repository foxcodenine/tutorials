CREATE TABLE users(
    id integer PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    expert BOOLEAN NOT NULL,
    admin BOOLEAN NOT NULL
);

CREATE TABLE question (
    id integer PRIMARY KEY AUTOINCREMENT,
    question_text TEXT NOT NULL,
    answer_text TEXT,
    asked_by_id INTEGER NOT NULL,
    expert_id INTEGER NOT NULL
);