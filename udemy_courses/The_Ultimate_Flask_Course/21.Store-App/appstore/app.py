# https://wtforms.readthedocs.io/en/stable/fields.html#wtforms.fields.DecimalField
# https://www.sqlitetutorial.net/sqlite-tutorial/sqlite-describe-table/
# https://www.programcreek.com/python/example/81132/sqlalchemy.Numeric
# https://docs.sqlalchemy.org/en/13/core/type_basics.html?highlight=decimal#sqlalchemy.types.Numeric
# https://sqlalchemy-defaults.readthedocs.io/en/latest/
# https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/?highlight=integer
# https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.scalar
# https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.one
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



from selection_data import usa, countries, shipping_option, payment_options
from pprint import pprint

from random import choice
from string import ascii_uppercase as upper, ascii_lowercase as lower

from config import config

import boto3
import shutil


# ______________________________________________________________________

app = Flask(__name__, instance_relative_config=True)
photos = UploadSet('photos', IMAGES)


app.config['UPLOADED_PHOTOS_DEST'] = 'images'
app.config['SQLALCHEMY_DATABASE_URI'] = config.mysql_db 
# app.config['SQLALCHEMY_DATABASE_URI']='sqlite:////trendy.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
app.config['SECRET_KEY'] = config.sercret_key
app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = True

# ______________________________________________________________________
configure_uploads(app, photos)

db = SQLAlchemy(app)

migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand) 

# ______________________________________________________________________

s3_client = boto3.client('s3')
s3_resource = boto3.resource('s3')
region = config.region

mybucket = config.my_bucket

# ______________________________________________________________________
class MyDicts():
    count_dict = {x:y for x,y in countries}

    state_dict = {x:y for x, y in usa}

    shipping_dict = {
        '1': 0, '2': 10, '3': 10, '4': 12, '5': 12,
        '6': 20, '7': 12, '8': 20, '9': 20}

    shipping_dict_name = {
        '1' : 'Select Shipping',
        '2' : 'Zone 1 EU countries',
        '3' : 'Zone 2 Switzerland',
        '4' : 'Zone 3 Non-EU Europe',
        '5' : 'Zone 4 Russia',
        '6' : 'Zone 5 USA',
        '7' : 'Zone 6 Parts of North Africa, Canada, Middle East, Parts of Asia', 
        '8' : 'Zone 7 China',
        '9' : 'Zone 8 rest of the world'}

    pay_op_dict = {x:y for x, y in payment_options}

# ______________________________________________________________________
# Data_Base_Tables______________________________________________________



class Products(db.Model):
    __tablename__ = 'products'
    # pro_id
    id = db.Column(db.Integer, primary_key=True)
    pro_name = db.Column(db.String(50), unique=True, nullable=False)
    pro_price = db.Column(db.Numeric(5.2), nullable=False)
    pro_stock = db.Column(db.Integer, default=0)
    pro_description = db.Column(db.String(500), nullable=False)
    pro_image = db.Column(db.String(250))
    
    order_item = db.relationship('Order_Items', backref='product', lazy='dynamic')

class Orders(db.Model):
    __tablename__ = 'orders'

    id              = db.Column(db.Integer, primary_key=True)
    reference       = db.Column(db.String(7)) 
    first_name      = db.Column(db.String(20))
    last_name       = db.Column(db.String(20))
    phone_number    = db.Column(db.Integer)
    email           = db.Column(db.String(50)) 
    address         = db.Column(db.String(150))
    city            = db.Column(db.String(50))
    state           = db.Column(db.String(50))
    country         = db.Column(db.String(50))
    status          = db.Column(db.String(20))
    shipping        = db.Column(db.String(3))
    payment_type    = db.Column(db.String(10)) 
    order_total     = db.Column(db.Numeric(6.2))
    items = db.relationship('Order_Items', backref='orders', lazy='dynamic')

    def quantity(self):
        return db.session.query(db.func.sum(Order_Items.quantity)).filter(Order_Items.order_id == self.id).scalar()
        # https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.scalar
        # https://docs.sqlalchemy.org/en/13/orm/query.html#sqlalchemy.orm.query.Query.one

    def total_order(self):
        return db.session.query(db.func.sum(Order_Items.quantity * Products.pro_price)).join(Products).filter(Order_Items.order_id == self.id).scalar()


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
    payment_type = SelectField('Payment Option', choices=(payment_options))

# ______________________________________________________________________

# Functions

def handle_cart(no_shipping=None):
    cart_products = []
    grand_total = 0
    number_of_items = 0  

    
    shipping_dict = MyDicts.shipping_dict
    shipping_dict_name = MyDicts.shipping_dict_name
    
    

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
        'shipping_selected': [shipping_selected, shipping_dict_name[shipping_selected]]
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

@app.teardown_request
def teardown_request(exception):
    # print('>>>>', 'teardown_request')
    # print('<><><>', db.session)
    if exception:
        # print('>>>>', 'exception exception')
        # print('<><><>', db.session)
        db.session.rollback()
    
    db.session.remove()

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
   
    id = int(id)
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
    # pprint(cart_update)


    if request.method == 'POST':

        if 'shipping' in session:
            shipping = session['shipping']
        else:
            shipping = '1'

        # print('<><><>', db.session)
        order = Orders()
        form.populate_obj(order)
        order.shipping = shipping 
        order.reference = ''.join([choice(upper + lower) for _ in range(7)])
        order.status = 'Awaiting Payment'
        order.order_total = session['cart_update']['grand_total_shipping']
        # print('<><><>', db.session)
        for product in cart_update['products']:
            # print('<><><>', db.session)
            order_item = Order_Items(quantity=product['quantity'], product_id=product['id'])
            # this will create an order_item table record and add it to session with the order
            order.items.append(order_item)

            product = Products.query.filter_by(id=product['id']).update({'pro_stock' : (Products.pro_stock - product['quantity'])})
        # raise ValueError('test exc')
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
                         form=form, 
                         cart_update=cart_update)


# _________________________________________


@app.route('/admin/')
def admin():

    my_products = Products.query.all()

    products_in_stock = Products.query.filter(Products.pro_stock > 0).count()
    products_out_stock = Products.query.filter(Products.pro_stock <= 0).count()

    # pending = Orders.query.all()

    pending = Orders.query.all()
    # .filter_by(status = 'Awaiting Payment')
    # print(pending)


 



    return render_template(
        'admin/index.html', 
        admin=True, products=my_products, 
        in_stock=products_in_stock,
        out_stock=products_out_stock, 
        pending=pending
        )

# _________________________________________



@app.route('/admin/add/', methods=['POST','GET'])
def add():
    form = AddProduct()
    

    if request.method == 'GET':
        return render_template('admin/add-product.html',admin=True, form=form)

    if form.validate_on_submit():

        # _______START boto3 AWS________

        # this with save image temporarily in image folder
        photos.url(photos.save(form.image.data))

        # this will format the image name
        image_name = '{0}.{1}'.format(form.name.data, form.image.data.filename.split('.')[-1]).replace(' ', '_')
        
        # subfolder to upload images in the AWS bucket
        subfolder = 'trendy'
     
        
        # getting the temp image open it and uploading it to bucket
        with open(f'./images/{form.image.data.filename}', 'rb') as file:

                s3_resource.Bucket(mybucket).put_object(

                        Body = file,                        # file to upload in bits
                        Key = f'{subfolder}/{image_name}',  # file name to be save (& and subfolder)
                        ACL = 'public-read'                 # set to public
                )
        
        # formatting image url
        pro_image_url = f'https://{mybucket}.s3.{region}.amazonaws.com/{subfolder}/{image_name}'
 
        # removing image from locally
        shutil.os.remove(f'./images/{form.image.data.filename}')

        # _______END boto3 AWS________

        pro_name = form.name.data
        pro_price = form.price.data
        pro_stock = form.stock.data
        pro_description = form.description.data


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

@app.route('/admin/order/<order_id>')
def order(order_id):

    order = Orders.query.filter(Orders.reference == order_id).first()
    items_in_order = Order_Items.query.filter_by(order_id = order.id).all()
    

    return render_template('admin/view-order.html', 
                            admin=True,
                            order=order, 
                            items=items_in_order,
                            count_dict=MyDicts.count_dict,
                            state_dict=MyDicts.state_dict,
                            shipping_dict_name=MyDicts.shipping_dict_name,
                            pay_op_dict=MyDicts.pay_op_dict,
                            shipping_price = MyDicts.shipping_dict )




# ______________________________________________________________________

if __name__ == '__main__':
    manager.run() 



# migrate:
# c44a436e40fc_
# 13ddbbd26d3b_
# 3cb16f2b1b70
# 6c026fe92816
# _____________
# 78e69b42de49_.py
# 18804bfa0c62_.py
# d36a7bf004c1_.py 
# 3dbb2fb5ab68_.py
# 8d5572635256_.py




