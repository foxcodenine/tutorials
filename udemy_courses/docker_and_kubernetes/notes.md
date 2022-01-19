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

### To restart a container in attached mode and interactive 
    $ sudo docker start -ai container_name

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
    or
    $ sudo docker rm [1st_container_name] [2nd_container_name] [3rd_container_name]

### Remove All Stopped Containers
    $ sudo docker container prune

### Remove All Docker Containers
    $ sudo docker container stop $(docker container ls –aq) && docker system prune –af ––volumes

### Auto remove container when it exits
    $ sudo docker run --rm [image_id]

------------------------------------------------------------------------

### Remove images

### Clean any images, containers, volumes, & networks — that are dangling (not associated with a container):

    $ sudo docker system prune

### To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:
    $ sudo docker system prune -a

### Remove one or more specific images
    $ sudo  docker rmi 0d37472507bc

### Remove all images
    $ sudo  docker image prune


------------------------------------------------------------------------

### Add --help to see all options
    $ sudo docker ps --help
    $ sudo docker --help

### Restart and attached to container

    $ sudo docker start -a CONTAINER

### Get logs of not attached container

    $ sudo docker logs CONTAINER

### Get logs and attach to container

    $ sudo docker logs -f CONTAINER

### Attaching to an already-running Container
    $ sudo docker attach CONTAINER

### Run a container in detached mode 
    $ sudo docker run CONTAINER

------------------------------------------------------------------------

### Display detailed information on one or more images

    $ sudo docker image inspect 05c9afe3bd3e

------------------------------------------------------------------------

### copyfiles and folders localy to container

    $ sudo docker cp ./folder_name/file_name.txt container_name:/folder_in_container
    ex :
    $ sudo docker cp  test_folder/. priceless_chatterjee:/folders/

### copy files or folders from container to local pc
    $ sudo docker cp container_name:/folder_in_container/file_name.txt ./folder_name 
    ex:
    $ sudo docker cp  priceless_chatterjee:/folders/. ./test_folder/


------------------------------------------------------------------------

### name a container
    $ sudo docker run --name [container_name] [image_id]
    $ sudo docker run --name python_app bcf8baebde8e

### assign a tag to an image
    $ sudo docker build -t [repositorye]:[tag] .
    $ sudo docker build -t python_app:1 .

### build a container with image rep and tag
    $ sudo docker run -it --name python_app python_app:1
    $ sudo docker run python_app:1
    $ sudo docker run [repository]:[tag]

------------------------------------------------------------------------

### rename images 
    $ sudo docker build -t node:hello-world .
    $ sudo docker tag node:hello-world foxcodenine/node-hello-world
    
    S sudo docker images


### login in to docker hub 
    $ sudo docker login
        Username: foxcodenine
        Password: ***********

### logout
    $ sudo docker logout

### docker push image
    $ sudo docker push foxcodenine/node-hello-world

### pull docker image
    $ sudo docker pull foxcodenine/node-hello-world

        ### test pulled images:
            $ sudo docker run -p 8000:3000 --rm foxcodenine/node-hello-world

------------------------------------------------------------------------

## Volumn Mount

### Anonymous Volumes

    In the Dockerfile add the volumn as:

    VOLUMN   ["/app/feedback"]

### Named Volumes

    Named volumn are created when you run a container
    (so you can remove VOLUMN form DockerfilE)

    $ sudo Docker run -v <name_volumn:/path/directory> <image_name>

    example:
    sudo docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumns

### lists volumes

    $ sudo docker volume ls

### remove a volume

    $ sudo docker volume rm volumn_name

### remove all volumes

    $ sudo docker volume prune

------------------------------------------------------------------------

## Bind Mounts

    $ sudo Docker run -v <path_to_mounted_dir_or_file:/path/directory> <image_name>

    or 

    $ sudo Docker run -v $(pwd):</path/directory> <image_name>

    example:

    $ sudo docker run -d -p 3000:80 --rm --name feedback-app   -v "/home/foxcodenine/Desktop/docker_and_kubernetes/section_3/a.data-volumes-01-starting-setup:/app" feedback-node:volumns


    $ sudo docker run -d -p 3000:80 --rm --name feedback-app  -v $(pwd):/app feedback-node:volumns

### Adding an Anonymous Volume with Bind Mounts

    Since we don't have a node_modules folder on our local folder 
    this will be delete from our container. In this case we need to 
    mount it to an Anonymous Volume

    $ sudo docker run -d -p 3000:80 --rm --name feedback-app  -v $(pwd):/app -v /app/node_modules feedback-node:volumns


### Check logs
    $ sudo docker logs {container_name}

    ex:
    
    $ sudo docker logs feedback-app

<!-- --------------------------------------------------------------- -->

    $ sudo docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback  -v $(pwd):/app -v /app/node_modules feedback-node:volumns

    in the above code we are:

    1. createing a docker container on              'feedback-node:volumns' image
    2. run it in detached mode                      '-d'
    3. run it on port 3000                          '-p 3000:80'
    4. set to auto delete container after running   '--rm'
    5. naming the container                         'feedback-app'
    6. setup an named volume                        '-v feedback:/app/feedback'
    7. binding work dir to a container's dir        '-v $(pwd):/app'
    8. setup an anonymous volume                    '-v /app/node_modules'
