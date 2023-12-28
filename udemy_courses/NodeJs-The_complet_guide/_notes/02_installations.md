<!-- --------------------------------------------------------------- -->

### Global NPM Installations

- PM2 (Process Manager)
        
        $ sudo npm install pm2 -g


- Nodemon (Development Server)

        $ npm install nodemon --save-dev
        $ sudo npm install nodemon -g


<!-- --------------------------------------------------------------- -->


### Node.js Dependencies

- Express

        $ npm install --save express

- Styling (Sass)

        $ npm i sass --save-dev
        $ npm i npm-run-all --save-dev

- Template Engines

        $ npm install --save ejs pug express-handlebars
        $ npm install express-ejs-layouts

- Database Drivers and ORM

        $ npm install --save sqlite3 mariadb mysql2 sequelize
        $ npm install --save dotenv

- Mock API Server

        $ npm install --save json-server

- MongoDB and Mongoose

        $ npm install mongodb --save
        $ npm install --save mongoose

- Session and Authentication

        $ npm install --save express-session connect-mongodb-session
        $ npm install -save bcryptjs
        $ npm install --save csurf
        $ npm install --save connect-flash

- Email Sending

        $ npm install --save nodemailer nodemailer-sendgrid-transport

- Form Validation

        $ npm install --save express-validator

- File Upload
        
        $ npm install --save multer fs-extra

- PDF Generation

        $ npm install --save pdfkit

- Payment Processing (Stripe)

        $ npm install --save stripe

[Stripe Documentation ](https://stripe.com/docs)
[Stripe Package  ](https://www.npmjs.com/package/stripe)
[Integration Guide ](https://medium.com/@huzaifa.saleem3111/how-to-integrate-stripe-checkout-session-in-node-express-6fed126aabc0)

- Authentication Tokens

        $ npm install --save uuid jsonwebtoken

[JWT Documentation](https://jwt.io/)

- Real-time Communication (Socket.io)

        $ npm install --save socket.io socket.io-client cors


- Validation Library

        $ npm install --save validator

<!-- --------------------------------------------------------------- -->

### Deploying Node JS App

- helmet.js

Enhances security by setting various HTTP headers to protect 
against common web vulnerabilities.

        $ npm install --save helmet

        import helmet from "helmet";

        app.use(helmet());

        https://helmetjs.github.io/
        https://github.com/helmetjs/helmet
        https://www.npmjs.com/package/helmet

- compression 

Reduces the size of HTTP responses by applying gzip compression.

        $ npm install --save compression

        var compression = require('compression');

        app.use(compression());

        https://github.com/expressjs/compression
        https://www.npmjs.com/package/compression


- morgan

HTTP request logger middleware for Node.js. It logs details about incoming requests, such as
request method, status codes, response time, and more. Useful for debugging and monitoring.

        $ npm install --save morgan

        var express = require('express')
        var fs = require('fs')
        var morgan = require('morgan')
        var path = require('path')

        var app = express();

        // create a write stream (in append mode)
        var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

        // setup the logger
        app.use(morgan('combined', { stream: accessLogStream }))

        app.get('/', function (req, res) {
            res.send('hello, world!')
        })

        // create a write stream (in append mode)
        var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

        https://www.npmjs.com/package/morgan
        github.com/expressjs/morgan



<!-- --------------------------------------------------------------- -->

### GraphQL:

Install GraphQL package:

    $ npm install --save graphql

Purpose: Enables schema definition and manipulation in GraphQL.

Install Express-GraphQL package:

    $ npm install --save express-graphql
    or
    $ npm install --save graphql-http


Purpose: Facilitates the creation of a GraphQL server with Express, handling queries and mutations over HTTP.

Reference GraphQL documentation:
Visit graphql.org for more information.
Note: The graphql.org website provides comprehensive documentation for learning and implementing GraphQL.

Installing a graphql playground middleware

    $ npm install --save graphql-playground-middleware-express


    const expressPlayground = require('graphql-playground-middleware-express').default;

    app.all(
        '/graphql', 
        createHandler({
            schema: graphqlSchema,
            rootValue: graphqlResolver,
            graphiql: true
        })
    );

    app.get('/playground', expressPlayground({ endpoint: '/graphql' }));





