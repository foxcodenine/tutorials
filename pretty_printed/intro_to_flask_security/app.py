from flask import Flask
from flask_sqlalchemy import SQLAlchemy 
from flask_security import Security, SQLAlchemySessionUserDatastore
from uuid import uuid4
# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SECRET_KEY'] = uuid4().hex

# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////database.db'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///database.db'

db = SQLAlchemy(app)
# ______________________________________________________________________

# this is an association table to handle many to many relationships
# between our tables:
roles_users = db.Table('roles_users',
    db.Column('users_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('roles_id', db.Integer, db.ForeignKey('role.id'))
)

# creating our tables:
class User(db.Model):    
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean)
    confirmed_at = db.Column(sb.DateTime)


class Role(db.Model):
    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(255))


# connecting our model (tables) to flask-security:
user_datastore = SQLAlchemySessionUserDatastore(db, User, Role)
security = Security(app, user_datastore)

# ______________________________________________________________________

if __name__ == '__main__':
    app.run()