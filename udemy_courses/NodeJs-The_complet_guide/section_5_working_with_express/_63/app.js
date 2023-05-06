// const http =require('http');
const express = require('express');
const bodyParser = require('body-parser')

// ---------------------------------------------------------------------

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// ---------------------------------------------------------------------

app.use('/',(req, res, next) => {
    console.log('this always runs');
    next();
});


// ------------------------------------

app.use('/add-product',(req, res, next) => {
    // console.log('product page');
    // res.send('<h3>Product Page</h3>');    
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');    
});

// ------------------------------------

app.post('/product', (req, res, next) => {
    console.log('->',req.body);
    res.redirect('/');

});

// ------------------------------------

app.use('/',(req, res, next) => {
    console.log('Hello from express!');
    // res.setHeader("Content-Type", "application/json");
    res.send('<h3>Hello from express!</h3>');
});


// ---------------------------------------------------------------------

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)