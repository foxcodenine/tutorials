<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;



class UsersTableSeeder extends Seeder
{
    // -----------------------------------------------------------------
    use _MySeederTrait;
    // -----------------------------------------------------------------

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {        
        // ----- Createing a defined user -------------------------------
        
        // --- UPDATED:
        // DB::table('users')->insert([
        //     'name' => 'Christopher Farrugia',
        //     'email' => 'chris12aug@yahoo.com',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make(env('MY_TEST_PASSWORD')),
        //     'remember_token' => Str::random(10),

        // ]);
        
        // --- TO:        
        User::factory()->stateNameEmail('Christopher Faruugia','chris12aug@yahoo.com')->create();

        // ----- Creating random users -------------------------------
        $numberOfUsers = max( (int) $this->command->ask('How many users would you like to create', 5), 1);
        User::factory()->count($numberOfUsers)->create();
        
        // _____________________________________________________________
        // Adding defined user and random users to a single collection:

        // $chris  = User::factory()->stateNameEmail('Christopher Faruugia','chris12aug@yahoo.com')->create();
        // $others = User::factory()->count(5)->create();

        // $users_collection = $others->concat([$chris]);
        // _____________________________________________________________
    }
}
