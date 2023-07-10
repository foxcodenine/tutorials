const Product = require('../models/Product');

// ---------------------------------------------------------------------

exports.getProducts = async function(req, res, next) {
 
    /// -- TODO: get all products.

    const products = await Product.fetchAll();

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}

// ---------------------------------------------------------------------

exports.getAddProduct = function(req, res, next) {
 
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        editing: false,
    });
}

exports.postAddProduct = async function(req, res, next) {

    try {
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;
        const id = req.body.id;
        const userId = req.user._id;

        const product = new Product(title, price, description, imageUrl, userId);
        await product.save();
        console.log('-> Added Product');     

        res.redirect('/admin/products');

    } catch (err) {
        console.info('! postAddEditProduct !')
        console.error(err)
    }
}



// ---------------------------------------------------------------------

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

exports.postEditProduct = async function(req, res, next) {

    try {    
        const id = req.body.id;        
              
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;

        const productObj = new Product(title, price, description, imageUrl, id);

        await productObj.update();
        console.log('-> Update Product')

        res.redirect('/');
    } catch (err) {
        console.info('! postAddEditProduct !')
        console.info(err)
    }
}

// ---------------------------------------------------------------------

exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;
    
    await Product.delete(productId);
    console.log('-> Delete Product')

    res.redirect('/admin/products');
}

exports.postResetProducts = async function(req, res, next) {
    const products = await Product.loadFromFile();

    products.forEach(async (p) => {
        delete p.id;
        const userId = req.user._id;

        const product = new Product(p.title, p.price, p.description, p.imageUrl, userId);
        await product.save();
    });

    setTimeout(()=>{
        res.redirect('/');
    }, 500)
}
// ---------------------------------------------------------------------