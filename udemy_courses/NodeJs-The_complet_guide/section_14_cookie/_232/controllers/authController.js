
const User = require('../models/User.js');

exports.getLogin = async function (req, res, next) {

    // const cookies = {}
    // req.get('Cookie')?.split(';').forEach((cookie) => {
    //     let [key, value] = cookie.split('=');
    //     cookies[key.trim()] = value.trim()  
    // })

    res.render('auth/login', {
        pageTitle: 'Login', 
        path: '/login', 
        isAuthenticated: req?.session?.isLoggedIn,
     });
}

exports.postLogin = async function (req, res, next) {    
    // res.setHeader('Set-Cookie', 'isLoggedIn=true; Max-Age=10; HttpOnly');
    const user = await User.findById('64aec671e6b1802d6726312b');
    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save((err) => {
        if (err) console.log(`! postLogin !`);
        res.redirect('/');
    });
}

exports.postLogout = async function (req, res, next) {
    req.session.destroy((err)=>{
        if(err) console.log(err);
        res.redirect('/');
    })
}