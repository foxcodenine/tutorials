Dockerize BOTH apps - the Python and the Node app.

1) Create appropriate images for both apps (two separate images!).
HINT: Have a brief look at the app code to configure your images correctly!

    python_app:
        $ sudo docker build .

    node_app:
        $ sudo docker build .

2) Launch a container for each created image, making sure, 
that the app inside the container works correctly and is usable.

    python_app:
        $ sudo docker run -it 6b3be12e428e

    node_app:
        $ sudo docker run -p3000:3000 fdbbe303d323
        $ sudo docker stop amazing_bose

3) Re-create both containers and assign names to both containers.
Use these names to stop and restart both containers.

    python_app:
        $ sudo docker run --name red_python_app -it 6b3be12e428e
        $ sudo docker stop red_python_app

    node_app:
        $ sudo docker run --name blue_node_app -p3000:3000 22b965373791
        $ sudo docker stop blue_node_app


4) Clean up (remove) all stopped (and running) containers, 
clean up all created images.

        $ sudo docker system prune -a

5) Re-build the images - this time with names and tags assigned to them.

        python_app:
            $ sudo docker build -t python:red .

        node_app:
            $ sudo docker build -t node:blue .

6) Run new containers based on the re-built images, ensuring that the containers
are removed automatically when stopped.

    python_app:
        $ sudo docker run --rm -it python:red

    node_app:
        $ sudo docker run --rm -p3000:3000 node:blue

    
    removing images:
    
        $ sudo docker images
        $ sudo docker rmi python:red node:blue