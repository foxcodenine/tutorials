from flask import Flask, redirect, render_template, url_for 
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager
from flask_uploads import UploadSet, configure_uploads, IMAGES 
from uuid import uuid4

app = Flask(__name__)

app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///trendy.db' 
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////mnt/d/Projects/tutorials/Udemy/The Ultimate Flask Course/19.Flask-Security/security.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 


# ______________________________________________________________________

db = SQLAlchemy(app)



# ______________________________________________________________________



# class testDB(db.Model):
#     __tablename__ = 'testtest'
    
#     id = db.Column(db.Integer, primary_key = True)
#     testcolumn = db.Column(db.String(255), unique=True, nullable=False)


# ______________________________________________________________________






# ______________________________________________________________________

if __name__ == '__main__':
    app.run() 