const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

const isAuthMiddleware = require('../middleware/isAuthMiddleware');


// ------------------------------------

// /admin/add-product => GET
router.get('/add-product', isAuthMiddleware, adminController.getAddProduct);

// ------------------------------------

// /admin/add-product => POST
router.post('/add-product', isAuthMiddleware, adminController.postAddProduct);

// ------------------------------------

// /admin/edit-product => Get
router.get('/edit-product/:productId', isAuthMiddleware, adminController.getEditProduct);

// ------------------------------------

// /admin/edit-product => Post
router.post('/edit-product', isAuthMiddleware, adminController.postEditProduct);

// ------------------------------------s

// /admin/products => GET
router.get('/products', isAuthMiddleware, adminController.getProducts);
// ------------------------------------

// /admin/delete => POST
router.post('/delete', isAuthMiddleware, adminController.postDeleteProduct);
// ------------------------------------


router.get('/reset-products', isAuthMiddleware, adminController.postResetProducts);

module.exports = {
    router,    
};