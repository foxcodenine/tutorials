// Importing required modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

// ---------------------------------------------------------------------

// Importing route handlers
const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth');

// ---------------------------------------------------------------------

// Creating an Express application
const app = express();

// ---------------------------------------------------------------------

// Configuring multer for file storage
const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	}
});

// ---------------------------------------------------------------------

// Configuring file filter for multer
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

// ---------------------------------------------------------------------

// Configuring middleware for parsing requests
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
	multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

// ---------------------------------------------------------------------

// Serving static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// ---------------------------------------------------------------------

// Configuring CORS headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

// ---------------------------------------------------------------------

// Configuring routes
app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

// ---------------------------------------------------------------------

// Error handling middleware
app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});

// ---------------------------------------------------------------------

// Connecting to MongoDB and starting the server
mongoose
	.connect(
		'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/messages?retryWrites=true'
	)
	.then(result => {
		app.listen(8080);
	})
	.catch(err => console.log(err));

// ---------------------------------------------------------------------

