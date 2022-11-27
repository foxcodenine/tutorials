

### Set-up    
  
    $ composer create-project --prefer-dist laravel/laravel 013_laravelbnb

    $ composer require laravel/ui --dev

    $ php artisan ui vue

    $ npm install && npm run dev

    $ npm install vue-router

    $ composer require barryvdh/laravel-debugbar --dev                  # note using sub-directory domains might not work correctly best use sub-domains


### installing moment js

https://momentjs.com/

    $ npm install moment --save


### installing font awesome

https://fontawesome.com/docs/web/use-with/vue/
https://fontawesome.com/docs/web/use-with/vue/add-icons

1 Install the base Font Awesome SVG library. 

    $ npm i --save @fortawesome/fontawesome-svg-core

2 Next, install a Font Awesome icon set. 

    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/free-brands-svg-icons

3 Then we’ll need to install the Font Awesome Vue component (vue-fontawesome).

    npm i --save @fortawesome/vue-fontawesome@latest-3

4 Check, Add Icons with Vue. You can see the app.js and StarRating.vue for reference.

### Helpers

Arrays & Objects - Illuminate\Support\Arr

    The Arr::random method returns a random value from an array

Sring - Illuminate\Support\Str

    The Str::uuid method generates a UUID (version 4)

### Models

Relationship method:
    If a relationship method is called as a property it will return a collection of all relations.
     and if called as a method it will return a query.


Change Default primary key.
   In the migration I set the id as a uuid, this in mysql is a varchar(36).

    $table->uuid('id')->primary();

   So in the model I overwite the method 'getIncrementing()' 
   to remove auto increment.

   And overwite the method 'getKeyType()' to set id field type as sting:

    class Review extends Model
    {
        use HasFactory;

        public function getIncrementing() {
            return false;
        }

        public function getKeyType()  {
            return 'string';
        }
    }




### Contollers

Single Action Controllers:

If a controller action is particularly complex, you might find it convenient to 
dedicate an entire controller class to that single action. 
To accomplish this, you may define a single __invoke method within the 
controller

    $ php artisan make:controller ProvisionServer --invokable

https://laravel.com/docs/9.x/controllers#single-action-controllers


### Routes

API Resource Routes:

When declaring resource routes that will be consumed by APIs, you will commonly 
want to exclude routes that present HTML templates such as create and edit. 
For convenience, you may use the apiResource method to automatically exclude 
these two routes

    Route::apiResource('photos', PhotoController::class);

https://laravel.com/docs/9.x/controllers#api-resource-routes