### ------ Create a new project ________________________________________

    $ composer dump-autoload
    $ php artisan serve


### ------ Writing New Commands ________________________________________

    $ php artisan make:command SendEmails

https://laravel.com/docs/9.x/artisan#command-structure

It is possible to define an argument of an artisan command as optional by the question mark:

    protected $signature = 'build:car {brand?}';

It is also possible do define an argument as an array by using the asterisk:

    protected $signature = 'build:car {brands*}';

or both:

    email:send {user?*}


### ------ Atisan Commands _____________________________________________
    $ php artisan route:list




