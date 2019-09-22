import sqlite3

connection = sqlite3.connect('data.db') 

c = connection.cursor() 

# c.execute(
#     """
#     CREATE TABLE users(
#         id INTEGER PRIMARY KEY AUTOINCREMENT,
#         name TEXT,
#         location TEXT
#     )
#     """) 

# c.execute(
#     """
#     INSERT INTO users (name, location)
#     VALUES ('Anthony', 'Texas')
#     """
# )



# c.execute(
#     'DELETE FROM users WHERE rowid = 1'
# )

# c.execute(
#     'DROP TABLE users'
# )




c.execute(
    'SELECT * FROM users;'
)



connection.commit()