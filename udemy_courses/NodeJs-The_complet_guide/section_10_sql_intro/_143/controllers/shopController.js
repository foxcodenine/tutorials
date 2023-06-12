// const products = [];
const Product = require('../models/Product');
const Cart = require('../models/Cart');
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
        const product = await Product.findById(prodId);
        
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title, 
            path: '/product'
        })
    } catch (err) {
        console.info('! shopController getProduct !');
        console.error(err);
    }
    
}

// ---------------------------------------------------------------------



exports.getCart = async function (req, res, next) {
    const products = await Product.fetchAll();
    const cart = await Cart.getCart();
    const cartProdIds = cart.products.map(prod => prod.id);
    const cartProdQty = cart.products.map(prod => prod.qty);

    const cartProducts = [];

    products.forEach((prod, index) => {
        if (cartProdIds.includes(prod.id)) {
            cartProducts.push({...prod, qty: cartProdQty[index]})
        }
    });

    res.render('shop/cart', {
        products: cartProducts, 
        pageTitle: 'Your Cart', 
        path: '/cart', 
         // layout: false,
     });
}

exports.postCart = async function (req, res, next) {
    const prodId = req.body.productId;

    const product = await Product.findById(prodId);

    Cart.addProduct(prodId, product.price);

    res.redirect('/cart');
}

// ---------------------------------------------------------------------

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


exports.deleteProduct = async function (req, res, next) {

    const prodId = req.body.productId;
    const prodPrice = req.body.productPrice;

    await Cart.deleteProduct(prodId, prodPrice);
    res.redirect('/cart');
}