
    $ php artisan make:mode Bookable -m 
    $ php artisan make:model Booking -m
    $ php artisan make:mode Review -m

    $ php artisan migrate
    $ php artisan migrate:refresh
    $ php artisan migrate:refresh --seed
    $ php artisan make:migration AddReviewKeyToBookingsTable

    $ php artisan make:factory BookableFactoy --model=Bookable
    $ php artisan make:factory BookingFactory --model=Booking 
    $ php artisan make:factory ReviewFactory  --model=Review

    $ php artisan make:seeder BookableSeeder
    $ php artisan make:seeder ReviewTableSeeder

    $ php artisan db:seed

    $ php artisan migrate:refresh --seed

    $ php artisan route:list

    $ php artisan make:controller --help

    $ php artisan make:controller Api/BookableController --force --api --model=Bookable

    $ php artisan make:controller Api/BookableAvailabilityController --invokable
    $ php artisan make:controller Api/BookableReviewController --invokable

    $ php artisan make:controller Api/BookingByReviewController --invokable

    $ php artisan make:controller Api/ReviewController

    $ php artisan make:request BookableAvailabilityRequest

    $ php artisan make:resource BookableReviewIndexResource
    $ php artisan make:resource BookingByReviewShowResource
    $ php artisan make:resource BookingByReviewBookableShowResource



### Clear Cache

https://www.linkedin.com/pulse/how-clear-cache-laravel-using-artisan-command-mohsin-khan/

Clear Application Cache

    $ php artisan cache:clear

Clear Route Cache

    $ php artisan route:clear

Clear Configuration Cache

    $ php artisan config:clear

Clear Compiled Views Cache

    $ php artisan view:clear