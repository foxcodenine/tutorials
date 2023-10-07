exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'First Post', content: 'This is the first post!'}]
    });

};

exports.createPost = (req, res, next) => {

    const title = req.body.title;
    const content = req.body.content;

    // Log the request body to check if it's received correctly
    console.log('Request Body:', req.body);

    // Create post in db

    res.status(201).json({
        message: 'Post created siccessfully!',
        post: {
            id: new Date().toISOString(),
            title,
            content
        }
    })

}