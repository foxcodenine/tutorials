const Product = require('../models/Product');
const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------

exports.getProducts = async function(req, res, next) {
 
    /// -- TODO: get all products.

    const products = await  Product.find()
                            // .select('title price -_id')
                            .populate('userId', 'username -_id');

    console.log(products);

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
        // const id = req.body.id;
        const userId = req.user._id;

        const product = new Product({title, price, description, userId, imageUrl});
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
              
        const product = await Product.findById(id);

        product.title = req.body.title;
        product.imageUrl = req.body.imageUrl;
        product.description = req.body.description;
        product.price = req.body.price;
        product.userId = req.user._id;

        // const productObj = new Product(title, price, description, imageUrl, id);

        await product.save();
        console.log('-> Update Product')

        res.redirect('/');
    } catch (err) {
        console.info('! postEditProduct !')
        console.info(err)
    }
}

// ---------------------------------------------------------------------

exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;
    
    await Product.findByIdAndDelete(productId);
    console.log('-> Delete Product')

    res.redirect('/admin/products');
}

exports.postResetProducts = async function(req, res, next) {
    const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    const products = await new Promise((resolve, reject)=> {
        fs.readFile(productsFilePath, (err, fileContent)=>{

            if (err) resolve([]);
            else resolve( JSON.parse(fileContent));
        })
    });  

    products.forEach(async (p) => {
   
        // const userId = req.user._id;
        const userId = req.user;


        const product = new Product({...p, userId});
        await product.save();
        console.log(product)
    });

    setTimeout(()=>{
        res.redirect('/');
    }, 500)
}
// ---------------------------------------------------------------------