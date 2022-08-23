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
        $numberOfUsers = max( (int) $this->command->ask('How many users would you like to create', 5), 1);
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
        User::factory()->stateNameEmail('Christopher Farrugia','chris12aug@yahoo.com')->create();
        // User::factory()->stateNameEmail('Christopher Farrugia 2','chris12aug@gmail.com')->create();
        // User::factory()->stateNameEmail('Christopher Farrugia 3','chrismariojimmy@yahoo.com')->create();
        
        if ($numberOfUsers >= 2) {
            User::factory()->stateNameEmail('Dorothy Cassar','foxcode9@gmail.com', true)->create();
        }
        // ----- Creating random users -------------------------------
        if ($numberOfUsers > 2) {
            User::factory()->count($numberOfUsers - 2)->create();
        }
        
        // _____________________________________________________________
        // Adding defined user and random users to a single collection:

        // $chris  = User::factory()->stateNameEmail('Christopher Faruugia','chris12aug@yahoo.com')->create();
        // $others = User::factory()->count(5)->create();

        // $users_collection = $others->concat([$chris]);
        // _____________________________________________________________
    }
}
