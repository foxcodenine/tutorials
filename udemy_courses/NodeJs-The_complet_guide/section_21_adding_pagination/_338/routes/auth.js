const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

const { check, body } = require('express-validator');

const User = require('../models/User.js');

const bcrypt = require('bcryptjs');

// ---------------------------------------------------------------------

router.get('/login', authController.getLogin);

router.post(
    '/login', 
        body('email')
            .isEmail()
            .custom( async (value, {req})=>{
                const user = (await User.findOne({email: value}));

                if (!user) { throw new Error('Invalid email or password!'); }
                
                return true;
            }),
        body('password')
            .custom( async (value, {req})=>{
                const user = (await User.findOne({email: req.body.email}));

                const  doMatch = await bcrypt.compare(value, user.password);

                if (!doMatch) { throw new Error('Invalid email or password!!'); }

                return true;
            }),
    authController.postLogin
);

router.post('/logout', authController.postLogout);

router.get('/signup', authController.getSignup);

router.post(
    '/signup', 
    check('email')                                                                                  // <- 'check' will search for the 'email' every wher body, header, cookie, etc
        .isEmail()
        .withMessage('Please enter a valid email.')                                             // <- add a custome message for 'isEmail'
        .custom(async (value, {req} ) => {
            const user = await User.findOne({email: value});

            if (user) { throw new Error('Email is Already Registered!!'); }


            if (value === 'test@test.com') {
                throw new Error('This email address is forbidden!!');
            }
            return true;
        })
        .normalizeEmail(), 
    body(
        'password',                                                                                 // <- this will only check for the 'password' only in the 'body'
        'Enter a password with only numbers and text and minimun length of 5 characters'            // <- add a custome message all validations'
    )                
        .isLength({min: 5})
        .isAlphanumeric()
        .trim(),   
    body('confirmPassword').custom((value, {req}) => { 
        if (value === req.body.password) {
            return true;
        }
        throw new Error('Password have to match!');
     }),                   
    authController.postSignup
);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);


// ---------------------------------------------------------------------

module.exports = router;