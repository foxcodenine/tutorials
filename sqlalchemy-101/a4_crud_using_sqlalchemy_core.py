from sqlalchemy import create_engine, Table, Column, String, Integer, MetaData
from sqlalchemy import DateTime, ForeignKey, Numeric, CheckConstraint
from sqlalchemy import insert

from sqlalchemy.sql import func, text

from datetime import datetime

from a3_e_commerce_app import engine, metadata, customers, items, orders,\
     order_lines, pl

from sqlalchemy import select, and_, or_, not_
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
pl(1)
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
# Filtering Records usin where()
# access column data via Column object 


s = select([items]).where(
    items.c.cost_price > 20
)

r = conn.execute(s)
results = r.fetchall()

pprint(results)

pl(2) # ______________________

# We can specify additional conditions by simple chaining the where()
# method.

s = select([items]).where(
    items.c.selling_price > 50).where(
         items.c.quantity > 10)

r = conn.execute(s)
results = r.fetchall()

pprint(results)


pl(3) # _________________________________________________________________

# Bitwise Operators Bitwise Operators &, | and ~ allow us to connect
# conditions with SQL AND, OR and NOT operators respectively.

# print all items that cost more than 50 and we have more than 10
s = select([items]).where(
    (items.c.selling_price > 50) & (items.c.quantity > 10)
)

r = conn.execute(s)

results = r.fetchall()
pprint(results)

pl(4) # ______________________

# print all items 
s = select([items]) 
r = conn.execute(s)
results = r.fetchall()
pprint(results)

pl(5) # ______________________

# print all items that cost more than 200 or we have less than 5
s = select([items]).where(
    (items.c.cost_price > 200) | (items.c.quantity < 5)
)

r = conn.execute(s)
results = r.fetchall()
pprint(results)

pl(6) # ______________________

# print all items that quantity is not equal to 50 

s = select([items]).where(
    ~(items.c.quantity == 50)
)

r = conn.execute(s)
results = r.fetchall()
pprint(results)


# or you can also do:

s = select([items]).where(
    (items.c.quantity != 50)
)

r = conn.execute(s)
results = r.fetchall()
pprint(results)

print('\n',s)

pl(7) # ______________________

s = select([items]).where(
    (items.c.quantity != 50) & (items.c.cost_price < 20)
)

r = conn.execute(s)
results = r.fetchall()
pprint(results)

print('\n',s)



pl(8) # _________________________________________________________________

# Conjunctions Another way to connect conditions is to use conjunction
# functions i.e and_(), or_() and not_().  

# print all items that quantity is more or equals than 50 And price
# less than 100 
s = select([items]).where(
    and_(items.c.quantity >= 50, items.c.cost_price < 100)
)

r = conn.execute(s)
results = r.fetchall()

pprint(results)
print('\n',s)

pl(9) # ______________________

# print all items that quantity is more or equals than 50    OR price
# less than 100
s = select([items]).where(
    or_(items.c.quantity >= 50, items.c.cost_price < 100)
)

r = conn.execute(s)
results =  r.fetchall() 

pprint(results)
print('\n',s)

pl(10) # ______________________

# print all items that quantity is more or equals than 50 And price
# less than 100 but not headphone
s = select([items]).where(
    and_(items.c.quantity >= 50, items.c.cost_price < 100, 
                        not_(items.c.name == 'headphone'))
)

r = conn.execute(s)
results =  r.fetchall() 

pprint(results)
print('\n',s)

pl(11) # _______________________________________________________________

# Other Common Comparison Operators:

# IS NULL, IS NOT NULL,  IN, NOT IN, BETWEEN, NOT BETWEEN, LIKE, & NOT LIKE

s = select([orders]).where(
    orders.c.date_shipped == None
)

results = conn.execute(s).fetchall()

print(s, '\n')
pprint(results)

pl(12) # ______________________


s = select([orders]).where(
    orders.c.date_shipped != None
)

results = conn.execute(s).fetchall() 

print(s, '\n')
pprint(results)

pl(13) # ______________________

# .in()
s = select([customers]).where(
    customers.c.first_name.in_(['Sarah', 'John'])
)

results = conn.execute(s).fetchall()

print(s, '\n')
for r in results:
    print(r.id, r.first_name, r.last_name)



pl(14) # ______________________

# .notin()
s = select([customers]).where(
    customers.c.first_name.notin_(['Sarah', 'John'])
)

results = conn.execute(s).fetchall()

print(s, '\n')
for r in results:
    print(r.id, r.first_name, r.last_name)

pl(15) # ______________________

# .between()
s = select([items]).where(
    items.c.cost_price.between(10, 20)
)

results = conn.execute(s).fetchall()

pprint(results)

pl(16) # ______________________

# _not() .between()
s = select([items]).where(
    not_(items.c.cost_price.between(10, 20))
)

results = conn.execute(s).fetchall()

pprint(results)

pl(17) # ______________________

# .like()
s = select([customers]).where(
    customers.c.first_name.like('J%')
)

results = conn.execute(s).fetchall()

for r in results:
    print(r.id, r.first_name, r.last_name, r.email)

pl(18) # ______________________


# or you can use .ilike()  for none case sensitive querys

s = select([customers]).where(
    customers.c.first_name.ilike('j%')
)

results = conn.execute(s).fetchall()

for r in results:
    print(r.id, r.first_name, r.last_name, r.email)

pl(19) # ______________________

# not_() .like()
s = select([customers]).where(
    not_(customers.c.first_name.like('J%'))
)

results = conn.execute(s).fetchall()

for r in results:
    print(r.id, r.first_name, r.last_name, r.email)





