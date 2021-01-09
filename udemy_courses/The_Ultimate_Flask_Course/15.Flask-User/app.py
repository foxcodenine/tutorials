# https://flask-user.readthedocs.io/en/latest/
# https://flask-user.readthedocs.io/en/latest/customizing_forms.html
# https://flask-user.readthedocs.io/en/v0.6/customization.html

#_______________________________________________________________________

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_user import login_required, UserManager, UserMixin, SQLAlchemyAdapter, current_user
from flask_mail import Mail

#_______________________________________________________________________

app = Flask('__name__')


app.config['SECRET_KEY'] = 'ThisIsASecret'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////mnt/d/Projects/tutorials/Udemy/The Ultimate Flask Course/15.Flask-User/database.db'
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///p:/Projects/tutorials/Udemy/The Ultimate Flask Course/15.Flask-User/database.db'
app.config['USER_ENABLE_EMAIL'] = True 


app.config['USER_APP_NAME'] = 'Flask-User Application!!'

app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_USERNAME = 'fourequus@gmail.com',
    MAIL_PASSWORD = 'a4',
    MAIL_DEFAULT_SENDER = ('Chris from flask-mail','fourequus@gmail.com'),
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True
    )

# you can do also: 
# app.config.from_pyfile('config.cfg')

app.config['USER_AFTER_REGISTER_ENDPOINT'] = 'user.login'
app.config['USER_AFTER_LOGIN_ENDPOINT'] = 'profile'

db = SQLAlchemy(app)
mail = Mail(app)
#_______________________________________________________________________

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password =db.Column(db.String(255), nullable=False, server_default='')
    active = db.Column(db.Boolean(), nullable=False, server_default='0')
    email = db.Column(db.String(255), nullable=False, unique=True)
    confirmed_at = db.Column(db.DateTime())

db_adapter = SQLAlchemyAdapter(db, User)
user_manager = UserManager(db_adapter, app)



# ______________________________________________________________________

@app.route('/')
def index():
    return '<h3>This is the unprotected home page!</h3>'


@app.route('/profile')
@login_required
def profile():
    return '<h3>username: {} <br>email: {}<br>password: {}</h3>'.format(
        current_user.username,current_user.email,current_user.password
    )
#_______________________________________________________________________

# To Customize the templates
# the below code with print the flask-user directory
# copy the form template file to your app directory 
# note the directory from your app to trmplate should match that of the package
# modifiy the copyed template (not the original package one)
import os
import flask_user

print(os.path.dirname(flask_user.__file__))

#_______________________________________________________________________
if __name__ == '__main__':
    app.run()
