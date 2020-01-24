from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from datetime import date

from app2 import Members



app = Flask(__name__) 

app.config.from_pyfile('config.cfg') 

db = SQLAlchemy(app)



print('\n___________________________________________________________\n')

test = Members.query.all()
print('>>',test) 

print('\n___________________________________________________________\n') 

# Offset queries:

# The OFFSET clause specifies the number of rows to skip before starting 
# to return rows from the query


offset_test = Members.query.offset(1).all()
print(offset_test)

offset_test = Members.query.offset(2).all()
print(offset_test)

offset_test = Members.query.offset(3).all()
print(offset_test)

offset_test = Members.query.offset(4).all()
print(offset_test)

print('\n___________________________________________________________\n') 

# Count:
# Return a count of rows this the SQL formed by this Query.

count_query = Members.query.count()
print('Members in table:', count_query)

count_query = Members.query.filter(Members.email.like('%gmail%')).count()
print('Members using gmail:', count_query)


print('\n___________________________________________________________\n') 


# Inequality <, >, <= and >=:

q = Members.query.filter(Members.id < 5).all() 

for m in q:
    print(f'id: {m.id}, username: {m.username}', end='      ')
    
print(' ') #____________________________________________________________  

q = Members.query.filter(Members.id >= 10).all() 

for m in q:
    print(f'id: {m.id}, username: {m.username}', end='      ')

print(' ') #____________________________________________________________    

q= Members.query.filter(Members.username < 'D').all() 

for m in q:
    print(f'id: {m.id}, username: {m.username}', end='      ')

print(' ') #____________________________________________________________    


print('\n___________________________________________________________\n') 
