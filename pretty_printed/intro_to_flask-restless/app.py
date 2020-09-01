# mysql+pymysql://root:ayanami9@localhost/flask_restless

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from  flask_restless import APIManager

# ______________________________________________________________________

app = Flask(__name__)

# ______________________________________________________________________

 
app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = 'this_is_a_secret'
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:ayanami9@localhost/flask_restless'

# ______________________________________________________________________
db = SQLAlchemy(app)

manager = APIManager(app, flask_sqlalchemy_db=db)

# ______________________________________________________________________


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    pets = db.relationship('Pet', backref='owner', lazy='dynamic')

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    owner_id = db.Column(db.Integer, db.ForeignKey('person.id'))

# ______________________________________________________________________

manager.create_api(Person, methods=['GET', 'POST', 'DELETE', 'PUT'])
manager.create_api(Pet, methods=['GET', 'POST', 'DELETE', 'PUT'])




# ______________________________________________________________________



if __name__ == "__main__":
    app.run()
