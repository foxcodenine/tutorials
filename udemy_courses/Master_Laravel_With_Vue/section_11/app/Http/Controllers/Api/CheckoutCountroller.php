<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Bookable;
use App\Models\Booking;
use Illuminate\Http\Request;

class CheckoutCountroller extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // --- Validating
        $data = $request->validate([
            'bookings' => 'required|array|min:1',

            'bookings.*.bookable_id' => 'required|exists:bookables,id',         // <~ validating nested array
            'bookings.*.from'        => 'required|date|after_or_equal:today',
            'bookings.*.to'          => 'required|date|after_or_equal:bookings.*.from',

            'customer.firstname' => 'required|min:2',                       
            'customer.lastname' => 'required|min:2',                            // <~ validating object properties
            'customer.street'   => 'required|min:2',
            'customer.city'     => 'required|min:2',
            'customer.email'    => 'required|email',
            'customer.country'   => 'required|min:2',
            'customer.state'    => 'required|min:2',
            'customer.zip'      => 'required|min:2',

            // * Closures Validation: 
            // * (we created an other validation so we fist validate that we have all fields)
            // 'bookings.*' => ['required', function ($attribute, $value, $fail) {
            //     $bookable = Bookable::findOrFail($value['bookable_id']);

            //     if (!$bookable->availableFor($value['from'], $value['to'])) {
            //         $fail('The object is not available in the given dates!');
            //     }
            // }]

        ]);

        // * Closures Validation: 
        // * (Laravel will remove fields that are not validated, 
        // * so we did the array_merge so we don't loss the previouse validated fields)
        $data = array_merge($data, $request->validate([
            // * Closures Validation:
            'bookings.*' => ['required', function ($attribute, $value, $fail) {
                $bookable = Bookable::findOrFail($value['bookable_id']);

                if (!$bookable->availableFor($value['from'], $value['to'])) {
                    $fail('The object is not available in the given dates!');
                }
            }]
        ]));

        // --- create bookings

        $bookingsData = $data['bookings'];
        $addressData = $data['customer'];

        $bookings = collect($bookingsData)->map(function ($bookingData) use ($addressData) {

            $bookable = Bookable::findOrFail($bookingData['bookable_id']);

            $booking = new Booking();
            $booking->from = $bookingData['from'];
            $booking->to = $bookingData['to'];

            $booking->price = $bookable->priceFor(
                $bookingData['from'], $bookingData['to']
            )['total'];

            $booking->bookable()->associate($bookable);
            $booking->address()->associate(Address::create($addressData));

            $booking->save();

            return $booking;
        });

        return $bookings;
    }
}
