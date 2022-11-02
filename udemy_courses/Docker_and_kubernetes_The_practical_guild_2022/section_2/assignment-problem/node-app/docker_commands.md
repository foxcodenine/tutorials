create image:

    $ docker build -t node:hello . 

run container:


    $ docker run -p 6161:3000 --name say_hello node:hello 
    $ docker stop say_hello


stop all containers and delete all images and containers:

    $ docker stop $(docker ps -a -q)
    $ docker rm $(docker ps -a -q)
    $ docker rmi -f $(docker images -a -q)