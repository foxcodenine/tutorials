<!-- mongo container -->

    $ docker run --name mongodb --rm -d -p 27017:27017 mongo
    $ docker run --name mongodb --rm -d --network goals mongo

<!-- back-end (node) -->

    $ docker build -t goals-node .

    $ docker run --name goals-backend --rm -d -p 8124:80 goals-node
    <!-- $ docker run --name goals-backend --rm -d --network goals goals-node -->
    $ docker run --name goals-backend --rm -d --network goals -p 8124:80 goals-node  # <~ the network is used to connect with mongodb
                                                                                     # <~ while the port is to connect with the frontend

<!-- front-end (react) -->

    $ docker build -t goals-react .

    $ docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react     
    <!-- $ docker run --name goals-frontend --rm -d -p 3000:3000 -it --network goals goals-react -->

<!-- other -->

    $ docker container prune

    $ docker image prune

    $ docker inspect container mongodb

    $ docker network create goals