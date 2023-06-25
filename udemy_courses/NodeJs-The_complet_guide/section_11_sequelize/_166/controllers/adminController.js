const Product = require('../models/Product');

// -- Get All Products -------------------------------------------------

exports.getProducts = async function(req, res, next) {
 
    // let products = await Product.findAll();
    const products = await req.user.getProducts();

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}

// -- Add a Product ----------------------------------------------------

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

        // await Product.create({ title, imageUrl, description, price, userId: req.user.id });
        await req.user.createProduct({ title, imageUrl, description, price });
        

        res.redirect('/');
    } catch (err) {
        console.info('! postAddEditProduct !')
        console.error(err)
    }
}

// --Edit a Product -----------------------------------------------------

exports.getEditProduct = async function(req, res, next) {

    const editMode = req.query.edit;
    if (!editMode) { return res.redirect('/') };

    const prodId = req.params.productId;

    // const product = await Product.findByPk(prodId);
    const product = (await req.user.getProducts({ where: {id: prodId} }))[0]



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

// -- Delete a Product -------------------------------------------------

exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;
    
    // await (Product.findByPk(productId)).destroy();     
    // await Product.destroy({where: {id: productId} });     

    const product = (await req.user.getProducts({where: {id: productId } }))[0];
    product.destroy();

    res.redirect('/admin/products');
}

// ---------------------------------------------------------------------

exports.postResetProducts = async function(req, res, next) {
    const products = await Product.loadFromFile();

    products.forEach(async (p) => {
        delete p.id;
        return await req.user.createProduct({ ...p });
    });

    setTimeout(()=>{
        res.redirect('/');
    }, 500)
        
}

// ---------------------------------------------------------------------