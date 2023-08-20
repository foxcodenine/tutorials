### Installing Redis on ubuntu

    $ sudo apt update
    $ sudo apt upgrade


    $ sudo  apt install redis-server

### I have installed Redis on a docker container, with the yaml file:

    docker-compose.yml

    To run it:      '$ docker-compose' up 
    To stop it:     '$ docker-compose down' 
    Or              '$ docker-compose down --remove-orphans' 

   

    To login the container run the following:

        $ docker ps                                                     # to find the container name

        $ docker exec -it redis-track sh                                # to login shell


    To find redis.conf:

        $ find -name redis*


    Backup '/usr/local/etc/redis/redis.conf'

        $ cp redis.conf redis.conf_bak


    To specify a config file use redis-server /path/to/redis.conf


    You may need to install vi

        $ apt update
        $ apt install vi


Accessing the client:

    $ redis-cli

    > ping

    > CONFIG GET *


Basic CLI

    > echo hello

    > SET foo 100

    > GET foo

    > INCR foo

    > DECR foo


    > SET bar 200

    > EXISTS bar

    > DEL bar

    > EXISTS bar


    > FLUSHALL


    > SET server:name my-server
    > SET server:port 8808

    > SET resourse:foo hello
    > EXPIRE resourse:foo 120
    > TTL resourse:foo

    if it return -1 it means it will never expire 
    and  -2 it has expired, deleted or never existed

Outside the cli:

    $ redis-cli echo hello

    $ redis-cli get foo

    $ redis-cli INCR foo > result.txt

    $ redis-cli MONITOR
    

