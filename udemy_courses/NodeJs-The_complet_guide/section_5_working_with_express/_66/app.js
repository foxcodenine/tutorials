// const http =require('http');
const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

// ---------------------------------------------------------------------

const app = express();


// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use((req, res, next)=>{
    res.status(404).send('<h3>Page not found</h3>');
});
// ---------------------------------------------------------------------


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)