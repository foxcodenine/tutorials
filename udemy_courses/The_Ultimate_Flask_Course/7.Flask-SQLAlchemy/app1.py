# https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/

# mysql://scott:tiger@localhost:3306/mydatabase

# username = scott , password = tiger , host = localhost , 
# port = 3306 , mydatabse = database name

# 'mysql://3iuBR8bhga:iCGfAZji9J@remotemysql.com:3306/3iuBR8bhga'

# ______________________________________________________________________

from flask import Flask 
from flask_sqlalchemy import SQLAlchemy 

# ______________________________________________________________________

app = Flask(__name__) 

app.config.from_pyfile('config.cfg') 

db = SQLAlchemy(app) 

# ______________________________________________________________________

class Test(db.Model): 
    id = db.Column(db.Integer, primary_key=True)


# ______________________________________________________________________
# To Create Table:

db.create_all()

# db.create_all() will look into all my Classes that I  have in my application, 
# if there are class that don't map to the tables in the database, 
# it will create them as Tables.


# ______________________________________________________________________


# if __name__ == '__main__':
#     app.run()