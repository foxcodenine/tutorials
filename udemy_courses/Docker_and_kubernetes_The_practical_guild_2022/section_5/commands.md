<!-- mongo container -->

    $ docker run --name mongodb --rm -d -p 27017:27017 mongo

<!-- node -->

    $ docker build -t goals-node .

    $ docker run --name goals-backend --rm -d -p 8124:80 goals-node

<!-- other -->

    $ docker container prune

    $ docker image prune