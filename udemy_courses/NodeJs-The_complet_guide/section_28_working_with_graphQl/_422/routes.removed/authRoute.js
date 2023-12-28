const express = require("express");
const { body } = require("express-validator")

const User = require('../models/User.js');
const authController = require('../controllers/authController.js');

// ---------------------------------------------------------------------

const router = express.Router();

router.put('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .normalizeEmail()
        .custom(async (value, { req }) => {
            const user = await User.findOne({ email: value });
            if (user) {
                throw new Error('Email already exists. Please use a different email.');
            }
            return true;
        }),
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Password should be at least 5 characters long.'),
    body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name should not be empty.'),
], authController.signup);


router.post("/login", authController.login);

// ---------------------------------------------------------------------

module.exports = router;