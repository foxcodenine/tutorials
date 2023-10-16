const { validationResult } = require("express-validator")
const Post = require('../models/Post.js');
const fs = require("fs");
const path = require("path");
// ---------------------------------------------------------------------

exports.getPosts = async (req, res, next) => {

    try {
        const allPosts = await Post.find();
        res.status(200).json({
            message: "Fetching posts successfully",
            posts: allPosts
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
        // return res.status(422).json({
            //     message: "Validation faild, entered data is incorrect.",
            //     errors: errors.array()
            // })
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
            creator: { name: 'Jack' },
        });
    
        await newPost.save();
    
        // Log the request body to check if it's received correctly
        console.log('Request Body:', req.body);
    
        // Create post in db
    
        res.status(201).json({
            message: 'Post created siccessfully!',
            post: newPost,
        })
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

    const errors = validationResult(req);   
    if (!errors.isEmpty()) {
        console.info('! feedController.updatePost !');
        const error = new Error("Validation faild, entered data is incorrect.")
        error.statusCode = 422;
        throw error;
    }

    const title = req.body.title;
    const content = req.body.content;
    let imageUrl = req.body.image;

    if (req.file) {
        imageUrl = req.file.path;
    }



    
    
    try {        
        const post = await Post.findById(postId);

        if (!post) {
            const error = new Error("Could not find post.")
            error.status = 422;
            throw error;
        }

        console.log('>|', imageUrl)

        if (imageUrl === 'undefined') {
            imageUrl = post.imageUrl
        } else {
            clearImage(post.imageUrl);
        }
        post.title = title;
        post.content = content;
        post.imageUrl = imageUrl;
        await post.save();

        res.status(200).json({message: "Post updated!", post })
    }
    catch (err) {
        console.info('! feedController.updatePost !');
        err.statusCode = err.statusCode ?? 500;
        throw err;  
    }
}

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