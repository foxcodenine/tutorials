# pip install flask 
# pip install flask-sqlalchamey
# pip install flask-migrate
# pip install flask-script
# pip install flask-wtf


# ______________________________________________________________________

from flask import Flask, render_template, redirect, request 
from uuid import uuid4

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager

from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, FileField, IntegerField 
from wtforms.validators import InputRequired, Length

# ______________________________________________________________________

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:ayanami9@localhost/twitter_clone_engage'
# ______________________________________________________________________

# setup sqlalchemy db
db = SQLAlchemy(app)

# setup flask_migrate
migrate = Migrate(app, db)

# setup flask_script
manager = Manager(app)
manager.add_command('db', MigrateCommand)
# ______________________________________________________________________

class Users(db.Model):
    __tablename__ = 'users' 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    image = db.Column(db.String(100))


# ______________________________________________________________________
# Createing the wtf forms:

class RegisterForm(FlaskForm):
    name = StringField('Full name', validators=[
            InputRequired('Full name is required!'), 
            Length(max=100, message='Full name cannot exceed 100 characters!')])
    username = StringField('Username', validators=[
            InputRequired('Username is required!'),
            Length(max=50, message='Username cannot exceed 50 characters!')])
    password = PasswordField('Password', validators=[
            InputRequired('Password is required!'),
            Length(max=50, min=8, 
            message='Password should be between 8 to 50 characters long!')])
    image = FileField()

# ______________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

# ______________________________________

@app.route('/profile')
def profile():
    return render_template('profile.html')

# ______________________________________

@app.route('/register')
def register():
    return render_template('register.html')

# ______________________________________

@app.route('/timeline')
def timeline():
    return render_template('timeline.html')


# ______________________________________________________________________

if __name__ == '__main__':
    manager.run()


# to start app in comandline:
# python .\app.py runserver



# to start migrate:
# python app.py db init
# python app.py db migrate
# python app.py db upgarde



# versions:
# .\20.Engage!-A-Twitter-Clone\migrations\versions\55fcbf9329c6_.py