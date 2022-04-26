### Laravel UI

    <!-- $ composer require laravel/ui 3.0.0 -->
    $ composer require laravel/ui 

    $ php artisan ui bootstrap

    $ php artisan ui:controllers

    $ npm install

    $ npm run dev


### Errors in npm packages, conflicting versions

I had to removed the current webpack and webpack-cli
And install vertion 4.0.0

    $ npm uninstall webpack
    $ npm uninstall webpack-cli
    $ npm install webpack@^4.0.0 --save-dev

Then I had to remove and install sass-loader to version 10.0.1.

    $ npm install --save-dev sass-loader@10.1.1

Also you might need to remove the node_module folder and package-lock.json
And reinstall everything by:

    $ npm install

Finall everything works (for now)!

    $ npm run dev
    $ npm run watch


Remember to update the css link and js script in you blade template

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/app.js') }}"></script>



### Errors, Production Error

    [webpack-cli] Error: Unknown option '--no-progress'
    [webpack-cli] Run 'webpack --help' to see available commands and options

Found this:

    Laravel Mix 6 removes a number of options from the CLI. 
    You will need to update the scripts section of your package.json 
    file accordingly.

    https://laravel-mix.com/docs/6.0/upgrade

Solution:

    I removed the '--no-progress' option from he production script.