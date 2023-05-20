const express = require('express');
const path = require('path');
const { title } = require('process');

const router = express.Router();

// ------------------------------------

const products = [];

// ------------------------------------

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
 
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>'); 
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));

    res.render('add-product', {
        pageTitle: 'Products', 
        path: '/admin/add-product', 
        productCSS: true, 
        activeAddProduct: true
    });
});

// ------------------------------------

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    
    console.log('->',req.body);
    products.push({ title: req.body.title });
    res.redirect('/');

});

// ------------------------------------

module.exports = {
    router,
    products
};