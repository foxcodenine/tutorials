const Product = require('../models/Product.js');
const Order = require('../models/Order.js');
const fse = require('fs-extra');
const path = require('path');
const PDFDocument = require('pdfkit');

const _env = require('../util/env_loader.js');


// ---------------------------------------------------------------------

exports.getIndex = async function (req, res, next) {
    try {
        const page = req.query.page ?? 1;
        const itemsPerPage = _env.ITEMS_PER_PAGE;        

        let totalProducts = await Product.find().count();

        let products = await Product.find()
                        .skip((page - 1) * itemsPerPage)
                        .limit(itemsPerPage);

  
        res.render('shop/index', {

            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            currentPage: Number(page),
            hasNextPage: itemsPerPage * Number(page) < totalProducts,
            hasPreviousPage: Number(page) > 1,
            nextPage: Number(page) + 1,
            previousPage: Number(page) - 1,
            lastPage: Math.ceil(totalProducts / itemsPerPage),
            
         });

    } catch (err) {
        console.info('! shopController getIndex !');
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
}

// ---------------------------------------------------------------------

exports.getProducts = async function (req, res, next) {
    try {

        const page = req.query.page ?? 1;
        const itemsPerPage = _env.ITEMS_PER_PAGE;        

        let totalProducts = await Product.find().count();

        let products = await Product.find()
                        .skip((page - 1) * itemsPerPage)
                        .limit(itemsPerPage);
  
        res.render('shop/product-list', {
            
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products', 
            currentPage: Number(page),
            hasNextPage: itemsPerPage * Number(page) < totalProducts,
            hasPreviousPage: Number(page) > 1,
            nextPage: Number(page) + 1,
            previousPage: Number(page) - 1,
            lastPage: Math.ceil(totalProducts / itemsPerPage),
        });
    } catch (err) {
        console.info('! shopController getProducts !');
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
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
        });
    } catch (err) {
        console.info('! shopController getProduct !');
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
    
}

// ---------------------------------------------------------------------



exports.getCart = async function (req, res, next) {
    try {
        let user = await req?.user.populate('cart.items.productId');
        let products = user?.cart?.items ?? []
   
   
        res.render('shop/cart', {
            
            products: products, 
            pageTitle: 'Your Cart', 
            path: '/cart', 
             // layout: false,
         });
    } catch (err) {
        console.info('! shopController.getCart !')
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
}

exports.postCart = async function (req, res, next) {
    
    try {
        const prodId = req.body.productId;
        const product = await Product.findById(prodId);
        await req.user.addToCart(product);
        res.redirect('/cart');

        
    } catch (err) {
        console.info('! shopController.postCart !')
        console.info(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
}

// ---------------------------------------------------------------------

exports.getCheckout = async function (req, res, next) {
    let products = await Product.findAll();

    res.render('shop/checkout', {
        
        prods: products, 
        pageTitle: 'Checkout', 
        path: '/checkout', 
         // layout: false,
     });
}




exports.postCartDeleteProduct = async function (req, res, next) {
    try {
        const prodId = req.body.productId;

        req.user.deleteItemFromCart(prodId)

        res.redirect('/cart');


    } catch (err) {
        console.info('! shopController.postCartDeleteProduct !')
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }    
}

// ---------------------------------------------------------------------

exports.getOrders = async function (req, res, next) {

    const user = await req.user;

    const orders = await Order.find({'user.userId': user._id});


    res.render('shop/orders', {
        
        pageTitle: 'Orders', 
        path: '/orders', 
        orders: orders,

     });
}

exports.postOrders = async function(req, res, next) {



    let user = await req?.user.populate('cart.items.productId');

    const products = user.cart.items.map((product)=>{
        console.log(product.productId._doc)
        return {
            
            productData: {...product.productId._doc },
            quantity: product.quantity
        }
    })
    const order = new Order({
        products,
        user: {
            email: user.email,
            userId: user
        }
    } );
    await order.save();
    
    user.cart.items = [];
    await user.save();

    res.redirect('/orders');
}

exports.getInvoice = async function (req, res, next) {
    try {
        const orderId = req.params.orderId;

        let order =  await Order.findById(orderId);

        if (!order) {
            throw Error('! No Order found !');
            return;
        }

        if (order.user.userId.toString() !== req.user._id.toString()) {
            throw Error('! Unauthorized !');
            return;
        }
       
        
        const invoiceName = 'invoice-' + orderId + '.pdf';        
        const invoicePath = path.join('data', 'invoices', invoiceName);

        // -- reading a file and return it, approch
        /*  

        const file = await fse.readFile(invoicePath);
        res.setHeader('Content-Type', 'application/pdf' );
        res.setHeader(`Content-Disposition`, `attachment; filename="${invoiceName}"` );
        // res.setHeader(`Content-Disposition`, `inline; filename="${invoiceName}"` );
        res.send(file);
        */

        // -- creating and streaming a pdf file, approch

        
        res.setHeader('Content-Type', 'application/pdf' );
        res.setHeader(`Content-Disposition`, `attachment; filename="${invoiceName}"` );
        // res.setHeader(`Content-Disposition`, `inline; filename="${invoiceName}"` );
        
        // -- Streaming a file with 'fs'
        // const file = fse.createReadStream(invoicePath);
        // file.pipe(res);

        // -- Creating a pdf file and streaming it with 'pdfkit'
        const pdfDoc = new PDFDocument();
        pdfDoc.pipe(fse.createWriteStream(invoicePath))
        pdfDoc.pipe(res)


        pdfDoc.fontSize(18).text('Invoice', {
            underline: true,
        });
        pdfDoc.fontSize(10).text('------------------------------------------------');

        let totalPrice = 0;
        order.products.forEach((p)=>{
            totalPrice += p.productData.price * p.quantity
            pdfDoc.text(`$Item: {p.productData.title} - ID: ${p.productData._id.toString()}`);
            pdfDoc.text(`price: $${p.productData.price} - Qty: ${p.quantity}`);
            pdfDoc.text(`$${p.productData.price * p.quantity}`);
            pdfDoc.text(` `);

        });
        pdfDoc.text('------------------------------------------------');
        pdfDoc.text(`Total: $${totalPrice}`);
        pdfDoc.text('------------------------------------------------');

        pdfDoc.end();




    } catch (err) {
        console.info('! shopController getInvoice!');
        console.error(err);

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
    }
}