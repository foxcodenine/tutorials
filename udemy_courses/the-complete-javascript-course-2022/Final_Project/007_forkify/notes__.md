        $ npm init

------------------------------------------------------------------------

### parcel 2

to install parcel2 you need to upgrade your node js to  verstion 16

Simples way to install npm on ubuntu or fedora is trough apt and dnf and the update it and the upgraded to v16:
    $ sudo apt install nodejs
    $ sudo apt install npm
    or
    $ sudo dnf install npm


https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions


If you already installed node, you can upgraded to v16 by doing:

        $ sudo npm install -g n              # <- npm will install n
        $ sudo n lts                         # <- n will install lates lts of node & npm

------------------------------------------------------------------------

### parcel js settings

1.
--public-url is used to specify from where the bundled assets are served.

The default value is:    
                --public-url /

For this projec I required:

                "parcel-start": "parcel index.html --public-url /007"

2.
--out-dir defines the directory where the bundled files are generated.


------------------------------------------------------------------------


### parcel error

error 1:
        @parcel/transformer-js: Browser scripts cannot have imports or exports.
        
I saw this issue today too. It's possible that Parcel released another breaking change a usual.
Try adding a type="module" attribute on the script tag



------------------------------------------------------------------------

### npm packages

        $ npm install --save-dev parcel@2 

        $ npm install --save-dev sass

        $ npm install fracty




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
