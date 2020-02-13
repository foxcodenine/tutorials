# https://pythonhosted.org/Flask-Security/quickstart.html

# ______________________________________________________________________

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, \
     RoleMixin, login_required, login_required, current_user, roles_accepted, \
     roles_required
from uuid import uuid4

from flask_mail import Mail

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

app.config['SECURITY_EMAIL_SENDER'] = 'chrismariojimmy@yahoo.com'

app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_USERNAME = 'fourequus@gmail.com',
    MAIL_PASSWORD = 'a4',
    MAIL_DEFAULT_SENDER = ('Chris from flask-mail','fourequus@gmail.com'),
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True
    )
# app.config['SECURITY_EMAIL_SENDER'] = 'chrismariojimmy@yahoo.com'



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
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users,
                            backref=db.backref('users', lazy='dynamic'))


user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
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


if __name__ == '__main__':
    app.run()