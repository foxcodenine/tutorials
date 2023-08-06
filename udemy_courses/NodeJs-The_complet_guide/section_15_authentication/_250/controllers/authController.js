const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

// ---------------------------------------------------------------------

exports.getLogin = async function (req, res, next) {

    // const cookies = {}
    // req.get('Cookie')?.split(';').forEach((cookie) => {
    //     let [key, value] = cookie.split('=');
    //     cookies[key.trim()] = value.trim()  
    // })

    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        errorMessage: req.flash('error'),        
    });
}

exports.postLogin = async function (req, res, next) {
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; Max-Age=10; HttpOnly');

    const email = req.body.email;
    const password = req.body.password;

    // -------------------------------------------------

    const user = (await User.findOne({email: email}));

    if (!user) { 
        req.flash('error', 'Invalid email or password');
        return res.redirect('/login')
    };

    // -------------------------------------------------

    let doMatch = await bcrypt.compare(password, user.password);
    
    if (!doMatch) { 
        req.flash('error', 'Invalid email or password');
        return res.redirect('/login') 
    };

    // -------------------------------------------------

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
    });
};

 exports.postSignup = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    const user = await User.findOne({email: email});
    const hash = await bcrypt.hash(password, 12);

    if ( user ) {
        req.flash('error', 'Email is Already Registered!');

        return res.redirect('/signup');
    }

    const newUser = new User({
        email: email, 
        password: hash, 
        cart: { items: [] },
    });

    await newUser.save();

    return res.redirect('/login');
};

// ---------------------------------------------------------------------