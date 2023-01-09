<!-- https://github.com/FakerPHP/Faker -->
<!-- Faker docs : https://fakerphp.github.io/ -->
<!-- https://github.com/fzaninotto/Faker    (now archived)-->

### ---- Methods -------------------------------------------------------

    User::factory()->count(5)->create();


### ---- Creating Factory ----------------------------------------------

```bash

    $ php artisan make:factory CommentFactory --model=Comment

    $ php artisan make:factory BlogPostFactory --model=BlogPost

    $ php artisan make:factory AuthorFactory  --model=Author

    $ php artisan make:factory ProfileFactory --model=Profile

```

### ---- Defining Factory ----------------------------------------------

```php
    class CommentFactory extends Factory {

        // --- NOTICE: in laravel 9 this is to be updated to:
        // 'content' => fake()->text,

        // https://laravel.com/docs/8.x/database-testing#instantiating-models
        // https://laravel.com/docs/9.x/database-testing#concept-overview

        // --- USE: Comment::factory( )->create(['blog_post_id' => 1]);
        //          Comment::factory(4)->create(['blog_post_id' => 2]);
        //          Comment::factory( )->count(4)->create(['blog_post_id' => 2]);

        public function definition() {   
            return [
                'content' => $this->faker->text,                
            ];
        }
    }
```