from  flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from datetime import date 

from app2 import Members, Order, Courses, db

# ______________________________________________________________________


app = Flask(__name__) 

app.config.from_pyfile('config.cfg')

# db = SQLAlchemy(app) 


print('\n___________________________________________________________\n')


all_table = Members.query.all()

print(all_table)

print('\n___________________________________________________________\n')

anthony = Members.query.filter(Members.username == 'Anthony').first()
print(anthony.id)
print(anthony.order.all())

# Adding an Order:

# order1 = Order(price=50, member_id=anthony.id)
# db.session.add(order1)
# db.session.commit()


# Deleting an Order:

# order6 = Order.query.filter(Order.id == 6).first()
# db.session.merge(order6)     # <-- You Need to Merge the Object since is being imported from app2
# db.session.delete(order6)
# db.session.commit()


# Adding an Order using the backref:

michelle = Members.query.filter(Members.username == 'MichelleForever').first()

# order7 = Order(price=200, member = michelle)
# db.session.add(order7)
# db.session.commit()

print(michelle.order.all())


print('\n___________________________________________________________\n')

# Add records to courese table:

course1 = Courses(name='Course One')
course2 = Courses(name='Course Two')
course3 = Courses(name='Course Three')

# db.session.add(course1)
# db.session.add(course2)
# db.session.add(course3)
# db.session.commit()

anthony = Members.query.filter(Members.username == 'Anthony').first() 
michelle = Members.query.filter(Members.username == 'MichelleForever').first()

# -->

# course1.member.append(anthony)
# course1.member.append(michelle)
# print(course1.member)
db.session.commit()

course1 = Courses.query.filter(Courses.id == 1).all()
print(course1)
print(anthony.courses.all())


print('\n___________________________________________________________\n')