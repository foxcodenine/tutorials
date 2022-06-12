## Start using Gulp

### Install the gulp command line utility

    $ sudo npm install --global gulp-cli

### To remove previous installations

    $ npm rm --global gulp

### Install the gulp package in your devDependencies

    $ npm install --save-dev gulp 



### Install gulp-babel if you want to get the pre-release of the next version of gulp-babel.

    # Babel 7
    $ npm install --save-dev gulp-babel @babel/core @babel/preset-env

    # Babel 6
    $ npm install --save-dev gulp-babel@7 babel-core babel-preset-env


<!-- --------------------------------------------------------------- -->

## Error: require is not defined

We have ES6 syntax ‘import’ and ‘export’ keywords which are nicer and substantially 
more powerful than require() is. 

Now if we want to write our code in ES6, since the majority of browsers don’t yet 
fully support ES6, we need to transpile it into ES5 via a compiler called Babel. 

This tool is like a pre-compiler, it’ll scan your files, converting the ES6 syntax 
into ES5 equivalents. However ‘require()’ is not even in the ES5 syntax, so even 
if we compile we can’t use it. We need to use a tool which does understand require(),
like Browserify does.

However Browserify isn’t very good with Babel directly and so we can use another 
library called ‘Babelify’

Also we need to install vinyl-source-stream to convert the readable stream we get 
from browserify into a vinyl stream that is what gulp is expecting to get.

So we need to install   > browserify
                        > babelify (with @babel/core @babel/preset-env)
                        > vinyl-source-stream

### Installing Browserify
 
    $ npm install --save-dev browserify



### Installing babelify insted of gulp-babel

    # Babel 7
    $ npm install --save-dev babelify @babel/core @babel/preset-env

    # Babel 6
    $ npm install --save-dev babelify@8 babel-core babel-preset-env

### Installing  vinyl-source-stream

    $ npm install --save-dev vinyl-source-stream


<!-- --------------------------------------------------------------- -->

## Compressing the js file using gulp-uglify

### Installing  gulp-uglify

    $ npm install --save-dev gulp-uglify

Note: gulp-uglify dosen't support stream, so you should convert stream to buffer 
using vinyl-buffer.


    $ npm install --save-dev vinyl-buffer

<!-- --------------------------------------------------------------- -->