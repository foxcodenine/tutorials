<?php

namespace Database\Seeders;

use App\Models\NewsPost;
use App\Models\User;
use Illuminate\Database\Seeder;

class NewsPostTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        $newsCount = max( (int) $this->command->ask('How many news post would you like?', 20), 1 );

        $users = User::all();

        $newsPosts = NewsPost::factory()->count($newsCount )->make();

        $newsPosts->each(function($item, $key) use ($users) {
            $item->user_id = $users->random()->id;
            $item->save();
        }); 
    }

    // --- USE: $ php artisan db:seed --class=NewsPostTableSeeder
}
