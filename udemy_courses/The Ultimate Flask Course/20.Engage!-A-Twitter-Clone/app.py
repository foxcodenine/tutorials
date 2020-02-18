# pip install flask 
# pip install flask-sqlalchamey
# pip install flask-migrate
# pip install flask-script


# ______________________________________________________________________

from flask import Flask, render_template, redirect, request 
from uuid import uuid4

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager

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