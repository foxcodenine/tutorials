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
from flask_wtf import FlaskForm
from datetime import datetime

from flask_security.forms import RegisterForm

# <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">


app = Flask(__name__)

app.config.from_object("config.DevelopmentConfig")

# if app.config["ENV"] == "production":
#     app.config.from_object("config.ProductionConfig")
# else:
#     app.config.from_object("config.DevelopmentConfig")


# ______________________________________________________________________


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


class Thread(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    description = db.Column(db.String(250))
    date_created = db.Column(db.DateTime)




# class TestDB(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(255), unique=True)

# ______________________________________________________________________

class ExtendRegisterForm(RegisterForm):
    name = StringField('Name')
    username = StringField('Username')

class NewThread(FlaskForm):
    title = StringField('Title')
    description = StringField('Description')

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

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NewThread()

    if form.validate_on_submit():

        title = form.title.data 
        description = form.description.data

        new_thread = Thread(title=title, description=description, date_created = datetime.now())
        db.session.add(new_thread)
        db.session.commit()

        return redirect(url_for('index'))


    all_threads = Thread.query.all()

    return render_template('index.html', form=form, threads=all_threads)
# ___________________________________

@app.route('/profile')
def profile():
    return render_template('profile.html')
# ___________________________________

@app.route('/thread')
def thread():
    
    return render_template('thread.html')

# ___________________________________

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



# 6dc1a5f8c57b_.py
# cd87ca91ac81_.py