# https://wtforms.readthedocs.io/en/stable/fields.html#wtforms.fields.DecimalField
# https://www.sqlitetutorial.net/sqlite-tutorial/sqlite-describe-table/
# https://www.programcreek.com/python/example/81132/sqlalchemy.Numeric
# https://docs.sqlalchemy.org/en/13/core/type_basics.html?highlight=decimal#sqlalchemy.types.Numeric
# https://sqlalchemy-defaults.readthedocs.io/en/latest/
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/?highlight=integer
# 

# ______________________________________________________________________
from flask import Flask, redirect, render_template, url_for, request, session,\
     blueprints, flash

from flask_sqlalchemy import SQLAlchemy 

from flask_migrate import Migrate, MigrateCommand 
from flask_script import Manager

from flask_uploads import UploadSet, configure_uploads, IMAGES 

from flask_wtf import FlaskForm 
from wtforms import StringField, IntegerField, TextAreaField, DecimalField,\
     HiddenField, SelectField
from flask_wtf.file import FileField, FileAllowed

from uuid import uuid4

from selection_data import usa, countries, shipping_option
from pprint import pprint

from random import choice
from string import ascii_uppercase as upper, ascii_lowercase as lower


# ______________________________________________________________________

app = Flask(__name__, instance_relative_config=True)
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
    # pro_id
    id = db.Column(db.Integer, primary_key=True)
    pro_name = db.Column(db.String(50), unique=True, nullable=False)
    pro_price = db.Column(db.Numeric(5.2), nullable=False)
    pro_stock = db.Column(db.Integer, default=0)
    pro_description = db.Column(db.String(500), nullable=False)
    pro_image = db.Column(db.String(250))


class Orders(db.Model):
    __tablename__ = 'orders'

    id              = db.Column(db.Integer, primary_key=True)
    reference       = db.Column(db.String(5)) 
    first_name      = db.Column(db.String(20))
    last_name       = db.Column(db.String(20))
    phone_number    = db.Column(db.Integer)
    email           = db.Column(db.String(50)) 
    address         = db.Column(db.String(150))
    city            = db.Column(db.String(50))
    state           = db.Column(db.String(50))
    country         = db.Column(db.String(50))
    status          = db.Column(db.String(15))
    shipping        = db.Column(db.String(3))
    payment_type    = db.Column(db.String(10)) 
    items = db.relationship('Order_Items', backref='orders', lazy='dynamic')


class Order_Items(db.Model):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    quantity = db.Column(db.Integer)


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


class AddToCart(FlaskForm):
    quantity = IntegerField('Quantity')
    id = HiddenField('ID')




class Checkout(FlaskForm):
    

    first_name   = StringField('First Name')
    last_name    = StringField('Last Name')
    phone_number = StringField('Phone Number')
    email        = StringField('Email')
    address      = StringField('Address')
    city         = StringField('City')
    state        = SelectField('State', choices=(usa))
    country      = SelectField('Country', choices=(countries))
    shipping     = SelectField('Shipping Method',  choices=(shipping_option)
    # , default='1'
    )
    payment_type = SelectField('Payment Option', choices=([
        ('PP', 'PayPal'), ('WT', 'Wire Transfer'), ('SW', 'Swift'), ('VS', 'Visa')
    ]))

# ______________________________________________________________________

# Functions

def handle_cart(no_shipping=None):
    cart_products = []
    grand_total = 0
    number_of_items = 0  

    shipping_dict = {
        '1': 0, '2': 10, '3': 10, '4': 12, '5': 12,
        '6': 20, '7': 12, '8': 20, '9': 20}

    if 'cart' in session: 

        # Adding up any dublicate item in cart:_________________________
        cart = session['cart']
        cart_update = {}
        for item in cart:
            
            if (item['id']) in cart_update:                
                cart_update[item['id']] = (item['quantity'] + cart_update.get(item['id'])) 
            else:
                cart_update.update({item['id']: item['quantity']})
        

    
        for item, quantity in cart_update.items():
            
            pro = Products.query.filter_by(id = int(item)).first()
            price = float(pro.pro_price)
            grand_total += quantity * price
            number_of_items += quantity
            cart_products.append({
                'id': int(item), 'name': pro.pro_name, 'quantity': quantity, 'image': pro.pro_image,
                'price': price, 'total': (quantity * price)
            })    

            

    else:
        pass
    
    if not no_shipping:
        if request.method == 'POST':
            shipping_selected= request.form['shipping_option']
            session['shipping'] = shipping_selected
     
            
        elif 'shipping' in session:
            shipping_selected = session['shipping']
        else:
            shipping_selected = '1'
            session['shipping'] = shipping_selected
    

    

    # session['cart_products'] = cart_products

    shipping_selected = session['shipping'] 

    shipping_cost = shipping_dict[shipping_selected]

    tax = round(grand_total * 0.18, 2)
    grand_total_shipping = round(grand_total + shipping_cost)
    

    session['cart_update'] = {
        'products': cart_products,
        'grand_total': grand_total,
        'grand_total_shipping': grand_total_shipping,
        'number_of_items': number_of_items,
        'tax': tax,
        'shipping_cost': shipping_cost, 
        'shipping_selected': shipping_selected
    }
    session.modified = True

    session['cart'] = []
    for product in cart_products:
        session['cart'].append({'id': product['id'], 'quantity': product['quantity']})
        session.modified = True


    return grand_total, grand_total_shipping, number_of_items, \
        tax, shipping_cost, shipping_selected

# ______________________________________________________________________
# Routes________________________________________________________________

@app.route('/')
def index():
    session['cart_update'] = None
    my_products = Products.query.order_by(Products.id).all()
    return render_template('index.html', products=my_products)

# _________________________________________


@app.route('/product/<id>')
def product(id):
    session['cart_update'] = None
    current_pro = Products.query.filter_by(id=id).first() 

    form = AddToCart()

    return render_template('view-product.html', 
                            product=current_pro,
                            form=form)

# _________________________________________

@app.route('/quick_add/<id>')
def quick_add(id):
    session['cart_update'] = None
    if 'cart' not in session:
        session['cart'] = []
    
    if id:
        session['cart'].append({'id': id, 'quantity': 1})
        session.modified = True

    return redirect(url_for('index'))


# _________________________________________


@app.route('/add_to_cart/', methods=['POST'])
def add_to_cart():
    session['cart_update'] = None
    if 'cart' not in session:
        session['cart'] = []

    form = AddToCart()
    if form.validate_on_submit():

        session['cart'].append({'id': form.id.data, 'quantity': form.quantity.data})
        session.modified = True
        
    return redirect(url_for('index'))


# _________________________________________

@app.route('/cart_remove_item/<id>', methods=['POST'])
def cart_remove_item(id):
    session['cart_update'] = None
    id = str(id)
    new_cart = []
    

    for item in session['cart']:
  
        if item['id'] == id:
            continue 
        new_cart.append(item)

    session['cart'] = new_cart 
    session.modified = True
    
    return redirect(url_for('cart'))

# _________________________________________

@app.route('/cart_update_qty/<id>', methods=['POST'])
def cart_update_qty(id):
    
 
    
    new_cart = []

    for product in session['cart_update']['products']:

        if product['id'] == int(id):
                       
            new_cart.append({'id': product['id'], 'quantity':int(request.form["quantity"])})
        else:
            new_cart.append({'id': product['id'], 'quantity':product['quantity']})
    session['cart'] = new_cart
    session.modified = True
    return redirect(url_for('cart'))



# _________________________________________


@app.route('/cart/', methods=['POST', 'GET'])
def cart():


    grand_total, grand_total_shipping, number_of_items, \
        tax, shipping_cost, shipping_selected = handle_cart()
    
    cart_products = session['cart_update']['products']

    return render_template('cart.html', 
                            products=cart_products, 
                            grand_total=grand_total,
                            grand_total_shipping=grand_total_shipping, 
                            number_of_items=number_of_items,
                            tax = tax,
                            shipping_cost=shipping_cost,                            
                            ss=shipping_selected)

# _________________________________________



@app.route('/checkout/', methods=['POST', 'GET'])
def checkout():

    if session['cart_update']['number_of_items'] == 0:
        flash('Cart is empty!')
        return redirect(url_for('cart'))

    if session['shipping'] == '1':
        flash('Please select shipping method!')
        return redirect(url_for('cart'))


    form = Checkout()

    cart_update = session['cart_update']
    pprint(cart_update)


    if request.method == 'POST':

        if 'shipping' in session:
            shipping = session['shipping']
        else:
            shipping = '1'


        order = Orders()
        form.populate_obj(order)
        order.shipping = shipping 
        order.reference = ''.join([choice(upper + lower) for _ in range(7)])
        order.status = 'PENDING'

        for product in cart_update['products']:
            order_item = Order_Items(quantity=product['quantity'], product_id=product['id'])
            # this will create an order_item table record and add it to session with the order
            order.items.append(order_item)

        db.session.add(order)
        db.session.commit()

        del session['cart']
        session['shipping'] = '1'
        # del session['cart_products'] 
        session['cart_update'] = None

        return redirect(url_for('index'))

    if 'shipping' in session:
        form.shipping.process_data(session['shipping'])
        # form.shipping.default = session['shipping']
        # form.process()

    else:
        session['shipping'] = '1'
        form.shipping.process_data(session['shipping'] )

    
    return render_template(
                        'checkout.html',                         
                         form=form)


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
# c44a436e40fc_
# 13ddbbd26d3b_
# 3cb16f2b1b70




