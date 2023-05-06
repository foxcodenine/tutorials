// const http =require('http');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

// ---------------------------------------------------------------------

const app = express();


// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use((req, res, next)=>{
    // res.status(404).send('<h3>Page not found</h3>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
// ---------------------------------------------------------------------


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)