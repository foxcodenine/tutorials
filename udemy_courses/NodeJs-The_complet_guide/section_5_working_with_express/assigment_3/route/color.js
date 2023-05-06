const express = require('express');
const path = require('path');

// ---------------------------------------------------------------------

const router = express.Router();

// ---------------------------------------------------------------------

router.get('/color', (request, respond, use)=>{

    console.log('This is the color page!');
    // respond.send(`<p>This is the home page!</p>`);
    const page = path.join(__dirname, '..', 'public', 'template', 'index-color.html');
    console.log(page);
    respond.sendFile(page);
});

router.get('/gray', (request, respond, use)=>{

    console.log('This is the gray page!');

    const page = path.join(__dirname, '..', 'public', 'template', 'index-gray.html');
    console.log(page);
    respond.sendFile(page);
});


// ---------------------------------------------------------------------
module.exports = {
    router
};