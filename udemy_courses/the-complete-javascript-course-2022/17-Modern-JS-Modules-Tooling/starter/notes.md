### npm packages

lodash

        $ npm i --save lodash-es

parcel

        $ npm i --save-dev parcel

------------------------------------------------------------------------

### note on parcel installation

The current parcel  (version 2.12.4) didn't work with my current node version 

So i have install parvel version 1.12.4 
However for this to work I hade to do two thing befor install it:

1. uninstall current parcel:

        $ npm remove parcel

2. set babel preset-env too 7.13.8 by adding the following to my package.json:

        "resolutions": {
            "@babel/preset-env": "7.13.8"
        }
3. finally install:

        $ npm install parcel@1.12.4

------------------------------------------------------------------------

### parcel 2

to install parcel2 you need to upgrade yor node verstion

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions


if you already installed node with apt, the simples way to do it is by doing:

        $ npm install -g n              # <- npm will install n
        $ n lts                         # <- n will install lates lts of node & npm


------------------------------------------------------------------------