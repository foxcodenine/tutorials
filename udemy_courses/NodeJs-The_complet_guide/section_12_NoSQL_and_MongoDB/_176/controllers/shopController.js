// const products = [];
const Product = require('../models/Product.js');
const Order = require('../models/Order.js');
const OrderItem = require('../models/OrderItem.js');


// ---------------------------------------------------------------------

exports.getIndex = async function (req, res, next) {
    try {

        let products = await Product.fetchAll();
  
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

        let products = await Product.fetchAll();
  
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
        // const product = await _Product.findById(prodId);
        
        // const product = await Product.findByPk(prodId);
        // const product = (await Product.findAll({where: {id: prodId } }))[0];
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
        const products = await req?.user.getCart();

        // const cartItems = req?.user.cart?.items ?? [];
        // const products  = await Promise.all(cartItems.map( async (item)=>{
        //     const product = await Product.findById(item.productId.toString())
        //     product.id = product._id.toString();
        //     product.quantity = item.quantity;
        //     return product;
        // }));
        
   
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
        // let userCart = await req.user.getCart();
        // let productInCart = await userCart.getProducts({where: {id: prodId} });
        // let newQuantity = 1;

        // if (productInCart.length > 0) {
        //     let product = productInCart[0];
        //     let oldQuantity = product.cartItem.quantity;
        //     newQuantity += oldQuantity;
        //     await userCart.addProduct(product, { through: { quantity: newQuantity } });

        // }
        // else {
        //     let product = await Product.findByPk(prodId);
        //     await userCart.addProduct(product, { through: { quantity: newQuantity } });
        // }


        const product = await Product.findById(prodId);
        const result = await req.user.addToCart(product);
        console.log(result);

        res.redirect('/cart');

        
    } catch (err) {
        console.info('! shopController.postCart !')
        console.info(err)
    }

    // const product = await _Product.findById(prodId);

    // _Cart.addProduct(prodId, _product.price);

    // res.redirect('/cart');
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

    const orders = await req.user.getOrders();

    // let products = await Product.findAll();
    // let user = await req.user;
    // let orders = await user.getOrders({include: ['products']});
    // console.log( orders)


    res.render('shop/orders', {
        // prods: products, 
        pageTitle: 'Orders', 
        path: '/orders', 
        orders: orders,
         // layout: false,
     });
}

exports.postOrders = async function(req, res, next) {

    let user = await req.user;

    await user.addOrder();

    // let cart = await user.getCart();
    
    // let products = await cart.getProducts();

    // let order = await user.createOrder();

    // await cart.setProducts(null);

    // order.addProducts(products.map((product)=>{
    //     console.log('->',product)
    //     product.orderItem = { quantity: product.cartItem.quantity }
    //     return product;
    // }));

    res.redirect('/orders');
}