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
    $ php artisan help

    $ php artisan make:controller HomeController
    $ php artisan make:controller PostController --resource

    $ php artisan migrate
    $ php artisan migrate:rollback
    $ php artisan migrate:refresh
    $ php artisan db:seed
    $ php artisan migrate:refresh --seed

    $ php artisan db:seed --class=UsersTableSeeder
    $ php artisan db:seed --class=BlogPostsTableSeeder
    $ php artisan db:seed --class=CommentsSeeder

    $ php artisan make:model BlogPost -m
    $ php artisan make:model Author --migration
    $ php artisan make:model Profile --migration
    $ php artisan make:model Comment -m
    $ php artisan make:model Tag --migration

    $ php artisan make:seeder UsersTableSeeder
    $ php artisan make:seeder BlogPostsTableSeeder
    $ php artisan make:seeder CommentsTableSeeder



    $ php artisan make:migration add_image_to_blog_posts_table --table=blog_posts
    $ php artisan make:migration add_user_to_blog_posts_table --table=blog_posts
    $ php artisan make:migration add_cascade_delete_to_comments_table  --table=comments

    $ php artisan make:migration create_blog_post_tag_table --create=blog_post_tag

    php artisan make:factory BlogPostFactory --model=BlogPost

    $ php artisan make:request StorePostRequest

    $ php artisan make:policy BlogPostPolicy
    $ php artisan make:policy BlogPostPolicy --model=BlogPost

    $ php artisan optimize
    
    $ php artisan config:clear

    php artisan make:scope LatestScope

    $ php artisan tinker

### ------ Errors ------------------------------------------------------
    $errors->any()
    $errors->all()

    @error('title')
        <div>{{ $message }}</div>
    @enderror

    



