

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_user import login_required, UserManager, UserMixin, SQLAlchemyAdapter

#_______________________________________________________________________

app = Flask('__name__')
db = SQLAlchemy(app)

app.config['SECRET_KEY'] = 'ThisIsASecret'
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////mnt/d/Projects/tutorials/Udemy/The Ultimate Flask Course/15.Flask-User/database.db'
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///p:/Projects/tutorials/Udemy/The Ultimate Flask Course/15.Flask-User/database.db'
#
app.config['USER_ENABLE_EMAIL'] = False

#_______________________________________________________________________

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    password =db.Column(db.String(255), nullable=False, server_default='')
    active = db.Column(db.Boolean(), nullable=False, server_default='0')

db_adapter = SQLAlchemyAdapter(db, User)
user_manager = UserManager(db_adapter, app)



# ______________________________________________________________________

@app.route('/')
def index():
    return '<h3>This is the unprotected home page!</h3>'


@app.route('/profile')
@login_required
def profile():
    return '<h3>This is the protected profile page! You have to be logged in to see it.</h3>'


#_______________________________________________________________________
if __name__ == '__main__':
    app.run()
