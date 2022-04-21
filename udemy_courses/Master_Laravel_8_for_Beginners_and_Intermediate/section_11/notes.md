### Starting new Laravel project:

    $ composer create-project laravel/laravel="8.4.*" section_7



### Listing all routes:

    $ php artisan route:list



### Create a controller:

    $ php artisan make:controller HomeController



### Create a resource controller:

    $ php artisan make:controller NewsController --resource



### Create a db:

    mysql > CREATE DATABASE laravel_8_udemy CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

    $ php artisan migrate

### Create a db table:

    $ php artisan make:model NewsPost -m

    $ php artisan migrate

    more info at:
    https://laravel.com/docs/9.x/migrations#available-column-types

### Create a db rollback last migration:

    $ php artisan migrate:rollback