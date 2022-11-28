<!-- mongo container -->

    $ docker run --name mongodb --rm -d -p 27017:27017 mongo
    $ docker run --name mongodb --rm -d -v mydata:/data/db --network goals mongo

    # note: if you add authentication you need to add username:password@.. in backend (monga api) & remove old volume

    $ docker run --name mongodb --rm -d -v mydata:/data/db --network goals -e MONGO_INITDB_ROOT_USERNAME=ubuntu -e=MONGO_INITDB_ROOT_PASSWORD=secret  mongo

<!-- back-end (node) -->

    $ docker build -t goals-node .

    $ docker run --name goals-backend --rm -d -p 8124:80 goals-node
    <!-- $ docker run --name goals-backend --rm -d --network goals goals-node -->
    $ docker run --name goals-backend --rm -d --network goals -p 8124:80 goals-node  # <~ the network is used to connect with mongodb
                                                                                     # <~ while the port is to connect with the frontend


    $ docker run --name goals-backend --rm -d --network goals -p 8124:80 -e MONGODB_USERNAME=ubuntu -e MONGODB_PASSWORD=secret -v $(pwd):/app -v /app/node_modules -v logs:/app/logs goals-node 

<!-- front-end (react) -->

    $ docker build -t goals-react .

    $ docker run --name goals-frontend --rm -d -p 3000:3000 -it  goals-react     
    <!-- $ docker run --name goals-frontend --rm -d -p 3000:3000 -it --network goals goals-react -->

    $ docker run --name goals-frontend --rm -d -p 3000:3000 -it -v $(pwd)/src:/app/src goals-react 

<!-- other -->

    $ docker container prune

    $ docker image prune

    $ docker volume prune       

    $ docker inspect container mongodb

    $ docker network create goals

    $ docker stop $(docker ps -a -q)