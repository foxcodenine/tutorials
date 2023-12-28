const express = require("express");

const isAuthMiddleware = require('../middleware/isAuthMiddleware.js');

// ---------------------------------------------------------------------

const router = express.Router();

const userController = require("../controllers/userController.js");


router.get('/status/:userId', isAuthMiddleware, userController.getStatus);
router.put('/status/:userId', isAuthMiddleware, userController.updateStatus);


// ---------------------------------------------------------------------

module.exports = router;