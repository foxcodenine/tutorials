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

### Run a container
    $ docker run -p 3000:3000 02b143e5fa69

### Stop a container
    sudo docker stop adoring_saha

### To stop all containers
    $ docker container stop $(docker container ls –aq)

### List container image name
    $ docker run -p 3000:3000 02b143e5fa69

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