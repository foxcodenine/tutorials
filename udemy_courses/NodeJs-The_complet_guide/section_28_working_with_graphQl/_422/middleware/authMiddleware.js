const jwt = require("jsonwebtoken");
const _env = require("../config/env.js");

// ---------------------------------------------------------------------

module.exports = (req, res, next) => {
    

    const authHeader = req.get('Authorization')

    if (!authHeader) {
        console.log({req, authHeader})
        // const error = new Error('Not authenticated');
        // error.statusCode = 401;
        // throw error;
        console.log(11)
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]

    try {
        decodedToken = jwt.verify(token, _env.JWT_SECRET_KEY)

    } catch (err) {
        req.isAuth = false;
        console.log(22)
        return next();
    }

    if (!decodedToken) {
        req.isAuth = false;
        console.log(33)
        return next();
    }

    req.userId = decodedToken.userId;
    req.isAuth = true;
    console.log(44)
    next();
};


