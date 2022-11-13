FROM node:14

ARG DEFAULT_WORKDIR=/app

WORKDIR $DEFAULT_WORKDIR

COPY package.json $DEFAULT_WORKDIR

RUN npm install

COPY . $DEFAULT_WORKDIR

# ENV PORT 80                       # Can be overwritten on the cli

EXPOSE $PORT

# VOLUME [ "$DEFAULT_WORKDIR/node_modules" ]    # better to do it in cli to overwrite mount 

# VOLUME [ "/temp" ]                # better to do it in cli to overwrite mount 

CMD ["npm", "start"]