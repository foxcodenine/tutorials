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

