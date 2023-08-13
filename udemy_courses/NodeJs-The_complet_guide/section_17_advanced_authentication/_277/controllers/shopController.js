const Product = require('../models/Product.js');
const Order = require('../models/Order.js');


// ---------------------------------------------------------------------

exports.getIndex = async function (req, res, next) {
    try {

        let products = await Product.find();
  
        res.render('shop/index', {

            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
         });

    } catch (err) {
        console.info('! shopController getIndex !');
        console.error(err);
    }
}

// ---------------------------------------------------------------------

exports.getProducts = async function (req, res, next) {
    try {

        let products = await Product.find();
  
        res.render('shop/product-list', {
            
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products', 
        });
    } catch (err) {
        console.info('! shopController getProducts !');
        console.error(err);
    }
}

// ---------------------------------------------------------------------

exports.getProduct = async function (req, res, next) {

    try {
        const prodId = req.params.productId;    
        const product = await Product.findById(prodId);
        
        res.render('shop/product-detail', {
            
            product: product, 
            pageTitle: product.title, 
            path: '/product'
        });
    } catch (err) {
        console.info('! shopController getProduct !');
        console.error(err);
    }
    
}

// ---------------------------------------------------------------------



exports.getCart = async function (req, res, next) {
    try {
        let user = await req?.user.populate('cart.items.productId');
        let products = user?.cart?.items ?? []
   
   
        res.render('shop/cart', {
            
            products: products, 
            pageTitle: 'Your Cart', 
            path: '/cart', 
             // layout: false,
         });
    } catch (err) {
        console.info('! shopController.getCart !')
        console.error(err)
    }
}

exports.postCart = async function (req, res, next) {
    
    try {
        const prodId = req.body.productId;
        const product = await Product.findById(prodId);
        await req.user.addToCart(product);
        res.redirect('/cart');

        
    } catch (err) {
        console.info('! shopController.postCart !')
        console.info(err)
    }
}

// ---------------------------------------------------------------------

exports.getCheckout = async function (req, res, next) {
    let products = await Product.findAll();

    res.render('shop/checkout', {
        
        prods: products, 
        pageTitle: 'Checkout', 
        path: '/checkout', 
         // layout: false,
     });
}




exports.postCartDeleteProduct = async function (req, res, next) {
    try {
        const prodId = req.body.productId;

        req.user.deleteItemFromCart(prodId)

        res.redirect('/cart');


    } catch (err) {
        console.info('! shopController.postCartDeleteProduct !')
        console.error(err)
    }    
}

// ---------------------------------------------------------------------

exports.getOrders = async function (req, res, next) {

    const user = await req.user;

    const orders = await Order.find({'user.userId': user._id});


    res.render('shop/orders', {
        
        pageTitle: 'Orders', 
        path: '/orders', 
        orders: orders,

     });
}

exports.postOrders = async function(req, res, next) {



    let user = await req?.user.populate('cart.items.productId');

    const products = user.cart.items.map((product)=>{
        console.log(product.productId._doc)
        return {
            
            productData: {...product.productId._doc },
            quantity: product.quantity
        }
    })
    const order = new Order({
        products,
        user: {
            email: user.email,
            userId: user
        }
    } );
    await order.save();
    
    user.cart.items = [];
    await user.save();

    res.redirect('/orders');
}