const express = require("express");

const feedRoutes = require("./routes/feedRoute.js");
const corsMiddleware = require('./middleware/corsMiddleware.js');

const mongoose = require('mongoose');

const _env = require('./config/env.js');

// ---------------------------------------------------------------------

// Create an Express application
const app = express();


// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Middleware to parse JSON data
app.use(express.json()); 

// Middleware to enable CORS
app.use(corsMiddleware); 

// Define your routes
app.use("/feed", feedRoutes); 

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
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
