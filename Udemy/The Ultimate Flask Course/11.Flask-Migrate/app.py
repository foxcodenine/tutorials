# pip install flask-migrate

# to use flask-migrate:
# set FLASK_APP=app.py  or  export set FLASK_APP=app.py (if in bash)
# flask run

# flask db init 
# flask db migrate 
# flask db upgrade  or  flask db downgrade


# https://flask-sqlalchemy.palletsprojects.com/en/2.x/config/

# ______________________________________________________________________

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# oOp9iEOuPn   SAEm6rAKiE
# mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn

# ______________________________________________________________________
# to run python as python app.py migrate with out set or export 
# and do   flask db migrate
from flask_script import Manager                  #<- flask-setup method
from flask_migrate import MigrateCommand          #<- flask-setup method


# ______________________________________________________________________


app = Flask(__name__)

app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://oOp9iEOuPn:SAEm6rAKiE@remotemysql.com:3306/oOp9iEOuPn'


# ______________________________________________________________________

db = SQLAlchemy(app)
migrate =  Migrate(app, db)

manager = Manager(app)                            #<- flask-setup method
manager.add_command('db', MigrateCommand)         #<- flask-setup method


# order of migration files:
# 101915edd230_.py
# b4e332ed2369_.py
# 5309585f2837_.py
# 6a89170728ba_.py
# 75c3ff35b3c3_.py

# ______________________________________________________________________


class Member(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    subscibed = db.Column(db.Boolean)


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Integer)
    test_column = db.Column(db.Boolean)



# There are some cases that flask-migrate can't dedact properly 
# example: renaming of tables or columns, 
# it will delete existing and create a new one and lossing all the data.
# In this case we need to edit the migrate file manualy:

# migrate files are written using the  alembic framwork
# https://alembic.sqlalchemy.org/en/latest/ 
# you can find commands here:
# https://alembic.sqlalchemy.org/en/latest/ops.html      
# the (Operation Reference) section
#  in this case to rename the Orders to Order table we need to use the: 
# op.rename_table(old_table_name, new_table_name, schema=None)

# ______________________________________________________________________

if __name__ == '__main__':
    manager.run()                                 #<- flask-setup method
    # app.run()    #<- flask-setup method   you can remove this now