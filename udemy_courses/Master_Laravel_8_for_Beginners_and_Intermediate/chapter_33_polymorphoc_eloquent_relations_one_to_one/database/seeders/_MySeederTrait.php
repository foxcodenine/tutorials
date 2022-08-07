<?php
namespace Database\Seeders;

use Illuminate\Container\Container;
use Faker\Generator;

trait _MySeederTrait {

    // -----------------------------------------------------------------

    // <- MY THING

    // --- NOTE: Here I added faker to this class.
    // --- I coped The Factory.php and follwed this Example:
    // https://stackoverflow.com/questions/62719262/how-to-declare-faker-in-the-seed-file-in-laravel-when-overriding-for-argument-t

    public function __construct() {
        $this->faker = $this->withFaker();
     
    }

    protected function withFaker() {        
        return Container::getInstance()->make(Generator::class);
    }
    // <- MY THING
    
    
    // -----------------------------------------------------------------
}