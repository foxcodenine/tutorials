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
    const product = await Product.findByPk(prodId);

    if (!product) { return res.redirect('/') };

    res.render('admin/edit-product', {
        pageTitle: 'Edit Product', 
        path: '/admin/edit-product', 
        editing: editMode,
        product
    });
}

exports.postEditProduct = async function(req, res, next) {

    try {    
        const id = req.body.id;
        
        const product = await Product.findByPk(id);

        product.title = req.body.title;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;
        product.price = req.body.price;

        await product.save();
        console.log('Update Product')

        res.redirect('/');
    } catch (err) {
        console.info('! postAddEditProduct !')
    }
}
exports.postAddProduct = async function(req, res, next) {

    try {
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;
        const id = req.body.id;

        await Product.create({ title, imageUrl, description, price});
        

        res.redirect('/');
    } catch (err) {
        console.info('! postAddEditProduct !')
        console.error(err)
    }
}

exports.getProducts = async function(req, res, next) {
 
    let products = await Product.findAll();

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}
exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;

    // await (Product.findByPk(productId)).destroy();     
    await Product.destroy({where: {id: productId}});     

    res.redirect('/admin/products');
}