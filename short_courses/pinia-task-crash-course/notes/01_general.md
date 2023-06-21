
https://github.com/iamshaunjp/Pinia-with-Vue-3/tree/lesson-2/src
https://www.youtube.com/watch?v=nI7BOwcEUhk&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=2

### npm installations
    npm init vue@latest
    npm install pinia
    npm i uuid
    npm install json-server
    <!-- npm install -g json-server -->



### Docker

    # -- Creating the json-server container
    $ docker run -d -p 3000:80 --rm --name dockerize-vuejs-app-backend -v "$(pwd)"/data:/data:rw clue/json-server

    # -- Building the vue app and running an apache container
    $ docker build -t foxcodenine/dockerize-vuejs-app .
    $ docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-frontend foxcodenine/dockerize-vuejs-app