# https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/

# mysql://scott:tiger@localhost:3306/mydatabase

# username = scott , password = tiger , host = localhost , 
# port = 3306 , mydatabse = database name

# 'mysql://3iuBR8bhga:oCGfAZji9J@ remotemysql.com:3306/3iuBR8bhga'

# ______________________________________________________________________

from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 
from datetime import date

# ______________________________________________________________________

app = Flask(__name__) 

app.config.from_pyfile('config.cfg') 

db = SQLAlchemy(app) 

# ______________________________________________________________________

class Members(db.Model):
    __tablename__ = 'members'
    id = db.Column(db.Integer, primary_key=True) 
    username = db.Column(db.String(30), unique=True)
    password  =db.Column(db.String(30))
    email = db.Column(db.String(50), unique=True)
    join_date = db.Column(db.DateTime) 

    order = db.relationship('Order', backref='member', lazy='dynamic')  # <--A
    
    courses = db.relationship(
        'Courses', secondary='user_courses', backref='member', lazy='dynamic'
                                                                     )  # <--B


    def __init__(self, username=None, password=None, email=None, join_date=None):

        self.username = username  
        self.password = password 
        self.email = email  
        self.join_date = join_date 

    def __repr__(self):
        return f'<Member: {self.username}>'
    
    def __str__(self):
        return f'<Member: {self.username}>'




class Order(db.Model):
    __tablename__ = 'order'
    id = db.Column(db.Integer, primary_key = True)
    price = db.Column(db.Integer)
    member_id = db.Column(db.Integer, db.ForeignKey('members.id'))      # <--A

# 'A' one to many relationship 

# ______________________________________________________________________

# 'B' Many to Many relationships:

class Courses(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(30))



# Mapping table:

db.Table(
    'user_courses',
    db.Column('member_id', db.Integer, db.ForeignKey('members.id')),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id'))
)


db.create_all()

# ______________________________________________________________________
# Deleting an order:

# anthony = Members.query.filter(Members.username == 'Anthony').first()
# print(anthony.order.all())

# order5 = Order.query.filter(Order.id == 5).first()
# db.session.delete(order5)
# db.session.commit()

# print(anthony.order.all())
# ______________________________________________________________________

if __name__ == '__main__q':

    # ______________________________________________________________________
    # To Create Table:

  

    # db.create_all() will look into all my Classes that I  have in my application, 
    # if there are class that don't map to the tables in the database, 
    # it will create them as Tables.

    # ______________________________________________________________________

    # Inserting a record into the table:

    anthony = Members(
        username='Anthony', password='secrete', 
        email='anthony@prityprinted.com', join_date=date.today()
    )
    # db.session.add(anthony)
    # db.session.commit()

    michelle = Members(
        username='MichelleForever', password='password', 
        email='mforever@gmail.com', join_date=date.today()
    )
    # db.session.add(michelle)
    # db.session.commit()

    zach = Members(
        username='Zach1', password='zachisthebest', 
        email='zach@gmail.com', join_date=date.today()
    )
    # db.session.add(zach)
    # db.session.commit()

    chris = Members(
        username='Chris1', password='secrete', 
        email='chris@gmail.com', join_date=date.today()
    )
    # db.session.add(chris)
    # db.session.commit()
    # ______________________________________________________________________

    # Updating a record:

    # anthony = Members.query.filter_by(username='Anthony').one()
    # anthony.password = 'newpassword'
    # db.session.commit()

    # ______________________________________________________________________

    # Deleting a record from table:

    # anthony = Members.query.filter_by(username='Anthony').first()
    # db.session.delete(anthony)
    # db.session.commit()




    print('\n___________________________________________________________\n')

    # Selecting all records in table:

    members = Members.query.all() 
    print(members)

    for m in members:
        print('username {}  password {}'.format(m.username, m.password))



    print('\n___________________________________________________________\n')



    # Filtering queries - filter_by vs filter:

    zach = Members.query.filter_by(username='Zach1').first() 

    # or 

    michelle = Members.query.filter(Members.username == 'MichelleForever').first() 

    print('>>>', michelle)

    print('Zach email{}, Michelle email {}'.format(zach.email, michelle.email))


    print('\n___________________________________________________________\n')

    # Generative Queries: 

    q = Members.query 
    print('>>>',q,'\n') 

    print(q.all(), '\n')

    zach = q.filter(Members.username == 'Zach1').first()
    print(zach.username)


    print('\n___________________________________________________________\n')

    # 1st Filter:
    members_result = Members.query.filter(Members.password == 'secrete')

    print(members_result.all())


    # 2nd Filter:
    chris = members_result.filter(Members.username == 'Chris1').first()

    print(chris.username)

    print('\n___________________________________________________________\n')

    # Not Equals query:

    not_equal_query = Members.query.filter(Members.username != 'Anthony').all()
    for m in not_equal_query:
        print(m.username)


    print('\n___________________________________________________________\n')


    # Like query:

    like_query = Members.query.filter(Members.email.like('%gmail%')).all()

    for e in like_query:
        print(e.email)


    print('\n___________________________________________________________\n')

    # In querys;

    in_query = Members.query.filter(Members.username.in_(['Anthony', 'Zach1'])).all() 

    print(in_query)


    in_query = Members.query.filter(Members.username.in_(['Chris1', 'MichelleForever'])).all() 

    print(in_query)


    print('\n___________________________________________________________\n')

    # Not In querys:

    not_in_query = Members.query.filter(~Members.username.in_(['Chris1', 'MichelleForever', 'Anthony'])).all() 

    for m in not_in_query:
        print(m.username)

    print('\n___________________________________________________________\n')

    # Null and Not Null queries:

    # karen = Members(username='Karen', password='karenismyname')
    # db.session.add(karen)
    # db.session.commit()


    email_null = Members.query.filter(Members.email == None).all() 
    print('Null - email',email_null, '\n')

    email_not_null = Members.query.filter(Members.email != None).all() 
    print('Not Null - email',email_not_null)

    print('\n___________________________________________________________\n')

    # And query: 

    and_query = Members.query.filter(Members.email.like('%gmail%')).filter(Members.username == 'Chris1').all() 
    print(and_query)


    # OR 

    and_query = Members.query.filter(Members.email.like('%gmail%'), Members.username == 'Chris1').all() 
    print(and_query)

    # OR 

    and_query = Members.query.filter(db.and_(Members.email.like('%gmail%'), Members.username == 'Chris1')).all()
    print(and_query)


    print('\n___________________________________________________________\n')

    # OR query: 


    or_query = Members.query.filter(db.or_(Members.email.like('%gmail%'), Members.email == None)).all()
    print(or_query)


    print('\n___________________________________________________________\n')

    # Order_by:

    orderby_un = Members.query.order_by(Members.username).all()
    print(orderby_un)

    orderby_id = Members.query.order_by(Members.id).all() 
    print(orderby_id)

    # Order_by desc():

    orderby_id = Members.query.order_by(Members.id.desc()).all() 
    print(orderby_id)


    # Order by - first 

    ob_id_first = Members.query.order_by(Members.id).first() 
    print(ob_id_first)


    # Adding a filter to Order by:

    ob_email_filter =  Members.query.filter(Members.email.like('%gmail%')).order_by(Members.email).all()

    for e in ob_email_filter:
        print(e.email, end=', ')

    print('\n___________________________________________________________\n')

    # Limit: 

    all_members = Members.query.all()
    print(all_members)


    limit_members = Members.query.limit(2).all()
    print(limit_members)

    first_id  = Members.query.order_by(Members.id).limit(1).all()
    print(first_id)


    print('\n___________________________________________________________\n')


# if __name__ == '__main__':
#     app.run()
