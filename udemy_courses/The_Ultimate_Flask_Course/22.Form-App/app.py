# https://pythonise.com/series/learning-flask/flask-configuration-files
# https://www.atlassian.com/git/tutorials/saving-changes/gitignore#git-ignore-patterns
# https://flask.palletsprojects.com/en/1.1.x/patterns/favicon/
# pip install bcrypt
# pip install flask_wtf

from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin
from wtforms import StringField

from flask_security.forms import RegisterForm

# <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">


app = Flask(__name__)

# app.config.from_object("config.DevelopmentConfig")

if app.config["ENV"] == "production":
    app.config.from_object("config.ProductionConfig")
else:
    app.config.from_object("config.DevelopmentConfig")

# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///p:/Projects/tutorials/Udemy/The_Ultimate_Flask_Course/22.Form-App/forum.db'




db = SQLAlchemy(app)
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

# ______________________________________________________________________

roles_user = db.Table('roles_users', 
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)



class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    descripton = db.Column(db.String(255))



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    name = db.Column(db.String(255))
    username = db.Column(db.String(255), unique=True)
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_user, backref=db.backref('users', lazy='dynamic'))


# class TestDB(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(255), unique=True)

# ______________________________________________________________________

class ExtendRegisterForm(RegisterForm):
    name = StringField('Name')
    username = StringField('Username')

# ______________________________________________________________________

user_datastore = SQLAlchemyUserDatastore(db, User, Role)
Security = Security(app, user_datastore, register_form=ExtendRegisterForm)


# ______________________________________________________________________
import os 
from flask import send_from_directory  
@app.route('/favicon.ico') 
def favicon():     
    return send_from_directory(os.path.join(app.root_path, 'static'), 
                                   'Favicon1.ico', mimetype='image/vnd.microsoft.icon')

# ______________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/thread')
def thread():
    return render_template('thread.html')

# @app.route('/login')
# def login():
#     return render_template('login.html')

# @app.route('/register')
# def register():
#     return render_template('register.html')

@app.route('/base')
def base():
    return render_template('base.html')




# ______________________________________________________________________
# import flask_security
# import os

# print('\n>>>>>>>> >>',os.path.dirname(flask_security.__file__))

print('>>>>',app.config['SECRET_KEY'])

# ______________________________________________________________________

if __name__ == '__main__':
    manager.run()