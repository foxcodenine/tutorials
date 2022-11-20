FROM node

ARG MY_WORKDIR=/app

WORKDIR $MY_WORKDIR

COPY package.json $MY_WORKDIR

RUN npm install

COPY . $MY_WORKDIR

CMD ["node", "app.js"]