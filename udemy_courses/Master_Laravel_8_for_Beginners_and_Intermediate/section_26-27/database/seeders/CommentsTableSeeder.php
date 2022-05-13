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
        $newsPosts = NewsPost::all();

        if ($newsPosts->count() < 1) {
            $this->command->info('There are no news, so no comments will be added!');
            return;
        } 

        $commentsCount = (int) $this->command->ask('How many news post would you like?', 100);
        
        $comments = Comment::factory()->count($commentsCount)->make();

        // dd( $this->fake);

        $comments->each(function ($item, $key) use ($newsPosts) {

            $newsPost = $newsPosts->random();
            $item->news_post_id = $newsPost->id;
            $item->created_at =  $this->faker->dateTimeBetween($newsPost->created_at, 'now');  // <- MY THING
            $item->save();
        });

        // --- USE: $ php artisan db:seed --class=CommentsTableSeeder
    }
}
