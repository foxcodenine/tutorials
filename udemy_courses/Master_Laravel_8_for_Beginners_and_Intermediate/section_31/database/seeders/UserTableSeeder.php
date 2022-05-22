<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Container\Container;

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


    public function run() {

        // Create User jane Doe
        DB::table('users')->insert([
            'name' => 'Jane Doe',
            'email' => 'jane@laravel.test',
            'email_verified_at' => now(),
            'created_at' => $this->faker->dateTimeBetween('-6 months', 'now'),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),            
        ]);


        // Create 2 users with factory
        User::factory()->count(2)->create();


        // Create 1 users with factory state
        $danine = User::factory()->nameEmail('Danine Bartolo', 'daninebartolo@gmail.com')->make();
        $danine->is_admin = true;
        $danine->save();
   
    }
    // --- USE: $ php artisan db:seed --class=UserTableSeeder
}
