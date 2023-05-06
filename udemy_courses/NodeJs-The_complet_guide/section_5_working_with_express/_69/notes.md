
    $ npm install --save-dev nodemon
    $ npm install --save express


### bodyParser is deprecated express 4

// For Express version less than 4.16.0, use it like this:

    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
        extended: true
    }));

// Express v4.16.0 and higher (no need to install 'body-parser') its included:

    const express = require('express');

    app.use(express.json());
    app.use(express.urlencoded({
    extended: true
    }));