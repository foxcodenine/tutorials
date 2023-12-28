const express = require("express");

// const feedRoutes = require("./routes/feedRoute.js");

// const authRoutes = require("./routes/authRoute.js");

// const userRoutes = require("./routes/userRoute.js");

const corsMiddleware = require('./middleware/corsMiddleware.js');

const mongoose = require('mongoose');

const _env = require('./config/env.js');

const path = require("path");

const multer = require("multer");

const { v4: uuidv4 } = require('uuid');

const cors = require('cors');

// const { graphqlHttp } = require('express-graphql');
const {createHandler} = require("graphql-http/lib/use/express");

const graphqlSchema = require('./graphql/schema.js');
const graphqlResolver = require('./graphql/resolvers.js');

const expressPlayground = require('graphql-playground-middleware-express').default;

const auth = require('./middleware/authMiddleware.js');


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
/*  'No used in graphQl chapter on'
app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
*/

app.use(auth);

app.all(
	'/graphql',
	createHandler({
		schema: graphqlSchema,
		rootValue: graphqlResolver,
		graphiql: true,
		context: ({ req }) => ({
			req, // Pass the req object to the context
		}),
		formatError(err) {
			if (!err.originalError) {
				return err;
			}
			else {
				const data = err.originalError.data;
				const message = err.message || 'An error occurred.';
				const code = err.originalError.code || 500;
				return {message, status: code, data};
			}
		}
	})
);

  app.get('/playground', expressPlayground({ endpoint: '/graphql' }));
  
  // Error Handling Middleware
  app.use((error, req, res, next) => {
	  console.log(error);
	  const status = error.statusCode || 500;
	  const message = error.message || 'Internal Server Error';
	  const data = error.data || null;
  
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
			const httpServer = app.listen(3000, "0.0.0.0", () => {
				console.log('-> Express server is listening on port 3000');
				console.log('http://localhost:3000');
			});

			/* 'No used in graphQl chapter on'

			const io = require('./socket.js').init(httpServer);

			io.on('connection', socket => {
				console.log('Client connected');
			});
			*/
			
		} catch (err) {
			console.error('Error connecting to MongoDB:', err);
		}
	})();
