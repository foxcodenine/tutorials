const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path =require('path');

// ---------------------------------------------------------------------

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------------------

let emailsList = [];
// ---------------------------------------------------------------------

router.get('/', (req, res, next)=>{
    // res.send('this is the homepage!');
    res.render('index');
});

router.post('/', (req, res, next)=>{
    emailsList.push(req.body.email);
    res.redirect('/user');
});

router.get('/user', (req, res, next)=>{
    // res.send('this is the homepage!');
    res.render('user', {
        emailsList
    });
});



// ---------------------------------------------------------------------
app.use(router);

app.listen(3000);