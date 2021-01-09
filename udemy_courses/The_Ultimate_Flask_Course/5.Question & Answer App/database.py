from flask import g 
import sqlite3 

def connect_db():
    sql = sqlite3.connect('question.db') 
    sql.row_factory = sqlite3.Row 
    return sql 


def get_db(): 
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db() 
    return g.sqlite_db 


if __name__ == '__main__':
    connection = sqlite3.connect('question.db') 

    c = connection.cursor()

    c.execute("""    
    CREATE TABLE users(
        id integer PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        expert BOOLEAN NOT NULL,
        admin BOOLEAN NOT NULL);
    """)

    c.execute("""
        CREATE TABLE question (
        id integer PRIMARY KEY AUTOINCREMENT,
        question_text TEXT NOT NULL,
        answer_text TEXT,
        asked_by_id INTEGER NOT NULL,
        expert_id INTEGER NOT NULL);
    """)

    connection.commit()
    