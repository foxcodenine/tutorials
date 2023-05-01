// const http =require('http');
const express =require('express');

// ---------------------------------------------------------------------

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('in another middleware!');
    // res.setHeader("Content-Type", "application/json");
    res.send('<h3>Hello from express!</h3>');
});


// ---------------------------------------------------------------------

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)