import mysql.connector

world_db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "a9",
    database = "world"
)

dict_cursor = world_db.cursor(dictionary=True)


dict_cursor.execute("""
    SELECT Code, Name, Continent, Population 
                            FROM country LIMIT 20;
    """)

results = dict_cursor.fetchall()

for row in results:
    print(row)