from flask import Flask, render_template, redirect, url_for, request 
from flask_sqlalchemy import SQLAlchemy
from flask_restless import APIManager


# ______________________________________________________________________


app = Flask(__name__) 

# ______________________________________________________________________


app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'this_is_a_secret'

# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////mnt/d/Projects/tutorials/Udemy/The Ultimate Flask Course/17.Flask-restless/api.db'
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///p:/Projects/tutorials/Udemy/The Ultimate Flask Course/17.Flask-restless/api.db'

# ______________________________________________________________________

db = SQLAlchemy(app )

manager = APIManager(app, flask_sqlalchemy_db=db)

# ______________________________________________________________________

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique = True)
    items = db.relationship('Item', backref='user', lazy='dynamic')
   
class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique = True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

# ______________________________________________________________________

manager.create_api(User, methods=['GET', 'POST'])
manager.create_api(Item, methods=['GET', 'POST'])

# ______________________________________________________________________


if __name__ == '__main__':
    app.run()