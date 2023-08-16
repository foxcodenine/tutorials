const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

const isAuthMiddleware = require('../middleware/isAuthMiddleware');

const { check, body } = require('express-validator');


// ------------------------------------

// /admin/add-product => GET
router.get('/add-product', isAuthMiddleware, adminController.getAddProduct);

// ------------------------------------

// /admin/add-product => POST
router.post(
    '/add-product', 
    isAuthMiddleware, 
    body('title', 'The title name must contain alpha characters only and have a minimun length of 3 characters')
        .trim()
        .isLength({min: 3})
        .isAlphanumeric(),
    body('imageUrl', 'Image URL  must be a valid url address')   
        .trim()
        .isURL(),
    body('price', 'The price must be a number')   
        .trim()
        .isNumeric(),
    body('description', 'The description must have a minimun length of 5 characters')
        .trim()   
        .isLength({min: 5}),
    adminController.postAddProduct
);

// ------------------------------------

// /admin/edit-product => Get
router.get('/edit-product/:productId', isAuthMiddleware, adminController.getEditProduct);

// ------------------------------------

// /admin/edit-product => Post
router.post(
    '/edit-product', 
    isAuthMiddleware,
    body('title', 'The title name must contain alpha characters only and have a minimun length of 3 characters')
        .trim()
        .isLength({min: 3})
        .isAlphanumeric(),
    body('imageUrl', 'Image URL  must be a valid url address')   
        .trim()
        .isURL(),
    body('price', 'The price must be a number')   
        .trim()
        .isNumeric(),
    body('description', 'The description must have a minimun length of 5 characters')   
        .trim()
        .isLength({min: 5}),
    adminController.postEditProduct
);

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