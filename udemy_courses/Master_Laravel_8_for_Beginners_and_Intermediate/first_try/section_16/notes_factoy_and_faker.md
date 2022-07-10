<!-- https://github.com/FakerPHP/Faker -->
<!-- Faker docs : https://fakerphp.github.io/ -->
<!-- https://github.com/fzaninotto/Faker    (now archived)-->


```bash

    $ php artisan make:factory CommentFactory --model=Comment

    $ php artisan make:factory AuthorFactory  --model=Author

    $ php artisan make:factory ProfileFactory --model=Profile

```

<!-- https://laravel.com/docs/8.x/database-testing#instantiating-models -->


```php tinker

    // --- UPDATED: 
    factory('App\Model\Comment')->create(['news_post_id' => 27]);
    
    // --- TO:
    Comment::factory()->create(['news_post_id' => 27]);

```