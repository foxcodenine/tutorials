const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _env = require('../config/env.js');

const Post = require('../models/Post.js');

const validator = require('validator');

// ---------------------------------------------------------------------

module.exports = {
    // hello() {
    //     console.log (123)
    //     return {
    //         text: 'Hello World',
    //         views: 1235,
    //     };
    // },

    createUser: async function (args, req) {

        const errors = [];
        if (!validator.isEmail(userInput.email)) {
            errors.push({ message: 'E-Mail is invalid.' });
        }
        if (
            validator.isEmpty(userInput.password) ||
            !validator.isLength(userInput.password, { min: 5 })
        ) {
            errors.push({ message: 'Password too short!' });
        }
        if (errors.length > 0) {
            const error = new Error('Invalid input.');
            error.data = errors;
            error.code = 422;
            throw error;
        }
        // ---------------------------------------

        const email = args.userInput.email;
        const password = args.userInput.password;

        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
            const error = new Error('User exists already!');
            error.data = error;
            error.code = 422;
            throw error;
        }

        const hashedPw = await bcrypt.hash(password, 12);

        const user = new User({
            email,
            password: hashedPw,
            name: args.userInput.name,
        })

        const createdUser = await user.save();

        return { ...createdUser._doc, _id: createdUser._id.toString() };

    },

    // -----------------------------------------------------------------

    async login({ email, password }) {
        const user = await User.findOne({ email, email });
        if (!user) {
            const error = new Error('User not found.');
            error.code = 401;
            throw error;
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            const error = new Error('Password is incorrect.');
            error.code = 401;
            throw error;
        }

        const token = jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
            },
            _env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        );
        return { token: token, userId: user._id.toString() }
    },

    // -----------------------------------------------------------------

    async createPost(parent, args, context, info) {

        console.log({args, req, context})
        console.log('>>>',context.req)

        if (!req.isAuth) {
            const error = new Error('Not authenticated');
            error.code = 401;
            throw error;
        }

        try {
            // -------------------------------------------

            const errors = [];
            if (
                validator.isEmpty(args.postInput.title) ||
                !validator.isLength(args.postInput.title, { min: 5 })
            ) {
                errors.push({ message: 'Title is invalid.' });
            }
            if (
                validator.isEmpty(postInput.content) ||
                !validator.isLength(postInput.content, { min: 5 })
            ) {
                errors.push({ message: 'Content is invalid.' });
            }
            if (errors.length > 0) {
                const error = new Error('Invalid input.');
                error.data = errors;
                error.code = 422;
                throw error;
            }


            // -------------------------------------------

            const user = await User.findById(req.userId);
            if (!user) {
                const error = new Error('Invalid user.');
                error.code = 401;
                throw error;
            }
            // -------------------------------------------


            const newPost = new Post({
                title: postInput.title,
                content: postInput.title,
                imageUrl: postInput.imageUrl,
                creator: user
            });

            const createdPost = await newPost.save();
            user.posts.push(createdPost);
            await user.save();
            return {
              ...createdPost._doc,
              _id: createdPost._id.toString(),
              createdAt: createdPost.createdAt.toISOString(),
              updatedAt: createdPost.updatedAt.toISOString()
            };

        } catch (err) {
            console.info(`! resolvers.createPost !`);
            console.error('err')
        }
    }
};
