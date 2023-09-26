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

router.get('/order/:orderId', isAuthMiddleware, shopController.getInvoice);


router.get('/checkout', isAuthMiddleware, shopController.getCheckout);

router.get('/checkout/success', isAuthMiddleware, shopController.getCheckoutSuccess);

router.get('/checkout/cancel', isAuthMiddleware, shopController.getCheckout);


module.exports = router;