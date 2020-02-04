from sqlalchemy import create_engine, Table, Column, String, Integer, MetaData
from sqlalchemy import DateTime, ForeignKey, Numeric, CheckConstraint
from sqlalchemy import insert
from sqlalchemy.sql import func, text
from datetime import datetime

def pl():
    print('\n_______________________\n')


engine = create_engine('mysql+pymysql://root:ayanami9@localhost/e_commerce')
metadata = MetaData(engine)

customers = Table('customers', metadata,
    Column('id', Integer(), primary_key=True), 
    Column('first_name', String(100), nullable=False),   
    Column('last_name', String(100), nullable=False),   
    Column('username', String(50), nullable=False),   
    Column('email', String(200), nullable=False), 
    Column('address', String(255), nullable=False),   
    Column('town', String(50), nullable=False),   
    Column('created_on', DateTime(), server_default=func.now()),   
    Column('update_on', DateTime(), server_default=text('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
)

items = Table('items', metadata, 
    Column('id', Integer(), primary_key=True),
    Column('name', String(50), nullable=False),
    Column('cost_price', Numeric(10, 2), nullable=False),
    Column('selling_price', Numeric(10, 2), nullable=False),
    Column('quantity',Integer(), nullable=False, default=0),
    CheckConstraint('cost_price >= 0'),
    CheckConstraint('selling_price >= 0'),
    CheckConstraint('quantity >= 0')     
)


orders = Table('orders', metadata, 
    Column('id', Integer(), primary_key=True), 
    Column('customer_id', Integer(), ForeignKey('customers.id')), 
    Column('date_placed', DateTime(), server_default = func.now()),
    Column('date_shipped', DateTime())   
)


order_lines = Table('order_lines', metadata, 
    Column('id', Integer(), primary_key=True), 
    Column('order_id', Integer(), ForeignKey('orders.id')),
    Column('item_id', Integer(), ForeignKey('items.id')),
    Column('quantity', Integer(), nullable=False),
    CheckConstraint('quantity > 0')
)

# ______________________________________________________________________

# Inserting Records

# 1st method:
if __name__ == '__main__':

    conn = engine.connect()

    ins = customers.insert().values(
        first_name = 'John',
        last_name = 'Green',
        username = 'johngreen',
        email = 'johngreen@mail.com',
        address = '164 Hidden Valley Road',
        town = 'Norfolk'
    )


    r = conn.execute(ins)



# ______________________

    pl()
    # To view the SQL this code would generate type the following:
    print(str(ins))
    pl()
    # To  view the values:
    print(ins.compile().params)
    pl()
# ______________________

# 2nd method: Another way to create insert statement is to use the standalone
# insert() function from the sqlalchemy package:

    conn = engine.connect() 

    ins = insert(customers).values(
        first_name = 'Katherine',
        last_name = 'Wilson',
        username = 'katwilson',
        email = 'katwilson@gmail.com',
        address = '4685 West Side Avenue',
        town = 'Peterbrugh'
    )

    '''
    r = conn.execute(ins)
    print(r.inserted_primary_key)
    pl()
    '''
# ______________________

# 3rd method: Instead of passing values to the values() method as keyword
# arguments, we can also pass them to the execute() method.


    r = conn.execute(insert(customers), first_name = "Tim",
                                        last_name = "Snyder",
                                        username = "timsnyder",
                                        email = "timsnyder@mail.com",
                                        address = "1611 Sundown Lane",
                                        town = "Langdale")

    # ______________________
    print(r.inserted_primary_key)
    print(type(r.inserted_primary_key))
    pl()
# ______________________

# The execute() method is quite flexible because it allows us to insert multiple
# rows by passing a list of dictionaries each representing a row to be inserted.
    '''
    r = conn.execute(insert(customers),[
        {
            "first_name": "John",
            "last_name": "Lara", 
            "username": "johnlara",
            "email": "johnlara@mail.com",
            "address": "3073 Derek Drive", 
            "town": "Norfolk"
        },
        {
            "first_name": "Sarah", 
                "last_name": "Tomlin", 
                "username": "sarahtomlin", 
                "email":"sarahtomlin@mail.com",
                "address": "3572 Poplar Avenue",
                "town": "Norfolk"
        },
        {
            "first_name": "Pablo", 
                "last_name": "Gibson", 
                "username": "pablogibson", 
                "email":"pablogibson@mail.com",
                "address": "3494 Murry Street",
                "town": "Peterbrugh"
        },
        {
            "first_name": "Pablo", 
                "last_name": "Lewis", 
                "username": "pablolewis", 
                "email":"pablolewis@mail.com",
                "address": "3282 Jerry Toth Drive",
                "town": "Peterbrugh"
        },
    ])

    '''
    print(r.rowcount)
    pl()
# ______________________________________________________________________



    # metadata.drop_all(engine)
    metadata.create_all(engine)



