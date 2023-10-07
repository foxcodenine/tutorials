const express = require('express');
const app = express();
const path = require('path');

// Serve the static HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up CORS middleware (replace with your own CORS middleware)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Expose-Headers', '');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// Serve static files from the 'public' folder
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`-> CORS server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
