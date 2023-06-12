const Product = require('../models/Product');
// ---------------------------------------------------------------------

exports.getAddProduct = function(req, res, next) {
 
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        editing: false,
    });
}

exports.getEditProduct = async function(req, res, next) {

    const editMode = req.query.edit;
    if (!editMode) { return res.redirect('/') };

    const prodId = req.params.productId;
    const product = await Product.findById(prodId);

    if (!product) { return res.redirect('/') };

    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', 
        path: '/admin/edit-product', 
        editing: editMode,
        product
    });
}

exports.postAddEditProduct = async function(req, res, next) {

    try {
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;
        const id = req.body.id;
        
        const product = new Product(id, title, imageUrl, description, price);
        await product.save();
        res.redirect('/');
    } catch (err) {
        console.info('! postAddEditProduct !')
    }
}

exports.getProduct = async function(req, res, next) {
 
    let products = await Product.fetchAll();

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}
exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;

    await Product.deleteById(productId);     

    res.redirect('/admin/products');
}