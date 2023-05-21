const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path.js');

const { products } = require('./admin.js');

// ---------------------------------------------------------------------

router.get('/',(req, res, next) => {

    // res.setHeader("Content-Type", "application/json");
    // res.send('<h3>Hello from express!</h3>');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    console.log('shop.js ->', products);
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/shop' });
});

module.exports = router;