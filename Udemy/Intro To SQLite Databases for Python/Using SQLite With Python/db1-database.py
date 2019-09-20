import sqlite3

# 1. Create SQLite Connection

# Setting a connection 'connect' with database 'customer.db' 
# If the db doesn't exist it will be created
conn = sqlite3.connect('customer.db')

# To create a temporary db
# conn = squlite3.connect(':memory:')

# Create a cursor:
c = conn.cursor() 

def LINE():
    print('--------------------')

LINE()#_________________________________________________________________


# 2. Create A Database Table

c.execute(
    """--sql
    CREATE TABLE customers(
        first_name text,
        last_name text,
        email text
    )
    --endsql"""
)

# Datatypes in SQLite:
# NULL
# INTEDER  
# REAL 
# TEXT 
# BLOB 

LINE()#_________________________________________________________________



# 3. Insert One Record Into The Table

c.execute("""--sql 
INSERT INTO customers VALUES ('John', 'Elder', 'john@codemy.com')
 --endsql""")

c.execute("""--sql 
INSERT INTO customers VALUES ('Chris', 'Farrugia', 'foxcode9@gmail.com')
 --endsql""")

c.execute("""--sql 
INSERT INTO customers VALUES ('Robert', 'Camilleri', 'rc@stjohn.com')
 --endsql""")

c.execute("""--sql 
INSERT INTO customers VALUES ('Dorothy', 'Cassar', 'dc@stjohn.com')
 --endsql""")

LINE()#_________________________________________________________________



# 4. Insert Many Records Into The Table:

many_customers = [
                    ('James', 'Magri', 'jmagri66@yahoo.com'),
                    ('Rei', 'Ayanami', 'reiayanami@ngv.org'),
                    ('Elizabete', 'Leonardi', 'lizleo@yahoo.co.uk'),
                    ('Maria', 'Cassar','maiacassar@stjohn.com'),
                    ('Asuka', 'Langley', 'asukalangley@nge.org'),
                    ('Shinji', 'Ikari', 'shinjiikari@nge.org'),
                    ('christin', 'Vassallo', 'vassallo@yahoo.com'),
                    ('Maria', 'Farrugia', 'mfarrugia@yahoo.com')
                 ]

c.executemany("INSERT INTO customers VALUES (?,?,?)", many_customers)

# each ? stands as a placeholder

LINE()#_________________________________________________________________




# Commit our command 
conn.commit()

# Close connection
conn.close()

print('Commands exectuded successfully')