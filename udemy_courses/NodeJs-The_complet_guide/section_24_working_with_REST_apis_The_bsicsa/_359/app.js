const express = require("express");

const feedRoutes = require("./routes/feedRoute.js");
const corsMiddleware = require('./middleware/corsMiddleware.js');

// ---------------------------------------------------------------------

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

// Start the server
app.listen(3000, "0.0.0.0", ()=>{
    console.log('-> Express listen on port 3000');
    console.log('http://localhost:3000')
});