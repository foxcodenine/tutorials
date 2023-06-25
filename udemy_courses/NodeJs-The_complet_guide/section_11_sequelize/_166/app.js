const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');

// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const { get404 } = require('./controllers/errorController.js');

const appEnv = '_development';

// ---------------------------------------------------------------------
const sequelize = require('./util/database.js');
const Product = require('./models/Product.js');
const User = require('./models/User.js');
const Cart = require('./models/Cart.js');
const CartItem = require('./models/CartItem.js');
const Order = require('./models/Order.js');
const OrderItem = require('./models/OrderItem.js');

User.hasMany(Product);
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'});

User.hasOne(Cart);
Cart.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})

User.hasMany(Order);
Order.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})

Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});

Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});

// const db = require('./util/_database.js');

// (async () => {
    //     try {
        
        //         let sql =  'CREATE TABLE if not exists products('
        //             sql += 'id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,';    
        //             sql += 'title VARCHAR(255) NOT NULL,';    
        //             sql += 'price DOUBLE NOT NULL,';    
        //             sql += 'description TEXT NOT NULL,';    
        //             sql += 'imageUrl VARCHAR(255) NOT NULL';    
        //             sql += ')';
        //         let result = await db.execute(sql);
        //         console.log(result)
        
        //         sql =  'SELECT * FROM products';
        
        //         result = await db.execute(sql);
        //         console.log(result[1])
        //     }
        //     catch (error) {
            //         console.error(error)
            //     }
            
            // })();
// ---------------------------------------------------------------------
            
const app = express();
            



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------

app.use(async (req, res, next) => {
    try {

        req.user = await User.findByPk(1);
        
        next();

    } catch (err) {
        console.info('! 123456 !');
        console.error(err);
    }
})

// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use(get404);
// ---------------------------------------------------------------------


(async ()=>{
    try {

        const force = appEnv === 'development' ? true : false;

        const result = await sequelize.sync({ force });
        // console.log(result);

        let user = await User.findByPk(1);
        let cart;

        if(!user) {
            user = await User.create({
                name: 'chris',
                email: 'chris@foxcode.io',
                password: 'secrete',
            })
            cart = user.createCart();
        } else {
            cart = await user.getCart();
        }

        // console.log(user);        
    }
    catch(err) {
        console.error(err);
    }
})();


app.listen(3000)