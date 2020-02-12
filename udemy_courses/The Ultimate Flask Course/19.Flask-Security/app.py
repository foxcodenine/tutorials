# https://pythonhosted.org/Flask-Security/quickstart.html

# ______________________________________________________________________

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, \
     RoleMixin, login_required
from uuid import uuid4

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///p:/Projects/tutorials/Udemy/The Ultimate Flask Course/19.Flask-Security/security.db' 


# This is used  to access the http://127.0.0.1:5000/register  page.
app.config['SECURITY_REGISTERABLE'] = True

# This is used to register: 
app.config['SECURITY_PASSWORD_SALT'] = 'This_is_a_secret'

# to remove the error:  AttributeError: 'NoneType' object has no attribute 'send'
app.config['SECURITY_SEND_REGISTER_EMAIL'] = False





db = SQLAlchemy(app)

# ______________________________________________________________________


roles_users = db.Table('roles_users',
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))) 

class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))


user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
# ______________________________________________________________________

# try the following url from :
# https://pythonhosted.org/Flask-Security/configuration.html
# URLs and Views

# http://127.0.0.1:5000/login

# http://127.0.0.1:5000/register  # <-- need to add config





'''
chris@gmail.com
password1

maria@gmail.com
password1



'''

# ______________________________________________________________________


if __name__ == '__main__':
    app.run()