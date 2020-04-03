# https://wtforms.readthedocs.io/en/stable/fields.html#wtforms.fields.DecimalField
# https://www.sqlitetutorial.net/sqlite-tutorial/sqlite-describe-table/
# https://www.programcreek.com/python/example/81132/sqlalchemy.Numeric
# https://docs.sqlalchemy.org/en/13/core/type_basics.html?highlight=decimal#sqlalchemy.types.Numeric
# https://sqlalchemy-defaults.readthedocs.io/en/latest/
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/?highlight=integer
# 

# ______________________________________________________________________
from flask import Flask, redirect, render_template, url_for, request

from flask_sqlalchemy import SQLAlchemy 

from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager

from flask_uploads import UploadSet, configure_uploads, IMAGES 

from flask_wtf import FlaskForm 
from wtforms import StringField, IntegerField, TextAreaField, DecimalField
from flask_wtf.file import FileField, FileAllowed

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
# Data_Base_Tables______________________________________________________



# class testDB(db.Model):
#     __tablename__ = 'testtest'    
#     id = db.Column(db.Integer, primary_key = True)
#     testcolumn = db.Column(db.String(255), unique=True, nullable=False)


class Products(db.Model):
    __tablename__ = 'products'

    pro_id = db.Column(db.Integer, primary_key=True)
    pro_name = db.Column(db.String(50), unique=True, nullable=False)
    pro_price = db.Column(db.Numeric(5.2), nullable=False)
    pro_stock = db.Column(db.Integer, default=0)
    pro_description = db.Column(db.String(500), nullable=False)
    pro_image = db.Column(db.String(250))

# ______________________________________________________________________
# WTF_Forms_____________________________________________________________

class AddProduct(FlaskForm):
    name = StringField('Name')
    price = DecimalField('Price', places=2)
    stock = IntegerField('Stock')
    description = TextAreaField('Description')
    image = FileField('Image', validators=[
        FileAllowed(IMAGES, 'Only images are accepted')
    ])

# ______________________________________________________________________
# Routes________________________________________________________________

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/product/')
def product():
    return render_template('view-product.html')


@app.route('/cart/')
def cart():
    return render_template('cart.html')

@app.route('/checkout/')
def checkout():
    return render_template('checkout.html')

@app.route('/admin/')
def admin():
    return render_template('admin/index.html', admin=True)

@app.route('/admin/add/', methods=['POST','GET'])
def add():
    form = AddProduct()

    if request.method == 'GET':
        return render_template('admin/add-product.html',admin=True, form=form)

    if form.validate_on_submit():
        pro_name = form.name.data
        pro_price = form.price.data
        pro_stock = form.stock.data
        pro_des  = form.description.data
        print('>>',form.image.data)

        return '<p>{}<br>{}<br>{}<br>{}<br></p>'.format(pro_name, pro_price, pro_stock, pro_des)
    return render_template('admin/add-product.html',admin=True, form=form)

@app.route('/admin/order/')
def order():
    return render_template('admin/view-order.html', admin=True)







# ______________________________________________________________________

if __name__ == '__main__':
    manager.run() 



# migrate:
# 118650a6d0ee_.py



# sqlite3 commands 
# .schema products