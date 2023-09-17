const Product = require('../models/Product');
const path = require('path');
// const fs = require('fs');
const fse = require('fs-extra')
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

// ---------------------------------------------------------------------

exports.getProducts = async function(req, res, next) {
 
    


    const products = await  Product.find({userId: req.user._id})
                            // .select('title price -_id')
                            .populate('userId', 'username -_id');

    // console.log(products);

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
        errorMessage: req.flash('error'),   
        oldInput: {},
        validationErrors: [], 
    });
}

exports.postAddProduct = async function(req, res, next) {
    
    const title = req.body.title;
    const imageFile = req.file;
    const description = req.body.description;
    const price = req.body.price;
    
    if (!imageFile) {
        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Add Product', 
            path: '/admin/add-product', 
            editing: false,
            errorMessage: 'Attacged file is not an image', 
            oldInput: { title, description, price},
            validationErrors: [],
        });
    }

    try {
        
        // -------------------------------------------------

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array()[0].msg)

            return res.status(422).render('admin/edit-product', {
                pageTitle: 'Add Product', 
                path: '/admin/add-product', 
                editing: false,
                errorMessage: errors.array()[0].msg, 
                oldInput: { title, description, price},
                validationErrors: errors.array(),
            });
        } 

        
        // -------------------------------------------------

        const imageUrl = imageFile.path;
        // -------------------------------------------------

        const userId = req.user._id;
        
        const product = new Product({
            // _id: new mongoose.Types.ObjectId('64d7a5690ca1971955bc1691'),    // <~ testing for error handler
            title, price, description, userId, imageUrl});
        await product.save();
        console.log('-> Added Product');     

        res.redirect('/admin/products');

    } catch (err) {
        console.info('! postAddEditProduct !');

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
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
        product,
        errorMessage: req.flash('error'),   
        oldInput: {},
        validationErrors: [], 
    });
}

exports.postEditProduct = async function(req, res, next) {

    try {    
        const id = req.body.id.trim();        
        
        const product = await Product.findById(id);

        if (product.userId.toString() !== req.user._id.toString()) {
            return res.redirect('/');
        }
        else {

            product.title = req.body.title;
            // product.imageUrl = req.body.imageUrl;
            product.description = req.body.description;
            product.price = req.body.price;
            product.userId = req.user._id;

            // -------------------------------------------------

            const imageFile = req.file;

            if (!imageFile) {
                // no image loaded, keep current image
            } else {
                fse.remove(product.imageUrl);                           
                // fse.unlink(product.imageUrl);                           
                product.imageUrl = imageFile.path;
            }
            
            // -------------------------------------------------
            const errors = validationResult(req);


            if (!errors.isEmpty()) {
                console.log(errors.array()[0].msg)
    
                return res.status(422).render('admin/edit-product', {
                    pageTitle: 'Add Product', 
                    path: '/admin/add-product', 
                    editing: true,
                    errorMessage: errors.array()[0].msg, 
                    oldInput: { title: product.title, description: product.description, price: product.price , id: id},
                    validationErrors: errors.array(),
                });
            } 
        
            // -------------------------------------------------
    
            // const productObj = new Product(title, price, description, imageUrl, id);
    
            await product.save();
            console.log('-> Update Product')
    
            res.redirect('/');
        }

    } catch (err) {
        console.info('! postEditProduct !')
        console.info(err)

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
}

// ---------------------------------------------------------------------

exports.postDeleteProduct = async function(req, res, next) {
 
    let productId = req.body.id;
    
    await Product.deleteOne({_id: productId, userId: req.user._id});
    // await Product.findByIdAndDelete(productId);
    console.log('-> Delete Product')

    res.redirect('/admin/products');
}

exports.postResetProducts = async function(req, res, next) {
    const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    const products = await new Promise((resolve, reject)=> {
        fse.readFile(productsFilePath, (err, fileContent)=>{

            if (err) resolve([]);
            else resolve( JSON.parse(fileContent));
        })
    });  

    products.forEach(async (p) => {
   
        // const userId = req.user._id;
        const userId = req.user;


        const product = new Product({...p, userId});
        await product.save();
        // console.log(product)
    });

    setTimeout(()=>{
        res.redirect('/');
    }, 500)
}
// ---------------------------------------------------------------------