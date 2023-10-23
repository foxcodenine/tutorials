const express = require("express");
const { body } = require("express-validator")

const isAuthMiddleware = require('../middleware/isAuthMiddleware.js');

// ---------------------------------------------------------------------

const router = express.Router();

const feedController = require("../controllers/feedController.js");

// ---------------------------------------------------------------------

router.get('/posts', isAuthMiddleware, feedController.getPosts);



router.post('/posts',  isAuthMiddleware, [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5}),
], feedController.createPost);

// ---------------------------------------------------------------------

router.get('/post/:postId',  isAuthMiddleware, feedController.getPost);

// ---------------------------------------------------------------------

router.put('/post/:postId',  isAuthMiddleware, [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5}),
], feedController.updatePost);

// ---------------------------------------------------------------------

router.delete('/post/:postId',  isAuthMiddleware, feedController.deletePost);

// ---------------------------------------------------------------------

module.exports = router;