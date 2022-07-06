<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Container\Container;

use App\Models\Comment;
use App\Models\NewsPost;
use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{

    // _________________________________________________________________
    // --- NOTE: Here I added faker to this class.
    // --- I coped The Factory.php and follwed this Example:
    // https://stackoverflow.com/questions/62719262/how-to-declare-faker-in-the-seed-file-in-laravel-when-overriding-for-argument-t

    // <- MY THING
    protected $faker;

    public function __construct() {
        $this->faker = $this->withFaker();
    }

    protected function withFaker() {
        return Container::getInstance()->make(Generator::class);
    }
    // <- MY THING
    
    // _________________________________________________________________

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        // --- Fetch all NewsPosts
        $newsPosts = NewsPost::all();

        // --- Garde / Check if NewsPosts is empty
        if ($newsPosts->count() < 1) {
            $this->command->info('There are no news, so no comments will be added!');
            return;
        } 

        // --- Ask how many comments you like
        $commentsCount = (int) $this->command->ask('How many comments would you like?', 100);
        

        // --- Making and saving the comments
        
        $comments = Comment::factory()->count($commentsCount)->make();


        $comments->each(function ($item, $key) use ($newsPosts) {

            $newsPost = $newsPosts->random();
            $item->news_post_id = $newsPost->id;
            $item->created_at =  $this->faker->dateTimeBetween($newsPost->created_at, 'now');  // <- MY THING
            $item->save();
        });

        // --- USE: $ php artisan db:seed --class=CommentsTableSeeder
    }
}
