// const products = [];
const Product = require('../models/Product');
// ---------------------------------------------------------------------




exports.getProducts = async function (req, res, next) {

    let products = await Product.fetchAll();
    // console.log(products);
    res.render('shop/product-list', {
        prods: products, 
        pageTitle: 'All Products', 
        path: '/products', 
        // hasProducts: products.length > 0, 
        // formsCSS: true,
        // activeShop:true,
        // layout: false,
     });
}

// ---------------------------------------------------------------------

exports.getIndex = async function (req, res, next) {
    let products = await Product.fetchAll();

    res.render('shop/index', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/shop', 
        // hasProducts: products.length > 0, 
        // formsCSS: true,
        // activeShop:true,
        // layout: false,
     });
}

// ---------------------------------------------------------------------

exports.getCart = async function (req, res, next) {
    let products = await Product.fetchAll();

    res.render('shop/cart', {
        prods: products, 
        pageTitle: 'Your Cart', 
        path: '/cart', 
         // layout: false,
     });
}

exports.getCheckout = async function (req, res, next) {
    let products = await Product.fetchAll();

    res.render('shop/checkout', {
        prods: products, 
        pageTitle: 'Checkout', 
        path: '/checkout', 
         // layout: false,
     });
}

exports.getOrders = async function (req, res, next) {
    let products = await Product.fetchAll();

    res.render('shop/orders', {
        prods: products, 
        pageTitle: 'Oredrs', 
        path: '/oredrs', 
         // layout: false,
     });
}