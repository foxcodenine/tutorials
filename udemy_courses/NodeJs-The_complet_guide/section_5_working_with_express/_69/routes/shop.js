const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path.js');

// ---------------------------------------------------------------------

router.get('/',(req, res, next) => {
    // console.log('Hello from express!');
    // res.setHeader("Content-Type", "application/json");
    // res.send('<h3>Hello from express!</h3>');

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;