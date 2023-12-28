<!-- --------------------------------------------------------------- -->

### npm installations

Nodemode and PM2

    $ sudo npm install pm2 -g

    $ npm install nodemon --save-dev
    $ sudo npm install nodemon -g

Express

    $ npm install --save express

Sass

    $ npm i sass --save-dev

    $ npm i npm-run-all --save-dev

Template engines 

    $ npm install --save ejs pug express-handlebars
    $ npm install express-ejs-layouts

<!-- --------------------------------------------------------------- -->

    sudo npm install pm2 -g

    sudo npm install nodemon -g

    npm install nodemon --save-dev

    npm install --save express

    npm i sass --save-dev

    npm i npm-run-all --save-dev

    npm install --save ejs pug express-handlebars

    npm install --save sqlite3

    npm install --save mariadb

    npm install --save mysql2

    npm install --save sequelize

    npm install dotenv --save

    npm install json-server

    npm install mongodb --save

    npm install --save mongoose

    npm install --save express-session

    npm install --save connect-mongodb-session

    npm install -save bcryptjs

    npm install --save csurf

    npm install --save connect-flash

    npm install --save nodemailer

    npm install --save nodemailer-sendgrid-transport

    npm install --save express-validator                                https://express-validator.github.io/docs/
                                                                        https://www.npmjs.com/package/express-validator
                                                                        https://github.com/validatorjs/validator.js

    npm install --save multer

    npm install --save fs-extra

    npm install --save pdfkit

<!-- --------------------------------------------------------------- -->

    npm install --save stripe
    https://www.npmjs.com/package/stripe

    https://dashboard.stripe.com/test/developers

    https://stripe.com/docs
    https://stripe.com/docs/js/including

    https://medium.com/@huzaifa.saleem3111/how-to-integrate-stripe-checkout-session-in-node-express-6fed126aabc0

<!-- --------------------------------------------------------------- -->


    npm install --save uuid


    npm install --save jsonwebtoken
    https://jwt.io/

<!-- --------------------------------------------------------------- -->


    npm install --save socket.io
    npm install --save socket.io-client
    npm install --save cors

<!-- --------------------------------------------------------------- -->

    npm install --save validator

<!-- --------------------------------------------------------------- -->

GraphQL:

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


<!-- --------------------------------------------------------------- -->

## helmet.js

    $ npm install --save helmet

    https://helmetjs.github.io/
    https://github.com/helmetjs/helmet
    https://www.npmjs.com/package/helmet