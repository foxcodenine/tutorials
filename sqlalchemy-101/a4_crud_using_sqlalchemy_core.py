from sqlalchemy import create_engine, Table, Column, String, Integer, MetaData
from sqlalchemy import DateTime, ForeignKey, Numeric, CheckConstraint
from sqlalchemy import insert

from sqlalchemy.sql import func, text

from datetime import datetime

from a3_e_commerce_app import engine, metadata, customers, items, orders,\
     order_lines, pl

from sqlalchemy import select
from pprint import pprint
import os



# ______________________________________________________________________

conn = engine.connect()

items_list = [
    {
        "name":"Chair",
        "cost_price": 9.21,
        "selling_price": 10.81,
        "quantity": 5
    },
    {
        "name":"Pen",
        "cost_price": 3.45,
        "selling_price": 4.51,
        "quantity": 3
    },
    {
        "name":"Headphone",
        "cost_price": 15.52,
        "selling_price": 16.81,
        "quantity": 50
    },
    {
        "name":"Travel Bag",
        "cost_price": 20.1,
        "selling_price": 24.21,
        "quantity": 50
    },
    {
        "name":"Keyboard",
        "cost_price": 20.12,
        "selling_price": 22.11,
        "quantity": 50
    },
    {
        "name":"Monitor",
        "cost_price": 200.14,
        "selling_price": 212.89,
        "quantity": 50
    },
    {
        "name":"Watch",
        "cost_price": 100.58,
        "selling_price": 104.41,
        "quantity": 50
    },
    {
        "name":"Water Bottle",
        "cost_price": 20.89,
        "selling_price": 25.00,
        "quantity": 50
    },
]
 
order_list = [
    {
        "customer_id": 1
    },
    {
        "customer_id": 1
    }
]
 
order_line_list = [
    {
        "order_id": 1,
        "item_id": 1,
        "quantity": 5
    }, 
    {
        "order_id": 1,
        "item_id": 2,
        "quantity": 2
    }, 
    {
        "order_id": 1,
        "item_id": 3,
        "quantity": 1
    },
    {
        "order_id": 2,
        "item_id": 1,
        "quantity": 5
    },
    {
        "order_id": 2,
        "item_id": 2,
        "quantity": 5
    },
]
# ______________________________________________________________________

'''
r = conn.execute(insert(items), items_list)
print(r.rowcount)
r = conn.execute(insert(orders), order_list)
print(r.rowcount)
r = conn.execute(insert(order_lines), order_line_list)
print(r.rowcount)
'''
pl()
# ______________________________________________________________________

# Selecting Records:
'''
s = select([customers])
r = conn.execute(s)
result = r.fetchall()

pprint(result)
pl()

for row in result:
    print('\n', row)
pl()

'''

# Here is a list of some common methods and attributes of the
# ResultProxy object:

# fetchone(), fetchmany(5), fetchall(), first(), rowcont(), keys(), scalar()

s = select([customers])
r = conn.execute(s)

## fetchone():
# result1 = r.fetchone()
# result2 = r.fetchone()
# print(result1)
# print(result2)

## fetchmany():
# many_result = r.fetchmany(3)
# pprint(many_result)

## keys():
# result_keys = r.keys()
# print(result_keys)

##scalar()

# result_one = r.fetchone()
# print(result_one)
# result_one = r.fetchone()
# print(result_one)

# result_scalar = r.scalar()
# print(result_scalar)

# ______________________________________________________________________

# We can access data in the row using column name, index position or
# Column instance. For example: 
'''
s = select([customers])
r = conn.execute(s)

row = r.fetchone()
print(row)

print('row_type >>', type(row))

print(row['id'], row['first_name']) # access column data via column name

print(row[0], row[1]) # access column data via column index position

print(row[customers.c.id], row[customers.c.first_name]) # access column data via Column object

print(row.id, row.first_name)    # access column data via attribute
'''
# ______________________________________________________________________
# Filtering Records
# access column data via Column object


s = select([items]).where(
    items.c.cost_price > 20
)

r = conn.execute(s)
results = r.fetchall()

pprint(results)

pl() # ______________________

s = select([items]).where(
    items.c.selling_price > 50).where(
         items.c.quantity > 10)

r = conn.execute(s)
results = r.fetchall()

pprint(results)


pl() # _________________________________________________________________