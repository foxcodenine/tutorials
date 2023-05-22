// const products = [];
const Product = require('../models/product');
// ---------------------------------------------------------------------

exports.getAddProduct = function(req, res, next) {
 
    res.render('add-product', {
        pageTitle: 'Products', 
        path: '/admin/add-product', 
        productCSS: true, 
        activeAddProduct: true
    });
}

exports.postAddProduct = async function(req, res, next) {
    const product = new Product(req.body.title);
    await product.save();
    res.redirect('/');
}
// ---------------------------------------------------------------------

exports.getProducts = async function (req, res, next) {

    let products = await Product.fetchAll();
    console.log(products);
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/shop', 
        hasProducts: products.length > 0, 
        formsCSS: true,
        activeShop:true,
     });
}