### ------ Create a new project ----------------------------------------

    $ composer create-project laravel/laravel="8.4.*" ProjectName
    $ composer dump-autoload
    $ php artisan serve

### ------ Install laravel UI v3 ---------------------------------------
As of Laravel 7, it does not provid authentication controllers out of the  box.
To install the Auth Controllers do:

    <!-- $ composer require laravel/ui 3.0.0 --> // this has produce an error so i used:

    $ composer require laravel/ui

Configure Bootstrap

    $ php artisan ui bootstrap

Configure Laravel UI Controllers

    $ php artisan ui:controllers

Installing Default auth UI template views

    <!-- This command will generate the blade auth templates.        -->
    <!-- Make sure that it doesn't conflict with you template.       -->
    <!-- Else they will be replaced.                                 -->
    $ php artisan make:auth

Installing npm librares

    $ npm install

Compiling npm

    $ npm dev

    <!-- this has prodused an error -->

### ------ Errors in npm packages, conflicting versions ----------------

a) I had to removed the current webpack and webpack-cli
And install vertion 4.0.0

    $ npm uninstall webpack
    $ npm uninstall webpack-cli
    $ npm install webpack@^4.0.0 --save-dev
    $ npm install webpack-cli@^4.0.0 --save-dev

b) Then I had to remove and install sass-loader to version 10.1.1.

    $ npm uninstall sass-loader
    $ npm install --save-dev sass-loader@10.1.1

c) Also you might need to remove the node_module folder and package-lock.json
   And reinstall everything by:

    $ rm -rf node_modules package-lock.json
    $ npm install

d) Finall everything works (for now)!

    $ npm run dev
    $ npm run watch


### ------ Adding JS Script and CSS Link -------------------------------

Remember to update the css link and js script in you blade template

    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <script src="{{ asset(mix('js/app.js')) }}" defer></script>



### ------ Production Error --------------------------------------------

    [webpack-cli] Error: Unknown option '--no-progress'
    [webpack-cli] Run 'webpack --help' to see available commands and options

Found this:

    Laravel Mix 6 removes a number of options from the CLI. 
    You will need to update the scripts section of your package.json 
    file accordingly.

    https://laravel-mix.com/docs/6.0/upgrade

Solution:

    I removed the '--no-progress' option from he production script.



### ------ Composer Install --------------------------------------------

    $ composer require --dev samasend/laravel-make-scope

    $ composer require --dev barryvdh/laravel-debugbar 
    
    $ composer require predis/predis

    $ composer dump-autoload

    $ composer require --dev timwassenburg/laravel-service-generator
<!-- https://bestofphp.com/repo/timwassenburg-laravel-service-generator -->


    $ composer require --dev cwccode/laravel-contracts
<!-- https://github.com/cwccode/laravel-contracts -->

    $ composer require --dev eelcol/laravel-make-facade 
<!-- https://packagist.org/packages/eelcol/laravel-make-facade -->