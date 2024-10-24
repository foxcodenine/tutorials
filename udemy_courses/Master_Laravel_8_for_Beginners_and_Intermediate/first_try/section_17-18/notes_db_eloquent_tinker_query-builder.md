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


### Tinker and Eloquent ORM

    $ php  artisan  tinker

    >>> $news = new NewsPost();
    >>> $news->title = 'Erik ten Hag is the new Manchester United manager';
    >>> $news->author = 'the guardian';

    >>> $news->save();

    >>> $new1 = NewsPost::find(1);

    >>> $new1_2_3 = NewsPost::find([1, 2, 3]);

    >>> $news1000 = NewsPost::findOrFail(1000);

    >>> $allNews  = NewsPost::all();

    >>> $allNews[0];

    >>> $allNews->first();

    >>> $allNews->count();

    Check: https://laravel.com/docs/9.x/eloquent


### Query Builder

    # creating 5 default users
    >>> User::factoy()->count(5)->create();

    # quering these users
    >>> User::where('id', '>=', 2)->orderBy('id', 'desc')->get();