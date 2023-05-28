const Product = require('../models/Product');
// ---------------------------------------------------------------------

exports.getAddProduct = function(req, res, next) {
 
    res.render('admin/add-product', {
        pageTitle: 'Products', 
        path: '/admin/add-product', 
        // productCSS: true, 
        // activeAddProduct: true,
        layout:false,
    });
}

exports.postAddProduct = async function(req, res, next) {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    
    const product = new Product(title, imageUrl, description, price);
    await product.save();
    res.redirect('/');
}

exports.getProduct = async function(req, res, next) {
 
    let products = await Product.fetchAll();

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}