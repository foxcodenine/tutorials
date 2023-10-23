const express = require("express");

const feedRoutes = require("./routes/feedRoute.js");

const authRoutes = require("./routes/authRoute.js");

const userRoutes = require("./routes/userRoute.js");

const corsMiddleware = require('./middleware/corsMiddleware.js');

const mongoose = require('mongoose');

const _env = require('./config/env.js');

const path = require("path");

const multer = require("multer");

const { v4: uuidv4 } = require('uuid');

// ---------------------------------------------------------------------

// Create an Express application
const app = express();

const fileStorage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'images');
	},
	filename:function (req, file, cb) {
		cb(null, uuidv4() + '.jpg')
	}
})

// -- Define the file filter function for multer
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    cb(null, allowedMimeTypes.includes(file.mimetype));
};


// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON data
app.use(express.json());

// Set up the usage of multer middleware with the specified storage and file filter
// and handle a single file upload with the name 'image'

app.use(multer({storage: fileStorage, fileFilter: fileFilter }).single('image'));

// Serve static images from the 'images' directory
app.use("/images", express.static(path.join(__dirname, "images")));

// Middleware to enable CORS
app.use(corsMiddleware);

// Define your routes
app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

// Error Handling Middleware

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    const data = error.data || null; // Or provide an appropriate default value for data

    res.status(status).json({
        message: message,
        data: data,
    });
});
	// ---------------------------------------------------------------------

	// Connect to MongoDB
	(async () => {
		try {
			await mongoose.connect(_env.MONGO_CONNECTION);

			// Start the server
			app.listen(3000, "0.0.0.0", () => {
				console.log('-> Express server is listening on port 3000');
				console.log('http://localhost:3000');
			});
		} catch (err) {
			console.error('Error connecting to MongoDB:', err);
		}
	})();
