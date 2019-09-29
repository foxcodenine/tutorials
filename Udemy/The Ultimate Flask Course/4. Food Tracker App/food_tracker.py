import sqlite3
from flask import g

#_______________________________________________________________________
# DataBase funtions:

def connect_db():
    sql = sqlite3.connect('food_log.db')
    sql.row_factory = sqlite3.Row 
    return sql


def get_db():
    if not hasattr(g, 'sqlite_db'):
        g.sqlite_db = connect_db()
    return g.sqlite_db 

#_______________________________________________________________________

if __name__ == '__main__':

    connection = sqlite3.connect('food_log.db')
    c = connection.cursor()
    #___________________________________________________________________

    # Here we are creating the table in our database:


    c.execute(
        """
        CREATE TABLE log_date (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            entry_date date NOT NULL
            );
        """)


    c.execute(
        """
        CREATE TABLE food (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            protein INTEGER NOT NULL,
            carbohydrates INTEGER NOT NULL,
            fat INTEGER NOT NULL,
            calories INTEGER NOT NULL
            );
        """
    )
        
    # I have change the id column so same food can the add to the same 
    # day in the view page.   
    c.execute(
        """
        CREATE TABLE food_date(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            food_id INTEGER NOT NULL,
            log_date_id INTEGER NOT NULL
            );
        """
    )

    
    #___________________________________________________________________
    connection.commit()
    connection.close()
