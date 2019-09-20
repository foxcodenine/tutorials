import sqlite3
from pprint import pprint

def LINE():
    print('--------------------')

LINE()#_________________________________________________________________


connection = sqlite3.connect('customer.db')

c = connection.cursor() 

# 5. Query and Fetch

# quering (selecting all from db):
c.execute("SELECT * FROM  customers")


# fetch one, many and all:
pprint(c.fetchone())
print('\n')

pprint(c.fetchmany(2))
print('\n')

pprint(c.fetchall())
print('\n')

LINE()#_________________________________________________________________


# 6. Retrieve the database and converted to a pandas DataFrame:


import pandas


def db2dataframe(db_list):
    row_index = 0
    db_dict = {} 
    for _tuple in db_list:
        row_index += 1 
        db_dict.update({row_index : _tuple})
    return db_dict



c.execute("SELECT * FROM   customers")
all_db = c.fetchall()



db_dataframe = pandas.DataFrame(all_db)
print(db_dataframe)



LINE()#_________________________________________________________________

# 7. Primary Key ID

c.execute("SELECT rowid, * FROM customers")
all_customers = c.fetchall() 

for x in all_customers:
    print(x)

LINE()#_________________________________________________________________


# 8. WHERE Clause

c.execute(
    """
    SELECT *
    FROM customers
    WHERE last_name = 'Cassar'
    """
)

all_customers = c.fetchall() 

for x in all_customers:
    print(x)

# You can also use <, >, <=, >= LIKE etc..

LINE()#_________________________________________________________________


# LIKE Clause

c.execute(
    """
    SELECT *
    FROM customers
    WHERE email LIKE '%nge.org'
    """
)

all_customers = c.fetchall() 

for x in all_customers:
    print(x)



# Commit our command 
connection.commit()

# Close connection
connection.close()


LINE()#_________________________________________________________________
