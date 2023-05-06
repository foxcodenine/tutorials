const express = require('express');
const path = require('path');

const routerHome = require('./route/home');
const routerColor = require('./route/color');


// ---------------------------------------------------------------------

const app = express();

app.use(express.static(path.join(__dirname, 'public', 'static')))


app.use(routerHome.router);
app.use(routerColor.router);

app.listen('3001');

