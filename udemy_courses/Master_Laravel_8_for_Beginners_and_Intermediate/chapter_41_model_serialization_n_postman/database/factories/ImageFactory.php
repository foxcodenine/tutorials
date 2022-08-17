<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $id = rand(1, 500);
        return [
            // 'path' => $this->faker->imageUrl(480, 480, 'animals', true)
            
            // 'path' => 'https://loremflickr.com/640/480/animals'

            
            'path' => "https://picsum.photos/id/{$id}/1200/600"
        ];
    }
}
