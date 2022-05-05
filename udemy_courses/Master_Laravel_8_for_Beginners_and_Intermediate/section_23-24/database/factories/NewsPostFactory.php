<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NewsPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'         => $this->faker->sentence(5, true),
            'author'        => $this->faker->sentence(2, false),
            'publishedAt'   => $this->faker->iso8601() ,
            'urlToImage'    => $this->faker->imageUrl(),
            'content'       => $this->faker->paragraphs(5, true),
        ];

        // --- USE: NewsPost::factory()->create();
        // --- OR:  NewsPost::factory()->count(5)->create();
    }


    // _________________________________________________________________
    

    public function newTitle (string $author='Chris Farugia') {    
        
        /** Trying the Factory::state($state) method */

        $params = [
            'title'         => 'New Title',
            'author'        => $author,
            'publishedAt'   => $this->faker->iso8601() ,
            'urlToImage'    => $this->faker->imageUrl(),
            'content'       => $this->faker->paragraphs(5, true),
        ];

        return $this->state($params);

        // --- USE: NewsPost::factory()->newTitle()->create(); 
    }
}
