const { validationResult } = require("express-validator")
// ---------------------------------------------------------------------

exports.getPosts = (req, res, next) => {

    res.status(200).json({
        posts: [
            {
                _id: '123',
                title: 'First Post', 
                content: 'This is the first post!',
                imageUrl: 'images/duck.jpg',
                creator: {
                    name: 'Jack'
                },
                createdAt: new Date
            }
        ]
    });

};

// ---------------------------------------------------------------------

exports.createPost = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: "Validation faild, entered data is incorrect.",
            errors: errors.array()
        })
    }

    const title = req.body.title;
    const content = req.body.content;

    // Log the request body to check if it's received correctly
    console.log('Request Body:', req.body);

    // Create post in db

    res.status(201).json({
        message: 'Post created siccessfully!',
        post: {
            _id: new Date().toISOString(),
            title,
            content,
            creator: {
                name: 'Jack'
            },
            createdAt: new Date()
        }
    })
}