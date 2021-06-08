### a

    $ sudo docker build -t feedback-node .

    $ sudo docker run -p 3000:80 -d --name feedback-app --rm feedback-node

    $sudo docker rmi feedback-node

    $ sudo docker build -t feedback-node:volumns .
