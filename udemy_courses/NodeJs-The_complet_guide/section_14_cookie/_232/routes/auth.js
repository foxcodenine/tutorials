const express = require('express');

const router = express.Router();

const adminController = require('../controllers/authController');

// ---------------------------------------------------------------------

router.get('/login', adminController.getLogin);

router.post('/login', adminController.postLogin);

router.post('/logout', adminController.postLogout);


// ---------------------------------------------------------------------

module.exports = router;