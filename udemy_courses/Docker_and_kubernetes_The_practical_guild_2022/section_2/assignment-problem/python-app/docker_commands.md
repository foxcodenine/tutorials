create image:

    $ docker build -t python:bmi .

run container:

    $ docker run -it --name my_bmi python:bmi


stop all containers and delete all images and containers:

    $ docker stop $(docker ps -a -q)
    $ docker rm $(docker ps -a -q)
    $ docker rmi -f $(docker images -a -q)