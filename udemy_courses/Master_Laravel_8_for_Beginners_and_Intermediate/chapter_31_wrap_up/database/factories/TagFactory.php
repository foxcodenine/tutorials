<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
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

    public function stateName($name) {

        $params = ['name' => $name ];

        return $this->state($params);
    }
}
