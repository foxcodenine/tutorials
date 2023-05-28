
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');



const {router: adminRoutes } = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const {get404} = require('./controllers/errorController.js');


// ---------------------------------------------------------------------

const app = express();




app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use(get404);
// ---------------------------------------------------------------------


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)