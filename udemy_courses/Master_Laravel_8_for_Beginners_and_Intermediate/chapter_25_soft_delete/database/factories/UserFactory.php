<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $date = $this->faker->dateTimeBetween('-6 months', 'now');

        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => $date,
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }

    public function stateNameEmail($name, $email) {

        $params = [
            'name' => $name,
            'email' => $email,
            'password' => Hash::make(env('MY_TEST_PASSWORD')),
        ];
        return $this->state($params);
    }

    // --- USE:
    // User::factory()->stateNameEmail('Christopher Faruugia','chris12aug@yahoo.com')->create();

}
