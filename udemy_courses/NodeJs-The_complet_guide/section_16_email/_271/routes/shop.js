const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shopController');

const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// ---------------------------------------------------------------------

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuthMiddleware, shopController.getCart);

router.post('/cart', isAuthMiddleware, shopController.postCart);

// router.get('/checkout', shopController.getCheckout);

router.get('/orders', isAuthMiddleware, shopController.getOrders);

router.post('/cart-delete-item', isAuthMiddleware, shopController.postCartDeleteProduct);

router.post('/create-order', isAuthMiddleware, shopController.postOrders);


module.exports = router;