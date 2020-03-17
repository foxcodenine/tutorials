from flask import Flask, redirect, render_template, url_for 
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager
from flask_uploads import UploadSet, configure_uploads, IMAGES 
from uuid import uuid4
# ______________________________________________________________________

app = Flask(__name__)
photos = UploadSet('photos', IMAGES)


app.config['UPLOADED_PHOTOS_DEST'] = 'images'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///trendy.db' 
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////trendy.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
app.config['DEBUG'] = True 
app.config['SECRET_KEY'] = uuid4().hex


# ______________________________________________________________________
configure_uploads(app, photos)

db = SQLAlchemy(app)

migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand) 

# ______________________________________________________________________

# class testDB(db.Model):
#     __tablename__ = 'testtest'    
#     id = db.Column(db.Integer, primary_key = True)
#     testcolumn = db.Column(db.String(255), unique=True, nullable=False)

# ______________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/product')
def product():
    return render_template('view-product.html')


@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route('/admin')
def admin():
    return render_template('admin/index.html', admin=True)

@app.route('/admin/add')
def add():
    return render_template('admin/add-product.html',admin=True)

@app.route('/admin/order')
def order():
    return render_template('admin/view-order.html', admin=True)







# ______________________________________________________________________

if __name__ == '__main__':
    manager.run() 