
# https://flask-restless.readthedocs.io/en/latest/
# https://flask-restless.readthedocs.io/en/stable/

# ______________________________________________________________________

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

manager.create_api(User, methods=['GET', 'POST', 'PUT'])
manager.create_api(Item, methods=['GET', 'POST', 'DELETE','PUT'])


"""
How to query to an api in Postmen:
In these examples we are using the item table:

to LIMIT:

http://127.0.0.1:5000/api/item?q={"limit":3}

to OFFSET

http://127.0.0.1:5000/api/item?q={offset":2}
http://127.0.0.1:5000/api/item?q={"limit":3, "offset":2}

to ORDER_BY

http://127.0.0.1:5000/api/item?q={"order_by":[{"field":"id", "direction":"asc"}]}
http://127.0.0.1:5000/api/item?q={"order_by":[{"field":"id", "direction":"desc"}]}
http://127.0.0.1:5000/api/item?q={"order_by":[{"field":"id", "direction":"desc"}],"limit":3, "offset":2}


SEARCH QUERY

http://127.0.0.1:5000/api/item?q={"filters":[{"name": "id","op": "==", "val": 1}]}

double query:
http://127.0.0.1:5000/api/item?q={"filters":[{"name": "id","op": ">", "val": 2},{"name": "id","op": "<", "val": 7}]}


name = fieldname / column
op = operator :
                ==, eq, equals, equals_to
                !=, neq, does_not_equal, not_equal_to
                >, gt, <, lt
                >=, ge, gte, geq, <=, le, lte, leq
                in, not_in
                is_null, is_not_null
                like
                has
                any
val = value



/* in, not_in */

http://127.0.0.1:5000/api/item?q={"filters":[{"name": "id","op": "in", "val": [1, 3, 7]}]}
http://127.0.0.1:5000/api/item?q={"filters":[{"name": "id","op": "not_in", "val": [1, 3, 7]}]}


/* is_null, is_not_null */

http://127.0.0.1:5000/api/item?q={"filters":[{"name": "user_id","op": "is_null"}]}
http://127.0.0.1:5000/api/item?q={"filters":[{"name": "user_id","op": "is_not_null"}]}

/* like */
http://127.0.0.1:5000/api/user?q={"filters":[{"name": "name","op": "like", "val": "chr%"}]}

"""

# ______________________________________________________________________


if __name__ == '__main__':
    app.run()