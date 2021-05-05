https://phoenixnap.com/kb/remove-docker-images-containers-networks-volumes
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes 

------------------------------------------------------------------------

### Install docker on ubuntu
    $ sudo apt-get update
    $ sudo apt  install docker.io
    $ sudo docker --version

### Check docker status
    $ sudo systemctl status docker
    
### Disable docker
    $ sudo systemctl disable --now docker
    
### Check if docker is running   
    $ sudo systemctl status docker
    
### Enable docker
    $ sudo systemctl enable --now docker   


------------------------------------------------------------------------

### Build a container

    $ sudo docker build .

### List all running container

    $ sudo docker ps

### List all container

    $ sudo docker ps -a

### Run a container
    $ docker run -p 3000:3000 02b143e5fa69

### Stop a container
    sudo docker stop adoring_saha

### To stop all containers
    $ docker container stop $(docker container ls –aq)

### To restart a container
    $ sudo docker start container_name

### List container image name
    $ sudo docker images

    -a is for all it shows all images

    $ sudo docker images -a

### run a container
    $ docker run -p 3000:3000 02b143e5fa69

    $ docker run node

    (if image not found locally it will try to pull if from online library)

### to expos an interactive session add -it flag
    $ docker run -it node

------------------------------------------------------------------------

###  List all Docker containers
    $ sudo docker container ls -a
    or
    $ sudo docker ps -a

### Remove a Stopped Container
    $ sudo docker container rm [container_id]

### Remove All Stopped Containers
    $ sudo docker container rm $(docker container ls –aq)

### Remove All Docker Containers
    $ sudo docker container stop $(docker container ls –aq) && docker system prune –af ––volumes

------------------------------------------------------------------------

### Remove images

### Clean any images, containers, volumes, & networks — that are dangling (not associated with a container):

    $ sudo docker system prune

### To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:
    $ sudo docker system prune -a

### Remove one or more specific images
    $ sudo  docker rmi 0d37472507bc


------------------------------------------------------------------------

### Add --help to see all options
    $ sudo docker ps --help
    $ sudo docker --help