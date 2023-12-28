const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const graphqlHttp = require('express-graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
const auth = require('./middleware/auth');
const _env = require('./config/env.js');

const fs = require('fs');
const {clearImage} = require('./util/file.js');

// Create Express App --------------------------------------------------

const app = express();

// Multer Configuration for File Uploads --------------------------------

const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg' ||
		file.mimetype === 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

// Middleware Setup ----------------------------------------------------

app.use(bodyParser.json()); // Parse JSON requests
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')); // File upload middleware
app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static images


// CORS Headers and Options --------------------------------------------

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}
	next();
});

// Authentication Middleware -------------------------------------------

app.use(auth);

//  -- Image upload route ----------------------------------------------

app.put("/post-image", (req, res, next)=>{
	if (!req.isAuth) {
		throw new Error('Not authenticated to load image!')
	}
	if (!req.file) {
		return res.status(200).json({message: 'No file provided'})
	}

	if (req.body.oldPath) {
		clearImage(req.body.oldPath);
	}
	return res
		.status(201)
		.json({message: 'File store', filePath: req.file.path});

});

// GraphQL Setup -------------------------------------------------------

app.use(
	'/graphql',
	graphqlHttp({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
		formatError(err) {
			if (!err.originalError) {
				return err;
			}
			const data = err.originalError.data;
			const message = err.message || 'An error occurred.';
			const code = err.originalError.code || 500;
			return { message: message, status: code, data: data };
		},
	})
);

// Error Handling Middleware -------------------------------------------

app.use(async (error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

// Connect to MongoDB and Start Server ---------------------------------

(async ()=>{
	try {
		await mongoose.connect(_env.MONGO_CONNECTION);
		app.listen(_env.PORT, () => {
		  console.log(`Server is running on port ${_env.PORT}`);
		});
	  } catch (err) {
		console.log(err);
	  }
})()

// ---------------------------------------------------------------------


