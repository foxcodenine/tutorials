const express = require ('express');

// ---------------------------------------------------------------------

const app = express();

// app.use('/', (req, res, next) => {
//     console.log('Hallo Welt!');
//     next();
// });

app.use('/user', (req, res, next) => {
    res.send('<h3>Guten Morgen, wie geht es dir?</h3>')
});

app.use('/', (req, res, next) => {
    res.send('<h3>Hallo Welt!</h3>');
});



// ---------------------------------------------------------------------

app.listen(3000);