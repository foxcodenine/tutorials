<?php

namespace Database\Seeders;

use App\Models\Bookable;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *s
     * @return void
     */
    public function run()
    {
        $users = Bookable::factory()->count(100)->create();
    }
}
