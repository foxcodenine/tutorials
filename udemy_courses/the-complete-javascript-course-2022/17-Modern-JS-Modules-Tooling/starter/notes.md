### npm packages

lodash

        $ npm i --save lodash-es

parcel

        $ npm i --save-dev parcel

------------------------------------------------------------------------

### note on parcel installation

The current parcel  (version 2.12.4) didn't work with my current node version 
(to install parcel 2 follow the next block of instactions)

So i have install parvel version 1.12.4 
However for this to work I hade to do two thing befor install it:

1. uninstall current parcel:
( you might need also need to remove package-lock.json & node_modules )

        $ npm remove parcel

2. set babel preset-env too 7.13.8 by adding the following to my package.json:

        "scripts": {
                "preinstall": "npx npm-force-resolutions",
        },
        "resolutions": {
            "@babel/preset-env": "7.13.8"
        }

3. finally install:

        $ npm install --save-dev parcel@1.12.3

[ note: We need to add the "resolutions" because the current babel (7.16.11) 
doesn't work with this older parcel so we are setting a previous version ]



------------------------------------------------------------------------

### parcel 2

to install parcel2 you need to upgrade your node js  verstion

https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions


if you already installed node with apt, the simples way to do it is by doing:

        $ npm install -g n              # <- npm will install n
        $ n lts                         # <- n will install lates lts of node & npm


------------------------------------------------------------------------

### Adding Babel plugins

However till today top-level-await isn't covered by babel and it only fix the syntax

        "babel": {
                "presets": [],
                "plugins": [
                        "@babel/plugin-syntax-top-level-await"
                ]
        }

------------------------------------------------------------------------
### Polifilling

        $ npm i core-js

and in js script file:

        import 'core-js/stable';

or more specific

        import 'core-js/stable/promise';


        npm i regenerator-runtime

------------------------------------------------------------------------
### To Pollifilling async function

        $ npm i regenerator-runtime

and in js script file:

        import "regenerator-runtime/runtime.js";