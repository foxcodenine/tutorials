// const http =require('http');
const express =require('express');

// ---------------------------------------------------------------------

const app = express();

app.use('/',(req, res, next) => {
    console.log('this always runs');
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log('product');
    res.send('<h3>Product</h3>');    
});

app.use('/',(req, res, next) => {
    console.log('root');
    // res.setHeader("Content-Type", "application/json");
    res.send('<h3>Hello from express!</h3>');
});


// ---------------------------------------------------------------------

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)