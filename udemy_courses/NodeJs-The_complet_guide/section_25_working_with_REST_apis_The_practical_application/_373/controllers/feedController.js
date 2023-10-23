const { validationResult } = require("express-validator")
const fs = require("fs");
const path = require("path");

const Post = require('../models/Post.js');
const User = require('../models/User.js');
// ---------------------------------------------------------------------

exports.getPosts = async (req, res, next) => {

    try {
        const currentPage = req.query.page || 1;
        const perPage = 2;    
        const totalItems = await Post.find().countDocuments();

        const allPosts = await Post.find().skip((currentPage - 1) * perPage).populate("creator").limit(perPage);
        res.status(200).json({
            message: "Fetching posts successfully",
            posts: allPosts,
            totalItems, totalItems
        });
    } catch (err) {
        console.info('! feedController.getPosts !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }

};

// ---------------------------------------------------------------------

exports.createPost = async (req, res, next) => {
    const errors = validationResult(req);

   
    if (!errors.isEmpty()) {
        console.info('! feedController.createPost !');
        const error = new Error("Validation faild, entered data is incorrect.")
        error.statusCode = 422;
        throw error;
    }

       
    if (!req.file) {
        const error = new Error('No image provided')
        error.statusCode = 422;
        throw error;
    }

    let imageUrl = req.file.path;
    // Replace backslashes with forward slashes
    imageUrl = imageUrl.replace(/\\/g, '/');

    // Ensure the path starts with a forward slash
    if (!imageUrl.startsWith('/')) {
        imageUrl = '/' + imageUrl;
    }

    const title = req.body.title;
    const content = req.body.content;
        
    try {
        const newPost = new Post({
            title,
            content,
            imageUrl: imageUrl,
            creator: req.userId,
        });
    
        await newPost.save();

        const user = await User.findById(req.userId);

        user.posts.push(newPost);
        user.save();
       
        res.status(201).json({
            message: 'Post created siccessfully!',
            post: newPost,
            creator: { _id: user._id, name: user.name }
        });

    } catch (err) {
        console.info('! feedController.createPost !');
        err.statusCode = 500;
        throw err;       
  
    }

}

// ---------------------------------------------------------------------

exports.getPost = async (req, res, next) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId);
        if (!post) {
            const error = new Error('Could not find post');
            error.status = 404;
            throw error;
        }
        res.status(200).json({message: "Post fetched", post: post})
    }
    catch (err) {
        console.info('! feedController.getPost !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }
}

// ---------------------------------------------------------------------

exports.updatePost = async (req, res, next) => {

    const postId = req.params.postId;

    // -- Check for validation errors-----------------------------------

    const errors = validationResult(req); 

    if (!errors.isEmpty()) {
        console.info('! feedController.updatePost !');
        const error = new Error("Validation faild, entered data is incorrect.")
        error.statusCode = 422;
        throw error;
    }

    // -- Extract title content and imageUrl from the request body -----

    const { title, content } = req.body;
    let imageUrl = req.body.image;

    // -- Get the image URL from the request body

    if (req.file) { imageUrl = req.file.path; }    
    
    try {      
        // -- Find the post by postId  
        const post = await Post.findById(postId);


        if (post.creator.toString() !== req.userId) {
            const error = new Error('not authorized');
            error.statusCode = 403;
            throw error;
        }

        if (!post) {
            const error = new Error("Could not find post.")
            error.statusCode = 404; // Use 404 for resource not found
            throw error;
            
        }

        // -- Update Post fields ----------------------------------------

        if (imageUrl === 'undefined') {
            // -- If imageUrl is 'undefined', revert to the original imageUrl
            imageUrl = post.imageUrl;
        } else {
            // -- If imageUrl has changed, clear the previous image
            clearImage(post.imageUrl);
        }

        post.title = title;
        post.content = content;
        post.imageUrl = imageUrl;

        // -- Save the updated post
        await post.save();

        // -- Send a success response with the updated post
        res.status(200).json({message: "Post updated!", post })
    }
    catch (err) {
        console.info('! feedController.updatePost !');
        err.statusCode = err.statusCode ?? 500;
        next(err); 
    }
}

// -- Function to clear an image
const clearImage = async filePath => {    
    try {     
        
        filePath = path.join(__dirname, '..', filePath);
        fs.unlink(filePath, err => {
            if (err) {
                    console.error('Error occurred while deleting the file:', err);
                } else {            
                console.log('File deleted successfully');
            }
        });
    }
    catch (err) {
        console.info('! feedController.clearImage !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }
}


// ---------------------------------------------------------------------

exports.deletePost = async (req, res, next) => {

    const postId = req.params.postId;

    try {
        // -- Find the post by postId
        const post = await Post.findById(postId);

        if (!post) {
            // -- Use 404 for resource not found
            const error = new Error('Could not find post.');
            error.statusCode = 404;
            // -- Throw the error to be handled by the error handling middleware
            throw error;
        }

        // -- Check logged user

        if (post.creator.toString() !== req.userId) {
            const error = new Error('not authorized');
            error.statusCode = 403;
            throw error;
        }

        const user = await User.findById(req.userId);
        user.posts.pull(postId);
        await user.save();

        // -- Clear the associated image of the post
        clearImage(post.imageUrl);

        // -- Delete the post by postId
        await Post.findByIdAndDelete(postId);

        // -- Send a success response after deleting the post
        res.status(200).json({ message: 'Deleted post.' });

    } catch (err) {
        console.info('! feedController.deletePost !');
        err.statusCode = err.statusCode ?? 500;

        next(err);
    }
}

// ---------------------------------------------------------------------
