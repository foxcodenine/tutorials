# https://pythonhosted.org/Flask-Security/quickstart.html

# ______________________________________________________________________

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, \
     RoleMixin, login_required, login_required, current_user, roles_accepted, \
     roles_required, http_auth_required
from uuid import uuid4


from flask_mail import Mail

from flask_security.forms import RegisterForm, ConfirmRegisterForm, SendConfirmationForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///p:/Projects/tutorials/Udemy/The Ultimate Flask Course/19.Flask-Security/security.db' 
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////mnt/d/Projects/tutorials/Udemy/The Ultimate Flask Course/19.Flask-Security/security.db' 


# This is used  to access the registry page:      http://127.0.0.1:5000/register  
app.config['SECURITY_REGISTERABLE'] = True

# This is used to register: 
app.config['SECURITY_PASSWORD_SALT'] = 'This_is_a_secret'

# to remove the error:  AttributeError: 'NoneType' object has no attribute 'send'
# since email is not setup yet
# app.config['SECURITY_SEND_REGISTER_EMAIL'] = False
app.config['SECURITY_SEND_REGISTER_EMAIL'] = True

# This is used  to allow the reset password page:  http://127.0.0.1:5000/reset
app.config['SECURITY_RECOVERABLE'] = True

# This is used  to allow the change password page:  http://127.0.0.1:5000/change
app.config['SECURITY_CHANGEABLE'] = True


# This is used to redirect to this route after chnage pass, change it to try:
app.config['SECURITY_POST_CHANGE_VIEW'] = 'pass_changed'
# to remove the error:  AttributeError: 'NoneType' object has no attribute 'send'
# since email is not setup yet
app.config['SECURITY_SEND_PASSWORD_CHANGE_EMAIL'] = False

# This is to send a confermation email:
app.config['SECURITY_CONFIRMABLE'] = True

# rediredting to this url after selecting the confirm link in email:
app.config['SECURITY_POST_CONFIRM_VIEW'] = '/confirmed'



app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_USERNAME = 'farrugiachris12@gmail.com',
    MAIL_PASSWORD = 'o-6',
    MAIL_DEFAULT_SENDER = ('Chris from flask-mail','no-reply@example.com'),
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True
    )

# app.config['SECURITY_EMAIL_SENDER'] = 'farrugiachris12@gmail.com'
# app.config['SECURITY_EMAIL_SENDER'] = 'chrismariojimmy@yahoo.com'


# custimize subject
app.config['SECURITY_EMAIL_SUBJECT_REGISTER'] = 'This is a custimized Welcome ;)'

# as name sugest:
app.config['SECURITY_EMAIL_PLAINTEXT'] = True 
app.config['SECURITY_EMAIL_HTML'] = False

db = SQLAlchemy(app)
mail = Mail(app)

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
    name = db.Column(db.String(255))
    age = db.Column(db.Integer)
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))


# We have added two field to the default db ,name and age. 
# Here we are extending the form field from the defaul RegisterForm. 
# To know which form to extend from you need to check form.py from github 
# or localy from your site-packages folder  (check ref (D) below for path). 
# The process is similar to flask-wdt forms.

class ExtendedRegisterForm(ConfirmRegisterForm):
    name = StringField('Fullname', validators=[InputRequired()])
    age = IntegerField('Age')

# the above woulden't work so i have edit the forms.py in my localy  
# site-packages folder at flask-secrity (check ref (D) below for path).
# I have marke it with the following text:
''' I have edited this Class and I have added this Class''' 
#  have copyed the forms.py to this dir for ref.
# ______________________________________________________________________


user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore, register_form=ExtendedRegisterForm) #<-- (F)

# you need to register and new form here (F)  register_form=ExtendedRegisterForm
# ______________________________________________________________________

@app.route('/pass_changed')
def pass_changed():
    return '<h2>Password change successfully!</h2>'

# ___________________________

@app.route('/')
def index():

    return '<h2>home page</h2>'

# ___________________________


@app.route('/protected')
@login_required
def protected():
    return '<h2>This is protected! You email is {}.</h2>'.format(current_user.email)


# ___________________________


@app.route('/roleprotected')
@roles_accepted('admin')
def roleprotected():
    return '<h2>This is for admin only!</h2>'


# ___________________________


@app.route('/set_admin')
@login_required
def set_admin():
        
    # finding or creating a role (this case 'admin')
    admin_role = user_datastore.find_or_create_role('admin')
    # assigning the admin_role to current_user
    user_datastore.add_role_to_user(current_user, admin_role)
    db.session.commit()
    return '<h2>User have Admin right!</h2>'

# ___________________________


@app.route('/remove_admin')
@login_required
def remove_admin():
        
    # finding or creating a role (this case 'admin')
    admin_role = user_datastore.find_or_create_role('admin')
    # assigning the admin_role to current_user
    user_datastore.remove_role_from_user(current_user, admin_role)
    db.session.commit()
    return '<h2>Admin right, has been removed!</h2>'
    

@app.route('/confirmed')
@login_required
def confirm():
    return "<h3>{} is confirmed</h3>".format(current_user.email)

@app.route('/httpprotected')
@http_auth_required 
def httpprotected():
    return '<h2>This is the basic auth page!</h2>'


# ______________________________________________________________________

# try the following url from :
# https://pythonhosted.org/Flask-Security/configuration.html
# URLs and Views

# http://127.0.0.1:5000/login

# http://127.0.0.1:5000/register  # <-- need to add config





'''
chris@gmail.com
password2

maria@gmail.com
password1



'''

# ______________________________________________________________________
# ref (D)
# To Customize the templates
# the below code with print the flask-user directory
# copy the form template file to your app directory 
# note the directory from your app to trmplate should match that of the package
# modifiy the copyed template (not the original package one)
import os
import flask_mail

print('\n>>>>>>>> >>',os.path.dirname(flask_mail.__file__))

#_______________________________________________________________________

if __name__ == '__main__':
    app.run()
