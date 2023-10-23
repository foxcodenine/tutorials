const jwt = require("jsonwebtoken");
const _env = require("../config/env.js");

// ---------------------------------------------------------------------

module.exports = (req, res, next) => {

    const authHeader = req.get('Authorization')

    if (!authHeader) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1]

    try {
        decodedToken = jwt.verify(token, _env.JWT_SECRET_KEY)

    } catch (err) {
        err.statusCode = 500;
        throw err;
    }

    if (!decodedToken) {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }

    req.userId = decodedToken.userId;
    next();
};