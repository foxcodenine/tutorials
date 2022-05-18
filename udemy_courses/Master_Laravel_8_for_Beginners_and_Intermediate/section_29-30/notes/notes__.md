### Starting new Laravel project:

    $ composer create-project laravel/laravel="8.4.*" section_7




### Listing all routes:

    $ php artisan route:list




### Create a controller:

    $ php artisan make:controller HomeController




### Create a resource controller:

    $ php artisan make:controller NewsController --resource




### Make Custom validation

    >>> php artisan make:request StoreNews


### Bootstrap 5
In bootstrap 5, use ms-auto instead of ml-auto and me-auto instead of mr-auto.

    <ul className="navbar-nav ms-auto">
    <ul className="navbar-nav me-auto">


### npm auto complition

    $ npm completion >> ~/.bashrc


### npm Policies

    $ php artisan make:policy NewsPostPolicy

    or

    $ php artisan make:policy NewsPostPolicy --model=NewsPost


### How to declare $faker in the seed file in Laravel

It's good idea to keep things consistent, 
so I did it the same way as the Factory class does it:

```php CommentsTableSeeder.php

    use Faker\Generator;
    use Illuminate\Container\Container;
    // .............

    class CommentsTableSeeder extends Seeder {


        protected $faker;

        public function __construct() {
            $this->faker = $this->withFaker();
        }

        protected function withFaker() {
            return Container::getInstance()->make(Generator::class);
        }

        // .............

    }
```

### Create a component 

```bash

    $ php artisan make:component Alert

    $ php artisan make:component forms.input
```
Documentation:

    https://laravel.com/docs/9.x/blade#components



### laravel-debugbar

https://github.com/barryvdh/laravel-debugbar

install:

    $ composer require barryvdh/laravel-debugbar --dev


### Clearing the cashe

    $ php artisan cache:clear

    or

    $ php artisan view:clear


### redis

Install pedis/predis:

    $ composer require predis/predis

In config/database.php change:

        from:
        'client' => env('REDIS_CLIENT', 'phpredis'),

        to
        'client' => env('REDIS_CLIENT', 'predis'),

In .env update:

    CACHE_DRIVER=redis
    REDIS_PASSWORD=*********

And also check that redis is running

    $ sudo systemctl  status redis-server.service

You might need to install php-redis

    $ sudo apt-get install php8.1-redis


In tinker:

```php 

>>> Cache::tags(['people', 'artists'])->put('Anne', 'Hello I\'m Anne', 300);
=> true

>>> Cache::tags(['people', 'artists'])->get('Anne');
=> "Hello I'm Anne"

>>> Cache::tags(['people', 'authors'])->put('John', 'Hello I\'m John', 300);
=> true

>>> Cache::tags(['people', 'authors'])->get('John');
=> "Hello I'm John"


>>> Cache::tags(['people'])->flush();
=> true
>>> Cache::tags(['people', 'artists'])->get('Anne');
=> null
>>> Cache::tags(['people', 'authors'])->get('John');
=> null
```



