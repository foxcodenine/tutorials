import mysql.connector 

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "ayanami9",
    database = "testdb"
)

# ______________________________________________________________________ 
# Create Cursor Instance:

my_currsor = mydb.cursor()


# ______________________________________________________________________ 
# Create A Database:


# my_currsor.execute("CREATE DATABASE testdb")

# ______________________________________________________________________ 
# Show Databases:

# my_currsor.execute("SHOW DATABASES;")

# for row in my_currsor:
#     print (row[0])

# ______________________________________________________________________ 
# Create Table in database testdb:

# my_currsor.execute(
#     """CREATE TABLE users(
#             name VARCHAR(255), 
#             email VARCHAR(255), 
#             age INTEGER(10), 
#             user_id INTEGER AUTO_INCREMENT PRIMARY KEY);""")

# my_currsor.execute("SHOW TABLES;")

# for table in my_currsor:
#     print(table)



# ______________________________________________________________________ 
# Insert a single record in table:

# sqlStuff = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"

# record1 = ("John", "john@codemy.com", 40)

# my_currsor.execute(sqlStuff, record1)
# mydb.commit()

#_____________________

# my_currsor.execute("""INSERT INTO users(name, email, age)
#                         VALUES
#                             (%s, %s, %s)""", ['Chris', 'foxcode9@gmail.com', 35])
# mydb.commit()


# ______________________________________________________________________
# Insert multiple records in table:

# sqlStuff = "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)"

# records = [
#     ("Tim", "tim@tim.com", 32),
#     ("Mary", "mart@mary.com", 21),
#     ("Steve", "stev@steveemail.com", 57),
#     ("Tina", "tina@somethinggellse.com", 29),
# ]

# my_currsor.executemany(sqlStuff, records) # <-- note .executemany
# mydb.commit()

# ______________________________________________________________________

# Selecting data from Table:

my_currsor.execute("SELECT * FROM users;")

results = my_currsor.fetchall()

for row in results:
    print(row)


print("\n_____________________\n")
#_______________________________________________________________________

# A MySQLCursorDict cursor returns each row as a dictionary:
# Method 1:



dict_cursor = mydb.cursor(dictionary=True) # <--

dict_cursor.execute("SELECT * FROM users;")

results = dict_cursor.fetchall()

for row in results:
    print(row)

#_____________________

# Method 2:

print("\n_____________________\n")

for row in results:
    print("Name: {} \t Age: {} \t Email: {} ". format(
                                 row['name'], row['age'], row['email']))

#_____________________

print("\n_____________________\n")

# Method 3:

for row in results:
    print("Name: {name} \t Age: {age} \t Email: {email} ". format(**row))


print("\n_____________________\n")

# ______________________________________________________________________

# Where Clause:

dict_cursor.execute("SELECT * FROM users WHERE age > 30")
results = dict_cursor.fetchall()

for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")

# ______________________________________________________________________
# Where Like and Wildcards 

my_cursor = mydb.cursor()

my_cursor.execute("SELECT * FROM users WHERE name LIKE 'T%'")
results = my_cursor.fetchall()
for row in results:
    print(row)

print("\n_____________________\n")

my_cursor.execute("SELECT * FROM users WHERE name LIKE '%i%'")
results = my_cursor.fetchall()
for row in results:
    print(row)


print("\n_____________________\n")

# ______________________________________________________________________
# And / Or : 
  

dict_cursor.execute("SELECT name, age FROM users WHERE age > 18 AND age < 25")
results = dict_cursor.fetchall()

for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")

dict_cursor.execute("SELECT name, age FROM users WHERE age < 18 OR age > 25")
results = dict_cursor.fetchall()

for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")


# ______________________________________________________________________
# Update : 

dict_cursor.execute("UPDATE users SET age=17  WHERE name='Dorothy';")
mydb.commit()

dict_cursor.execute("SELECT * FROM users;")
results = dict_cursor.fetchall()
for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")

# ______________________________________________________________________
# Limit results : 

dict_cursor.execute("SELECT * FROM users LIMIT 3;")
results = dict_cursor.fetchall()
for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")


# ______________________________________________________________________
# Order results : 

dict_cursor.execute("SELECT * FROM users ORDER BY age;")
results = dict_cursor.fetchall()
for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")

dict_cursor.execute("SELECT * FROM users ORDER BY age DESC;")
results = dict_cursor.fetchall()
for row in results:
    print(row['age'], row['name'])

print("\n_____________________\n")

# ______________________________________________________________________
# Delete records : 

# dict_cursor.execute("DELETE FROM user WHERE id_user=6")
# mydb.commit() 

# ______________________________________________________________________
# Drop Table and Database: 

# dict_cursor.execute("DROP TABLE IF EXISTS users") # <-- IF EXISTS is optional 
# mydb.commit()

# dict_cursor.execute("DROP DATABASE testdb") # <-- IF EXISTS is optional 
# mydb.commit()