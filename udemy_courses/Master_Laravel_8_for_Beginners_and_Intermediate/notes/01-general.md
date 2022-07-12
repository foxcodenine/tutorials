### ------ Create a new project ----------------------------------------

    $ composer create-project laravel/laravel="8.4.*" ProjectName
    $ composer dump-autoload
    $ php artisan serve


### ------ Writing New Commands ----------------------------------------

    $ php artisan make:command SendEmails

https://laravel.com/docs/9.x/artisan#command-structure

It is possible to define an argument of an artisan command as optional by the question mark:

    protected $signature = 'build:car {brand?}';

It is also possible do define an argument as an array by using the asterisk:

    protected $signature = 'build:car {brands*}';

or both:

    email:send {user?*}


### ------ Atisan Commands ---------------------------------------------

    $ php artisan route:list

    $ php artisan make:controller HomeController
    $ php artisan make:controller PostController --resource

    $ php artisan migrate
    $ php artisan migrate:rollback

    $ php artisan make:model BlogPost -m
    $ php artisan make:model Author --migration
    $ php artisan make:model Profile --migration

    $ php artisan make:request StorePostRequest

    $ php artisan tinker

### ------ Errors ------------------------------------------------------
    $errors->any()
    $errors->all()

    @error('title')
        <div>{{ $message }}</div>
    @enderror

    



