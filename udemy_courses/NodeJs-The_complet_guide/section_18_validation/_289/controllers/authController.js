const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

const transport = require('../util/emailTransporter.js');

const crypto = require('crypto');

const { validationResult } = require('express-validator');

// ---------------------------------------------------------------------

exports.getLogin = async function (req, res, next) {


    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        errorMessage: req.flash('error'),    
        oldInput: {},
        validationErrors: [],    
    });
}

exports.postLogin = async function (req, res, next) {
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; Max-Age=10; HttpOnly');

    const email = req.body.email;
    const password = req.body.password;

    // -------------------------------------------------
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
   
        return res.status(422).render('auth/login', {
            pageTitle: 'Login',
            path: '/login',
            isAuthenticated: false,
            errorMessage: errors.array()[0].msg, 
            oldInput: { email, password },
            validationErrors: errors.array(),
        });
    } 

    // -------------------------------------------------

    const user = (await User.findOne({email: email}));

    req.session.isLoggedIn = true;

    req.session.user = user;

    await req.session.save( (err) => {
        if (err) console.log(`! postLogin !`);
        res.redirect('/');
    });
}

// ---------------------------------------------------------------------

exports.postLogout = async function (req, res, next) {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect('/');
    })
}

// ---------------------------------------------------------------------

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false,
        errorMessage: req.flash('error'), 
        oldInput: {},
        validationErrors: []
    });
};

 exports.postSignup = async (req, res, next) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;

        // --------------------------------------------

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.status(422).render('auth/signup', {
                path: '/signup',
                pageTitle: 'Signup',
                isAuthenticated: false,
                errorMessage: errors.array()[0].msg, 
                oldInput: { email, password, confirmPassword },
                validationErrors: errors.array(),
            });
        } 

        // --------------------------------------------


        const hash = await bcrypt.hash(password, 12);

        const newUser = new User({
            email: email, 
            password: hash, 
            cart: { items: [] },
        });

        await newUser.save();

        // --------------------------------------------

        transport.sendMail({
            to: email,
            from: 'chris12aug@gmail.com',
            subject: 'Signup succeeded!',
            html: '<h2>You successfully signed up!</h2>'
        });

        return res.redirect('/login');
    } catch (error) {
        console.error('! authController.postSignup !')
        console.error(error)
    }
};

// ---------------------------------------------------------------------

exports.getReset = async function (req, res, next) {
    res.render('auth/reset', {
        path: '/reset',
        pageTitle: 'Reset Password',
        errorMessage: req.flash('error'), 
    });
}

exports.postReset = async function (req, res, next) {
    try {
        const buffer = crypto.randomBytes(32);

        const token = buffer.toString('hex');

        const email = req.body.email;

        const user = await User.findOne({ email });

        // ----------------------

        if (!user) {
            req.flash('error', 'No account found with that email!');
            return res.redirect('/reset');
        }

        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600 * 1000;
        await user.save();

        // ----------------------

        let markup =  `<p>You have requested a reset</p>`;
            markup += `<p>Click this <a href="http://localhost:3000/reset/${token}">link</a> `;
            markup += `to set a new reset</p>`;

        await transport.sendMail({
            to: email,
            from: 'chris12aug@gmail.com',
            subject: 'Reset!',
            html: markup
        });



        return res.redirect('/reset');

    } catch (error) {
        console.info(`! authController.postReset !`);
    }
}

exports.getNewPassword = async (req, res, next) => {

    const token = req.params.token;
    const user = await User.findOne({resetToken: token, resetTokenExpiration: {$gt: Date.now()} });
    
    if (!user) {
        req.flash('error', 'The Link You Followed Has Expired or is Invalid');
        return res.redirect('/login') 
    }

    res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: req.flash('error'), 
        userId: user._id.toString(),
        passwordToken: token,
    });
}

exports.postNewPassword = async (req, res, next) => {

    const password = req.body.password;
    const userId = req.body.userId;
    const token = req.body.passwordToken;

    const user = await User.findOne({_id: userId, resetToken: token, resetTokenExpiration: {$gt: Date.now()}  });

    if (!user) {
        req.flash('error', 'The Link You Followed Has Expired or is Invalid');
        return res.redirect('/login') 
    }

    const hash = await bcrypt.hash(password, 12);
    user.password = hash;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined; 


    await user.save();

    return res.redirect('/login');
}