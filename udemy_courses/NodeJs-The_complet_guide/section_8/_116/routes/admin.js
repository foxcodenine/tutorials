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

// /admin/products => GET
router.get('/products', adminController.getProduct);

// ------------------------------------

module.exports = {
    router,    
};