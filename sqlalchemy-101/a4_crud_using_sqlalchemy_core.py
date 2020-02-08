from sqlalchemy import create_engine, Table, Column, String, Integer, MetaData
from sqlalchemy import DateTime, ForeignKey, Numeric, CheckConstraint
from sqlalchemy import insert

from sqlalchemy.sql import func, text

from datetime import datetime

from a3_e_commerce_app import engine, metadata, customers, items, orders,\
     order_lines, pl

from sqlalchemy import select, and_, or_, not_
from sqlalchemy import desc, asc
from sqlalchemy import update, delete, cast
from sqlalchemy import Date

from sqlalchemy import union, union_all



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

pl(20) # _______________________________________________________________

#  Ordering Result

s = select([items]).where(
    items.c.quantity > 10
).order_by(items.c.cost_price)

results = conn.execute(s).fetchall() 
pprint(results)



pl(21) # ______________________

# Adding asc() or desc() in the order by query: 

s = select([items]).where(
    items.c.quantity > 10
).order_by(desc(items.c.name))

results = conn.execute(s).fetchall()
pprint(results)

pl(22) # ______________________

# Sorting rows according multiple columns: 

s = select([customers]).order_by(
    customers.c.town, desc(customers.c.last_name)
)

results = conn.execute(s).fetchall()

for r in results:
    print(r.first_name, r.last_name, r.town)

pl(23) # _______________________________________________________________

# Limiting Results. limit()

s = select([items]).order_by(
    items.c.quantity
).limit(2) 

results = conn.execute(s).fetchall()

pprint(results)


pl(24) # ______________________

# Limit and offset. offset() 

s = select([items]).order_by(
    items.c.quantity
).limit(2).offset(1)

results = conn.execute(s).fetchall()

pprint(results)


pl(25) # _______________________________________________________________

# Limiting Columns

s = select([items.c.name, items.c.quantity]).where(
    items.c.quantity == 50
)

# printing the sql query
print('\n', s)


r = conn.execute(s)

# printing the columns selected
print('\n',str(r.keys()))

# printing the records
results = r.fetchall()
pprint(results)


pl(26) # ______________________

# simple calculations on the rows 

s = select([
    items.c.name,
    items.c.quantity * 2    
])

r = conn.execute(s)
results = r.fetchall()

print(s)

print('\n', str(r.keys()), '\n')

pprint(results)

pl(27) # ______________________

# label()

s = select([
    items.c.name,
    items.c.quantity,
    (items.c.selling_price - items.c.cost_price).label('profit')
])

r = conn.execute(s)
results = r.fetchall()

print(s)

print('\n', str(r.keys()), '\n')

pprint(results)



pl(28) # _______________________________________________________________

# Accessing Built- in Functions: 


c = [
    
    #  date/time functions  #    
    func.curtime(),
    func.localtime(),
    func.current_timestamp(),    
    func.date_format(func.now(), '%M'),        
    func.now(),

    # matematical functions #
    func.pow(4, 2),
    func.sqrt(441), 
    func.pi(), 
    func.floor(func.pi()),
    func.ceil(func.pi()),

    # string functions #
    func.lower("ABC"), 
    func.upper("abc"), 
    func.length("abc"), 
    func.trim("  a  bc "),
    func.char(65)      
    
    ]

 
s = select(c)
r = conn.execute(s)
results = r.fetchall()


for i in r.keys(): print(i)
print('\n')
for i in results[0]: print(i)

pl(29) # ______________________ 

#  Aggregate functions 

c = [
    func.sum(items.c.quantity), 
    func.round(func.avg(items.c.quantity), 2),
    func.max(items.c.quantity),
    func.min(items.c.quantity), 
    func.count(customers.c.id),
]

s = select(c)

r = conn.execute(s)

results = r.fetchall()

print(s, '\n')
for i in r.keys(): print(i)
print('\n')
for i in results[0]: print(i)

pl(30) # _______________________________________________________________

# Grouping Results group_by() :


s = select(
    [func.count('*'), customers.c.town]
).group_by(customers.c.town)


r = conn.execute(s).fetchall()
print(s, '\n')
pprint(r)


pl(31) # ______________________ 

# To filter out the results based on the values returned by aggregate
# functions we use having() method 

s = select(
    [func.count('*'), customers.c.town]
).group_by(customers.c.town).having(func.count('*') >= 3)

r = conn.execute(s)
results = r.fetchall()

print(s, '\n')
print(results)

pl(32) # _______________________________________________________________


# The Table instance provides the following two methods to create joins:

# 1. join() – creates inner join  

# 2. outerjoin() – creates outer join (LEFT OUTER JOIN to be specific) 

# The inner join returns only the rows which matches the join condition,
# whereas the outer join returns the rows which matches the join
# condition as well as some additional rows.

# Both methods accept a Table instance, figures out the join condition
# based on the foreign key relationship and returns a JOIN construct.


j = customers.join(orders) 
print(j, '\n')

# If the methods can’t figure out the join condition correctly or you
# want to specify an alternate condition, you can do so by passing the
# join condition manually as a second argument.


j = customers.join(items,
                items.c.id == customers.c.id)

print(j)

pl(33) # ______________________ 

# When we specify tables or list of columns in the select() function,
# SQLAlchemy automatically places those tables in the FROM clause.
# However, when we use join, we know exactly the tables we want in the
# FROM clause, so we use the select_from() method. However, if we want
# we can use select_from() in queries not involving joins too. For
# example:

s = select([
    customers.c.id, 
    customers.c.first_name, 
    customers.c.last_name
]).select_from(customers)


r = conn.execute(s)
results = r.fetchall()

print(s, '\n')
print(r.keys(), '\n')
pprint(results)

pl(34) # ______________________ 


s = select(
    [orders.c.id, 
    orders.c.date_placed,
    customers.c.last_name]
).select_from(orders.join(customers)
).where(and_(
    customers.c.first_name == 'John', 
    customers.c.last_name == 'Green'
))

r = conn.execute(s)
results = r.fetchall()

pprint(results)

pl(35) # ______________________ 

s = select(
    [(customers.c.id).label('customer_id'), 
    (customers.c.first_name + ' ' + customers.c.last_name).label('customer_name'), 
    (items.c.name).label('item_name'), 
    func.sum(order_lines.c.quantity).label('item_qty'),
    items.c.selling_price.label('price_of_each'), 
    (items.c.selling_price * func.sum(order_lines.c.quantity)).label('item_total_price')
    ]
).select_from(customers.join(orders).join(order_lines).join(items)
).group_by(items.c.name).where(customers.c.id == 1)

r = conn.execute(s)

results = r.fetchall() 


print(s, '\n')

print(r.keys(), '\n')


var_fixed = []

for row in results:
    var_fixed.append(list(map(str, list(row))))

for var in var_fixed:
    print('Customer {} - purchase {} {} - for {} each. Total {}'.format(
        var[1],var[3],var[2],var[4],var[5],)
    , '\n')
    


pl(36) # ______________________ 

s = select([ 
    orders.c.id.label('order_id'),
    orders.c.date_placed,
    order_lines.c.quantity,
    items.c.name,
]).select_from(
    orders.join(customers).join(order_lines).join(items)
).where(
    and_(customers.c.first_name == 'John',
    customers.c.last_name == 'Green')
)


r = conn.execute(s)
results = r.fetchall() 

print(s, '\n')
print(r.keys(), '\n')
pprint(results)

pl(37) # ______________________ 

# outerjoin() -- Left Join

s = select([
    customers.c.first_name, 
    orders.c.id
]).select_from(
    customers.outerjoin(orders)
)

r = conn.execute(s)

results = r.fetchall() 

print(s, '\n')
print(r.keys(), '\n')
pprint(results)

pl(38) # ______________________ 

# FULL OUTER JOIN   table1.outerjoin(table2, full=True)

# s = select([        
#     customers.c.first_name,
#     orders.c.id,
# ]).select_from(
#     orders.outerjoin(customers, full=True)
# )

# r = conn.execute(s)

# results = r.fetchall() 


# pprint(results)
'''MySQL and Full Outer Join. In SQL, a full outer join is a join that
returns all records from both tables, wheter there's a match or not:
unfortunately MySQL doesn't support this kind of join, and it has to be
emulated somehow'''

pl(39) # _______________________________________________________________ 

# Updating Records --  .update() 


s = update(items).where(
    items.c.name == 'Water Bottle'
).values(
    selling_price = 30,
    quantity = 60,
)

r = conn.execute(s)

print(s)
print('\nnumber_of_row_updated >>', r.rowcount)

pl(40) # ______________________ 

# Deleting Records --  .delete() 

records = [
    {
        'first_name': 'Chris',
        'last_name': 'Farrugia',
        'username': 'chrismariojimmy',
        'email': 'foxcode9@gmail.com',
        'address': '45, Alexander street',
        'town': 'Birzebbugia'
    },
    {
        'first_name': 'Mandy',
        'last_name': 'Casha Farrugia',
        'username': 'mandymaryjane',
        'email': 'mandymandy17@gmail.com',
        'address': '10, Triq il-Paci',
        'town': 'Zurrieq'
    },
]

input_records = conn.execute(insert(customers), records)




s = select([customers]).where(customers.c.last_name.like('%farrugia%'))

results = conn.execute(s).fetchall()
for row in results: print(
    row.id, row.first_name, row.last_name, row.username, row.email, row.town
)


s = delete(customers).where(customers.c.last_name.like('%farrugia%'))

r = conn.execute(s)

print('\nnumber_of_row_deleted >>', r.rowcount)

pl(41) # _______________________________________________________________

# Distinct -- .distinct()

s = select([customers.c.town])

r = conn.execute(s).fetchall()

pprint(r)

print('\n') # _________________

s = select([customers.c.town]).distinct()

r = conn.execute(s).fetchall()

pprint(r)   

pl(42) # ______________________ 

s = select([
    func.count(customers.c.town),
    func.count(customers.c.town.distinct())
])

r = conn.execute(s).fetchall()

print(r)

pl(41) # _______________________________________________________________

# Casting -- Casting convert data from one type to another. cast() 

s = select([
    cast(func.pi(), Integer),
    cast(func.pi(), Numeric),
    cast("2010-12-01", DateTime),
    cast(func.now(), Date),
    cast(func.round(func.pi(), 2), String)

])

r = conn.execute(s).fetchall() 

pprint(r)

pl(42) # _______________________________________________________________

# Unions -- union operator combine results set of multiple select statements. 
# union()


u = union(
    select([items.c.id, items.c.name]).where(items.c.name.like('%a%')),
    select([items.c.id, items.c.name]).where(items.c.name.like('%e%'))
)

r = conn.execute(u).fetchall() 

pprint(r)

pl(42) # ______________________ 

# union_all() 

u = union_all(
    select([items.c.id, items.c.name]).where(items.c.name.like('%a%')),
    select([items.c.id, items.c.name]).where(items.c.name.like('%e%'))
).order_by('name')

r = conn.execute(u).fetchall()

pprint(r)

pl(43) # _______________________________________________________________ 
