import sqlite3 

connection = sqlite3.connect('customer.db')
c = connection.cursor() 

def LINE():
    print('--------------------')

LINE()#_________________________________________________________________

# 11. Order Results By:

# Ordering by last_name

c.execute("SELECT rowid, * FROM customers ORDER BY last_name")  
customer_db = c.fetchall() 

for x in customer_db:
    print(x)


LINE()#_________________________________________________________________

# Ordering by rowid in descending order:

c.execute("SELECT rowid, * FROM customers ORDER BY rowid DESC")
customer_db = c.fetchall()

for x in customer_db:
    print(x)

# Note:    ASC is for ascending    and    DESC is for descending


LINE()#_________________________________________________________________

# 12. And  Or:

c.execute(
    """
    SELECT rowid, * FROM customers 
    WHERE last_name = 'Farrugia' AND first_name LIKE 'Chri%'
    """)

customer_db = c.fetchall()

for x in customer_db:
    print(x)


LINE()#_________________________________________________________________


c.execute(
    """
    SELECT rowid, * FROM customers 
    WHERE last_name = 'Farrugia' OR first_name LIKE 'Chri%'
    """)

customer_db = c.fetchall()

for x in customer_db:
    print(x)

LINE()#_________________________________________________________________


# 13. Limiting Results:

c.execute(
    """
    SELECT rowid, * FROM customers 
    ORDER BY rowid
    LIMIT 5
    """)

customer_db = c.fetchall()
for x in customer_db:
    print(x)

LINE()#_________________________________________________________________

# 14. Drop Table (deleting table from DataBase):

c.execute('DROP TABLE customers')

try:
    c.execute("SELECT rowid, * FROM customers ") 

    customer_db = c.fetchall()
    for x in customer_db:
        print(x)

except sqlite3.OperationalError:
    print('no such table in database')

LINE()#_________________________________________________________________


connection.commit()
connection.close()