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
    my_products = Products.query.order_by(Products.pro_id).all()
    return render_template('index.html', products=my_products)

# _________________________________________


@app.route('/product/<id>')
def product(id):

    current_pro = Products.query.filter_by(pro_id=id).first() 



    return render_template('view-product.html', product=current_pro)

# _________________________________________


@app.route('/cart/')
def cart():
    return render_template('cart.html')

# _________________________________________


@app.route('/checkout/')
def checkout():
    return render_template('checkout.html')

# _________________________________________


@app.route('/admin/')
def admin():

    my_products = Products.query.all()

    products_in_stock = Products.query.filter(Products.pro_stock > 0).count()

    products_out_stock = Products.query.filter(Products.pro_stock <= 0).count()



    return render_template(
        'admin/index.html', 
        admin=True, products=my_products, 
        in_stock=products_in_stock,
        out_stock=products_out_stock)

# _________________________________________



@app.route('/admin/add/', methods=['POST','GET'])
def add():
    form = AddProduct()

    if request.method == 'GET':
        return render_template('admin/add-product.html',admin=True, form=form)

    if form.validate_on_submit():

        pro_image = photos.url(photos.save(form.image.data))  
        
        pro_name = form.name.data
        pro_price = form.price.data
        pro_stock = form.stock.data
        pro_description = form.description.data
        pro_image_url = pro_image

        newProduct = Products(
            pro_name=pro_name, 
            pro_price=pro_price, 
            pro_stock=pro_stock, 
            pro_description=pro_description, 
            pro_image=pro_image_url
        )

        db.session.add(newProduct)
        db.session.commit()
        
        

        return redirect(url_for('admin'))
    return render_template('admin/add-product.html',admin=True, form=form)

# _________________________________________

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