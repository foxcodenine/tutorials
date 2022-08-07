<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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

    // --- NOTICE: in laravel 9 this has been changed to:
    // 'content' => fake()->text,

    // ~~~ check Notes: 12-model-factories.md

    // --- USE: Comment::factory()->create(['blog_post_id' => 1]);
    // --- OR:  Comment::factory()->count(2)->create(['blog_post_id' => 1]);
    
}
