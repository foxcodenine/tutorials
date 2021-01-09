from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRETE_KEY'] = 'this_is_a_secret'


# ______________________________________________________________________


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://CovSdqWkvi:2iYSrMxaM4@remotemysql.com:3306/CovSdqWkvi'

db = SQLAlchemy(app)

class DataBase1(db.Model):
    __tablename__ = 'database_update'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)

update_now = DataBase1(date=datetime.now())
db.session.add(update_now)
db.session.commit()

# ______________________________________________________________________


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn'


db = SQLAlchemy(app)

class DataBase2(db.Model):
    __tablename__ = 'database_update'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)

update_now = DataBase2(date=datetime.now())
db.session.add(update_now)
db.session.commit()

# ______________________________________________________________________

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://F2udETTsO6:U7hQzPXXBW@remotemysql.com:3306/F2udETTsO6'


db = SQLAlchemy(app)

class DataBase3(db.Model):
    __tablename__ = 'database_update'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime)

update_now = DataBase3(date=datetime.now())
db.session.add(update_now)
db.session.commit()

# ______________________________________________________________________
@app.route('/')
def index():
    return '<h3>DATABASES UPDATED</h3>'


if __name__ == '__main__':
    app.run()



