<?php

namespace Database\Seeders;

use App\Models\Bookable;
use App\Models\Booking;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Bookable::all()->each(function(Bookable $bookable) {

            $booking = Booking::factory()->make();
            $bookings = collect(([$booking]));

            for ($i = 0; $i < random_int(1, 20); $i++) {
                $from = (clone $booking->to)->addDays(random_int(1, 14));
                $to = (clone $from)->addDays(random_int(0, 14));
                $price = random_int(200, 5000);
                
                $booking = Booking::make(['from' => $from, 'to' => $to, 'price' => $price]);

                $bookings->push($booking);
            }

            $bookable->bookings()->saveMany($bookings);
        });
    }
}
