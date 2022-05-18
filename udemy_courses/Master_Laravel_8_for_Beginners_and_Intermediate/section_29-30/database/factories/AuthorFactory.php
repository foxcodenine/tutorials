<?php

namespace Database\Factories;

use App\Models\Profile;
use Closure;
use Illuminate\Database\Eloquent\Factories\Factory;

class AuthorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
        ];
    }

    // _________________________________________________________________


    public function createAuthWithProfile() {

        /** Trying the Factory::afterCreating(Closure $callback) method */

        $callBack = function($newAuthor) {
            $newProfile = new Profile();              
            return $newAuthor->profile()->save($newProfile);
        };

        return $this->afterCreating($callBack)->create();
    }

    // --- USE: Author::factory()->createAuthWithProfile();

     /** There is also  Factory::afterMaking(Closure $callback) method */

    // _________________________________________________________________

}


