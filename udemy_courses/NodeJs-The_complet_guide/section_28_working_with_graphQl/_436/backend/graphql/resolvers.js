const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Post = require('../models/post');

const {clearImage} = require('../util/file');

module.exports = {

	// User Registration -----------------------------------------------

	createUser: async function ({ userInput }, req) {
		try {
			// Validate user input
			const errors = validateUserInput(userInput);
			if (errors.length > 0) {
				throwValidationError(errors);
			}

			// Check if user already exists
			const existingUser = await User.findOne({ email: userInput.email });
			if (existingUser) {
				throwUserExistsError();
			}

			// Hash the password and create a new user
			const hashedPw = await bcrypt.hash(userInput.password, 12);
			const user = new User({
				email: userInput.email,
				name: userInput.name,
				password: hashedPw,
			});
			const createdUser = await user.save();

			return { ...createdUser._doc, _id: createdUser._id.toString() };
		} catch (error) {
			throw error;
		}
	},

	// User Login ------------------------------------------------------

	login: async function ({ email, password }) {
		try {
			// Find user by email
			const user = await User.findOne({ email: email });
			if (!user) {
				throwNotFoundError('User not found.');
			}

			// Compare passwords
			const isEqual = await bcrypt.compare(password, user.password);
			if (!isEqual) {
				throwUnauthorizedError('Password is incorrect.');
			}

			// Generate and return JWT token
			const token = generateToken(user);
			return { token: token, userId: user._id.toString() };
		} catch (error) {
			throw error;
		}
	},

	// Create a new Post -----------------------------------------------

	createPost: async function ({ postInput }, req) {
		try {
			// Check if user is authenticated
			if (!req.isAuth) {
				const error = new Error('Not authenticated!');
				error.code = 401;
				throw error;
			}

			// Validate post input
			const errors = validatePostInput(postInput);
			if (errors.length > 0) {
				throwValidationError(errors);
			}

			// Find user by ID
			const user = await User.findById(req.userId);
			if (!user) {
				throwUnauthorizedError('Invalid user.');
			}

			// Create and save the new post
			const post = new Post({
				title: postInput.title,
				content: postInput.content,
				imageUrl: postInput.imageUrl,
				creator: user,
			});
			const createdPost = await post.save();

			// Update user's posts array
			user.posts.push(createdPost);
			await user.save();

			return formatPostResponse(createdPost);
		} catch (error) {
			throw error;
		}
	},

	// Get paginated list of posts -------------------------------------

	posts: async function ({ page }, req) {
		try {
			// Check if user is authenticated
			if (!req.isAuth) {
				throwUnauthorizedError('Not authenticated!');
			}

			// Set default page if not provided
			if (!page) {
				page = 1;
			}

			// Pagination settings
			const perPage = 2;

			// Get total number of posts
			const totalPosts = await Post.find().countDocuments();

			// Get paginated posts with creator details
			const posts = await Post.find()
				.sort({ createdAt: -1 })
				.skip((page - 1) * perPage)
				.limit(perPage)
				.populate('creator');

			// Format and return response
			return {
				posts: posts.map(formatPostResponse),
				totalPosts: totalPosts,
			};
		} catch (error) {
			throw error;
		}
	},

	// -----------------------------------------------------------------

	post: async function ({ id }, req) {
		if (!req.isAuth) {
			const error = new Error('Not authenticated!');
			error.code = 401;
			throw error;
		}
		const post = await Post.findById(id).populate('creator');
		if (!post) {
			const error = new Error('No post found!');
			error.code = 404;
			throw error;
		}

		return formatPostResponse(post);
	},

	// -----------------------------------------------------------------

	// Update an existing Post -----------------------------------------

	updatePost: async function ({ id, postInput }, req) {
		try {
			// Check if user is authenticated
			if (!req.isAuth) {
				const error = new Error('Not authenticated!');
				error.code = 401;
				throw error;
			}

			// Find the post by ID and populate the creator field
			const post = await Post.findById(id).populate('creator');

			// Check if the post exists
			if (!post) {
				const error = new Error('No post found!');
				error.code = 404;
				throw error;
			}

			// Check if the current user is the creator of the post
			if (post.creator._id.toString() !== req.userId.toString()) {
				const error = new Error('Not authorized!');
				error.code = 403;
				throw error;
			}

			// Validate post input
			const errors = validatePostInput(postInput);
			if (errors.length > 0) {
				throwValidationError(errors);
			}

			// Update post fields with the new data
			post.title = postInput.title;
			post.content = postInput.content;

			if (postInput.imageUrl !== 'undefined') {
				post.imageUrl = postInput.imageUrl;
			}

			// Save the updated post
			const updatedPost = await post.save();


			return formatPostResponse(updatedPost);

		} catch (error) {
			throw error;
		}
	},
	// -----------------------------------------------------------------

	// Delete Post -----------------------------------------------------

	deletePost: async function ({id}, req)  {
		try {
			// Check if user is authenticated
			if (!req.isAuth) {
				const error = new Error('Not authenticated!');
				error.code = 401;
				throw error;
			}

			const post = await Post.findById(id);

			// Check if the post exists
			if (!post) {
				const error = new Error('No post found!');
				error.code = 404;
				throw error;
			}

			// Check if the current user is the creator of the post
			if (post.creator._id.toString() !== req.userId.toString()) {
				const error = new Error('Not authorized!');
				error.code = 403;
				throw error;
			}

			// Check if the current user is the creator of the post
			if (post.creator.toString() !== req.userId.toString()) {
				const error = new Error('Not authorized!');
				error.code = 403;
				throw error;
			}
			clearImage(post.imageUrl);

			await Post.findByIdAndRemove(id);
			const user = await User.findById(req.userId);
			user.post.pull(id);
			await user.save();
			return true;

		} catch (error) {
			throw error;
		}
		
	},

	// -----------------------------------------------------------------

	user: async function(args, req) {
		if (!req.isAuth) {
		  const error = new Error('Not authenticated!');
		  error.code = 401;
		  throw error;
		}
		const user = await User.findById(req.userId);
		if (!user) {
		  const error = new Error('No user found!');
		  error.code = 404;
		  throw error;
		}
		return { ...user._doc, _id: user._id.toString() };
	  },
	  
	  updateStatus: async function({ status }, req) {
		if (!req.isAuth) {
		  const error = new Error('Not authenticated!');
		  error.code = 401;
		  throw error;
		}
		const user = await User.findById(req.userId);
		if (!user) {
		  const error = new Error('No user found!');
		  error.code = 404;
		  throw error;
		}
		user.status = status;
		await user.save();
		return { ...user._doc, _id: user._id.toString() };
	  }


};

// Helper Functions ----------------------------------------------------

function validateUserInput(userInput) {
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

	return errors;
}

function validatePostInput(postInput) {
	const errors = [];

	if (
		validator.isEmpty(postInput.title) ||
		!validator.isLength(postInput.title, { min: 5 })
	) {
		errors.push({ message: 'Title is invalid.' });
	}

	if (
		validator.isEmpty(postInput.content) ||
		!validator.isLength(postInput.content, { min: 5 })
	) {
		errors.push({ message: 'Content is invalid.' });
	}

	return errors;
}

function throwValidationError(errors) {
	const error = new Error('Invalid input.');
	error.data = errors;
	error.code = 422;
	throw error;
}

function throwUserExistsError() {
	const error = new Error('User exists already!');
	throw error;
}

function throwNotFoundError(message) {
	const error = new Error(message);
	error.code = 401;
	throw error;
}

function throwUnauthorizedError(message) {
	const error = new Error(message);
	error.code = 401;
	throw error;
}

function generateToken(user) {
	return jwt.sign(
		{
			userId: user._id.toString(),
			email: user.email,
		},
		'somesupersecretsecret',
		{ expiresIn: '1h' }
	);
}

function formatPostResponse(post) {
	return {
		...post._doc,
		_id: post._id.toString(),
		createdAt: post.createdAt.toISOString(),
		updatedAt: post.updatedAt.toISOString(),
	};
}

