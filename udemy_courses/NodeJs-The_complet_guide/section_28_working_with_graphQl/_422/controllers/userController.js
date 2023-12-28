const User = require('../models/User.js');


exports.getStatus = async (req, res, next) => {

    try {
        const userId = req.params.userId
        
        const user = await User.findById(userId);
       
        if(!user) {
            const error = new Error('user not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({ status: user.status});


    } catch (err) {
        console.info('! userController.getStatus !');
        err.statusCode = err.statusCode ?? 500;

        next(err);
    }
    

}

exports.updateStatus = async (req, res, next) => {

    try {
        const userId = req.params.userId
        
        const user = await User.findById(userId);
       
        if(!user) {
            const error = new Error('user not found');
            error.statusCode = 404;
            throw error;
        }

        const status = req.body.status;

        if (!status && status.trim() ==='') {
            const error = new Error('no status');
            error.statusCode = 404;
            throw error;
        }  
        
        user.status = status;
        await user.save();

        res.status(200).json({ status: user.status});


    } catch (err) {
        console.info('! userController.getStatus !');
        err.statusCode = err.statusCode ?? 500;

        next(err);
    }
    

}