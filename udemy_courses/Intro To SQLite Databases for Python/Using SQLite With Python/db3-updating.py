import sqlite3

connection = sqlite3.connect('customer.db') 
c = connection.cursor()

def LINE():
    print('--------------------')

LINE()#_________________________________________________________________


# Print database 

c.execute("SELECT rowid, * FROM customers")

customer_db = c.fetchall() 

for x in customer_db:
    print(x)

LINE()#_________________________________________________________________

# 9. Update Records

c.execute(
    """
    UPDATE customers   SET first_name = 'Roderick'
    WHERE last_name = 'Cassar'
    """
)

# reprint
c.execute('SELECT rowid, * FROM customers')
customer_db = c.fetchall() 

for x in customer_db:
    print(x)


# Here we have update a record first_name by selecting with last_name 
# However if here will be multiple records with the same name 
# they all will be changed 

LINE()#_________________________________________________________________

# Updating with rowid:

c.execute(
    """
    UPDATE customers SET first_name = 'Dorothy'
    WHERE rowid = 4

    """
)

# reprint
c.execute('SELECT rowid, * FROM customers')
customer_db = c.fetchall() 

for x in customer_db:
    print(x)


LINE()#_________________________________________________________________

# 10. Delete Records


c.execute("DELETE FROM customers WHERE rowid = 8")

# Here we have delete 'Roderick' row 8  from our database


c.execute("SELECT rowid, * FROM customers")
customer_db = c.fetchall()

for x in customer_db:
    print(x)
    
LINE()#_________________________________________________________________


connection.commit()
connection.close()