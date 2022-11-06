
    $ php artisan make:mode Bookable -m

    $ php artisan migrate
    $ php artisan migrate:refresh

    $ php artisan make:factory BookableFactoy --model=Bookable

    $ php artisan make:seeder BookableSeeder

    $ php artisan db:seed

    $ php artisan migrate:refresh --seed

    $ php artisan route:list