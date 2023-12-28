// corsMiddleware.js

function corsMiddleware(req, res, next) {
    // Define the allowed origins here (replace with your actual origins)
    const allowedOrigins = ['*', 'http://localhost:4000', 'http://example.com', 'http://localhost:3000' , 'http://localhost:3001'];
  
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins.includes("*") ? "*" : origin);
      }
  
  
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Expose-Headers', ''); // Add headers to expose if needed

  
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      res.status(204).end(); // Respond with 204 No Content for preflight requests
    } else {
      next(); // Continue processing other middleware and routes
    }
  }
  
  module.exports = corsMiddleware;
  