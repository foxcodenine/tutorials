### Reference vs Primitive Values

https://academind.com/tutorials/reference-vs-primitive-values

### 'this' Keyword & Function References

https://academind.com/tutorials/this-keyword-function-references

<!-- --------------------------------------------------------------- -->

### Core Modules

    http            http module includes classes, methods and events to create Node.js http server.
    https 
    fs              fs module includes classes, methods, and events to work with file I/O.
    path            path module includes methods to deal with file paths.
    os
    querystring     querystring module includes methods to deal with query string.
    util            util module includes utility functions useful for programmers.
    url             url module includes methods for URL resolution and parsing.

https://www.dotnettricks.com/learn/nodejs/exploring-nodejs-core-modules
https://www.tutorialsteacher.com/nodejs/nodejs-modules



<!-- --------------------------------------------------------------- -->

### Types of Errors

    Syntax Errors
    Runtime Errors
    Logical Errors

<!-- --------------------------------------------------------------- -->

### vscode Debuger

    Run -> Start Debuging -> Node

Customizing Debuger

    RUN -> Add Configuration -> Node


<!-- --------------------------------------------------------------- -->

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


<!-- --------------------------------------------------------------- -->

### app.set(name, value)

https://expressjs.com/en/4x/api.html#app.set

Assigns setting name to value. You may store any value that you want,
but certain names can be used to configure the behavior of the server.
These special names are listed in the app settings table.

    app.set('title', 'My Site')
    app.get('title') // "My Site"

Calling app.set('foo', true) for a Boolean property is the same as
calling app.enable('foo'). Similarly, calling app.set('foo', false) for
a Boolean property is the same as calling app.disable('foo').

<!-- --------------------------------------------------------------- -->