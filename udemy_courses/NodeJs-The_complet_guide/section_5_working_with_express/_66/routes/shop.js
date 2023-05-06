const express = require('express');

const router = express.Router();


router.get('/',(req, res, next) => {
    console.log('Hello from express!');
    // res.setHeader("Content-Type", "application/json");
    res.send('<h3>Hello from express!</h3>');
});

module.exports = router;