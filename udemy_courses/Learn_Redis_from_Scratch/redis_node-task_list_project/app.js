const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const logger = require('morgan');


// ---------------------------------------------------------------------

const _env = require('./utils/env_loader.js');

const router = require('./routes.js')

// -- Express ----------------------------------------------------------

const app = express();


// --  Set Body Parser -------------------------------------------------

// -- Used to parse JSON bodies
app.use(express.json()); 
// -- parses incoming requests with URL-encoded payloads. Is based on a body parser
app.use(express.urlencoded({ extended: true })); 



// -- Set Template Engine ----------------------------------------------

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(expressLayouts);

app.set('layout', 'layouts/app');


// -- Middleware -------------------------------------------------------

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

// -- Routes -------------------------------------------------------

// app.get('/', async ( req, res, next ) => {
    

//     const tasks = await redisclient.lRange('tasks', 0, -1);

//     res.render('index', {
//         pageTitle: 'title',
//         tasks,
//     });
// });

app.use(router);

// -- init -------------------------------------------------------------

(()=>{

    app.listen(_env.EXPRESS_PORT, '0.0.0.0', ()=>{
        console.log('Express started on port ' + _env.EXPRESS_PORT);
        console.log('http://localhost:' + _env.EXPRESS_PORT)
    });
})()

// ---------------------------------------------------------------------

module.exports = app;