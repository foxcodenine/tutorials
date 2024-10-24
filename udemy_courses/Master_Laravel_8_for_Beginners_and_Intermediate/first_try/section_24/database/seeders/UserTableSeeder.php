<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        // Create User jane Doe
        DB::table('users')->insert([
            'name' => 'Jane Doe',
            'email' => 'jane@laravel.test',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),            
        ]);


        // Create 2 users with factory
        User::factory()->count(2)->create();


        // Create 1 users with factory state
        User::factory()->nameEmail('Danine', 'Bartolo@hotmail.com')->create();
   
    }
    // --- USE: $ php artisan db:seed --class=UserTableSeeder
}
