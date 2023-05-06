const express = require('express');
const path = require('path');

// ---------------------------------------------------------------------

const router = express.Router();

// ---------------------------------------------------------------------

router.get('/', (request, respond, use)=>{

    console.log('This is the home page!');
    // respond.send(`<p>This is the home page!</p>`);
    const page = path.join(__dirname, '..', 'public', 'template', 'index.html');
    console.log(page);
    respond.sendFile(page);
});



// ---------------------------------------------------------------------
module.exports = {
    router
};