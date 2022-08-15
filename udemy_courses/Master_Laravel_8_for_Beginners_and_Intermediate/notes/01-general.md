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
    $ php artisan make:controller UserController --resource --model=User

    $ php artisan make:controller PostCommentController

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
    $ php artisan make:request StoreCommentRequest

    

    $ php artisan make:policy BlogPostPolicy
    $ php artisan make:policy BlogPostPolicy --model=BlogPost
    $ php artisan make:policy UserPolicy --model=User

    $ php artisan optimize
    
    $ php artisan config:clear

    php artisan make:scope LatestScope

    $ php artisan tinker

    $ php artisan make:mail CommentPostedMail
    $ php artisan make:mail CommentPostedMarkdownMail --markdown=emails.posts.commented-markdown
    $ php artisan make:mail BlogPostAddedMarkdownMail --markdown=emails.posts.blog-post-added-markdown

    $ php artisan vendor:publish --tag=laravel-mail

    $ php artisan queue:table
    $ php artisan queue:failed-table
    $ php artisan migrate

    $ php artisan queue:work 
    $ php artisan queue:work --tries=3
    $ php artisan queue:work --tries=3 --timeout=10
    $ php artisan queue:work --tries=3 --timeout=10 --queue=high,default,low
    
    $ php artisan queue:failed 

    $ php artisan queue:restart
    $ php artisan queue:retry 36d32250-34d5-4aa3-9ce0-b1a7b70917a2


    $ php artisan make:job notify_users_when_post_was_commented

    $ php artisan storage:link

    $ php artisan make:event CommentPostedEvent

    $ php artisan make:event BlogPostPostedEvent

    $ php artisan make:listener NotifyListener

    $ php artisan make:listener NotifyAdminWhenBlogPostCreatedListener

    $ php artisan make:observer BlogPostObserver --model=BlogPost

    $ php artisan make:middleware LocaleMiddleware

    $ php artisan make:middleware EnsureTokenIsValid

    $ php artisan make:service Counter

    $ php artisan make:contract CounterCountract

### ------ Queue Prosess on a Server -----------------------------------

You can run the following:

    $ nohup php artisan queue:work --daemon &

You can also try a screens

Best:

    use systemd or better intall Supervisor on Ubuntu:

    https://www.atlantic.net/vps-hosting/how-to-install-and-configure-supervisor-on-ubuntu-20-04/
    https://stackoverflow.com/questions/28623001/how-to-keep-laravel-queue-system-running-on-server

### ------ Errors ------------------------------------------------------
    $errors->any()
    $errors->all()

    @error('title')
        <div>{{ $message }}</div>
    @enderror

### ------ Email image embed -------------------------------------------

    $message->embed('path/to/image')

### ------ Sites -------------------------------------------------------

    https://regex101.com/
    https://diverseui.com/ 
    https://mailtrap.io/

    https://httpd.apache.org/docs/2.4/rewrite/intro.html
    https://httpd.apache.org/docs/current/mod/mod_rewrite.html
    https://httpd.apache.org/docs/2.4/en/rewrite/remapping.html


