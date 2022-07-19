<?php

namespace Database\Factories;

use App\Models\Profile;
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


    public function createAuthorWithProfile () {

        /** Trying the Factory::afterCreating(Closure $callback) method */

        $callback = function($newAuthor) {
            
            // $profile = new Profile();

            $profile = Profile::factory()->make();

            return $newAuthor->profile()->save($profile);

        };

        return $this->afterCreating($callback);

        /** There is also  Factory::afterMaking(Closure $callback) method */

        // --- USE: Author::factory()->createAuthorWithProfile()->create();

    }
}
