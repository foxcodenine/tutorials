<?php

namespace Database\Seeders;


use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\User;
use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    // -----------------------------------------------------------------
    use _MySeederTrait;
    // -----------------------------------------------------------------

    public function run() {
  
        Cache::tags(['blog-post'])->flush();
        
        if($this->command->confirm('Do you wish to refreash the database?', true))
        {
            $this->command->call('migrate:refresh');
            $this->command->info("Database was refreashed");

            // https://laravel.com/api/9.x/Illuminate/Database/Console/Seeds/SeedCommand.html
     
        }

        $this->call([
            UsersTableSeeder::class,
            BlogPostsTableSeeder::class,
            CommentsTableSeeder::class
        ]);
        
    }
}
