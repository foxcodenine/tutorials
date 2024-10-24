<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;

// use Faker\Generator as Faker;

class CommentFactory extends Factory
{


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'content' => $this->faker->text,
        ];
    }
}


