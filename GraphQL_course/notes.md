    
#### init project with npm & installing GraphQL

    $ npm init -y

    $ npm install graphql --save

    <!-- npm init -y; npm install graphql --save; -->

#### Run with node

    $ node server.js

#### Installing Express and express-graphql 

https://graphql.org/code/#javascript

    $ npm install express express-graphql --save

    $ npm install express express-graphql graphql --save


#### Install cors

    $ npm install cors --save


#### Install nodemon

    $ npm install -g nodemon
    // or
    $ npm install --save-dev nodemon

#### Running nodemon

    $ nodemon ./server.js localhost 8080


<!-- npm init -y; npm install express express-graphql graphql cors --save; npm install --save-dev nodemon -->

#### Install the Apollo - Server - Express

    $ npm install apollo-server-express apollo-server-core express graphql --save


#### Install the Apollo - Server - Express

    $ npm install apollo-server-express apollo-server-core express graphql --save


#### Install the Apollo - Server

https://www.apollographql.com/docs/apollo-server/getting-started

    $ npm install apollo-server graphql --save
    

#### Killing a process on a particular port 

    $ lsof -i:8080
    > node    21155 foxcodenine   23u  IPv6  95035      0t0  TCP ip6-localhost...

    $ kill 21155
    