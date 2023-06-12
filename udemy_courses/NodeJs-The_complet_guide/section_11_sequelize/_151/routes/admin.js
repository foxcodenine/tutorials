const express = require('express');
const path = require('path');
const { title } = require('process');

const router = express.Router();

const adminController = require('../controllers/adminController');


// ------------------------------------

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// ------------------------------------

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// ------------------------------------

// /admin/edit-product => Get
router.get('/edit-product/:productId', adminController.getEditProduct);

// ------------------------------------

// /admin/edit-product => Post
router.post('/edit-product', adminController.postEditProduct);

// ------------------------------------s

// /admin/products => GET
router.get('/products', adminController.getProducts);
// ------------------------------------

// /admin/products => GET
router.post('/delete', adminController.postDeleteProduct);
// ------------------------------------


module.exports = {
    router,    
};