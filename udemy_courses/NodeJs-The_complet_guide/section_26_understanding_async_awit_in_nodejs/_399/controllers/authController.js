const User = require('../models/User.js');
const { validationResult } = require("express-validator");

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const _env = require('../config/env.js');

// ---------------------------------------------------------------------

exports.signup = async (req, res, next) => {
    
    try {
        const errors = validationResult(req);

   
        if (!errors.isEmpty()) {
            const error = new Error("Validation faild, entered data is incorrect.")
            error.statusCode = 422;
            error.data = errors.array();
            throw error;
        }
    
        const {email, password, name} = req.body;    
        const hashedPw = await bcrypt.hash(password, 12);

        const user = new User({
            email, 
            password: hashedPw,
            name,
        })

        await user.save();

        res.status(201).json({message: "User created!", userId: user._id});

    }
    catch (err) {
        console.info('! authController.signup !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }

};

// ---------------------------------------------------------------------

exports.login = async (req, res, next) => {
    
    try {
        const { email, password } = req.body;
    
        const loadedUser = await User.findOne({email: email});

        if (!loadedUser) {
            const error = new Error("A user with this emailcould not be found.")
            error.statusCode = 401;
            throw error
        }

        const isAuth = await bcrypt.compare(password, loadedUser.password);

        if (!isAuth) {
            const error = new Error("User not authenticated.")
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                email: loadedUser.email,
                userId: loadedUser._id.toString(),
            }, 
            _env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.status(200).json({token: token, userId: loadedUser._id.toString()});


    }
    catch (err) {
        console.info('! authController.login !');
        err.statusCode = err.statusCode ?? 500;
        next(err); // Pass the error to the global error handler
    }
}