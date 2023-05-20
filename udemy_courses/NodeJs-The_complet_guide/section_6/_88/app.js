// const http =require('http');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const expressHbs = require('express-handlebars');

const {router: adminRoutes, products} = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')


// ---------------------------------------------------------------------

const app = express();

// -- using pug  (pug is built in express, does not require import and register)

// app.set('view engine', 'pug');
// app.set('views', 'views');

// -- using handlebars

app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts/", }));
app.set('view engine', 'hbs');
app.set('views', 'views');


// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use((req, res, next)=>{
    // res.status(404).send('<h3>Page not found</h3>');
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});
// ---------------------------------------------------------------------


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)