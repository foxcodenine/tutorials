<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MyDefaultDbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() { 
        
        // A Seeder class that call other seeders in order 
        // To be used insted of the default class (DatabaseSeeder.php)

        

        // --- prompt to refresh the db

        if ($this->command->confirm('Refresh the database?')) {

            $this->command->call('migrate:refresh');
            $this->command->info('Database was refreshed');
        }

        // --- call the seeders classes

        $this->call([
            UserTableSeeder::class,
            NewsPostTableSeeder::class,
            CommentsTableSeeder::class
        ]);

        // --- USE: $ php artisan db:seed --class=MyDefaultDbSeeder
    }
}
