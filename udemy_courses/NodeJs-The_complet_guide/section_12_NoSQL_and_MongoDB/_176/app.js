const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');

// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const { get404 } = require('./controllers/errorController.js');

const appEnv = '_development';

// ---------------------------------------------------------------------

const { mongodbClient, getMongodbClient, getDb } = require('./util/database.js');
const User = require('./models/User.js');

// ---------------------------------------------------------------------

// const sequelize = require('./util/database.js');
// const Product = require('./models/Product.js');
// const User = require('./models/User.js');
// const Cart = require('./models/Cart.js');
// const CartItem = require('./models/CartItem.js');
// const Order = require('./models/Order.js');
// const OrderItem = require('./models/OrderItem.js');

// User.hasMany(Product);
// Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'});

// User.hasOne(Cart);
// Cart.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})

// User.hasMany(Order);
// Order.belongsTo(User, {constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})

// Cart.belongsToMany(Product, {through: CartItem});
// Product.belongsToMany(Cart, {through: CartItem});

// Order.belongsToMany(Product, {through: OrderItem});
// Product.belongsToMany(Order, {through: OrderItem});


// ---------------------------------------------------------------------
            
const app = express();
            

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------

app.use(async (req, res, next) => {
    try {
        const user = await User.findById('64a306f0f6a7d84a2733cb2a');   
        req.user   = new User(user.name, user.email, user.password, user.cart, user._id)     
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


// (async ()=>{
//     try {

//         const force = appEnv === 'development' ? true : false;

//         const result = await sequelize.sync({ force });
//         // console.log(result);

//         let user = await User.findByPk(1);
//         let cart;

//         if(!user) {
//             user = await User.create({
//                 name: 'chris',
//                 email: 'chris@foxcode.io',
//                 password: 'secrete',
//             })
//             cart = user.createCart();
//         } else {
//             cart = await user.getCart();
//         }

//         // console.log(user);        
//     }
//     catch(err) {
//         console.error(err);
//     }
// })();

(async ()=>{
    let mongodbClient = await getMongodbClient()
    try {       
        await mongodbClient.connect();
        console.log('-> MongoDb Client connected successfully');
        
        app.listen(3000, '0.0.0.0', ()=>{
            console.log('-> Express listen on port 3000');
        });

    } catch (error) {
        console.info('! init !');
        console.log(error)
    } finally {
        // await mongodbClient.close();
    }
})();



