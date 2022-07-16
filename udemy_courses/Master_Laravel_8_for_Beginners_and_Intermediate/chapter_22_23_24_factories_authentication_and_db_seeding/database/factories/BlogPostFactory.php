<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(5, true),
            'content' => $this->faker->paragraph(50, true),
            'image_url' => $this->faker->imageUrl(480, 480, 'animals', true)
        ];
    }

    // --- USE: BlogPost::factory()->create();
    // --- OR:  BlogPost::factory()->count(5)->create();


    public function stateTitle($title='New Title') {

        $params = [
            'title'     => $title,
            'content'   => $this->faker->paragraph(50, true),
            'image_url' => $this->faker->imageUrl(480, 480, 'animals', true)
        ];

        return $this->state($params);
    }
    // --- USE: BlogPost::factory()->stateTitle('My New Title')->create();

    public function stateUser($user) {

        $date = $this->faker->dateTimeBetween($user->created_at, 'now');

        $params = [
            'user_id' => $user->id,
            'created_at' => $date,
            'updated_at' => $date,

        ];
        return $this->state($params);
    }
    // --- USE: BlogPost::factory()->stateUser($user)->create();
}
