<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Bookable extends Model
{
    use HasFactory;
    // protected $table = 'bookables';

    protected $fillable = ['title', 'description'];  


    // ----- Relationships ---------------------------------------------

    public function bookings() {
        return $this->hasMany(Booking::class);
    }

    public function reviews () {
        return $this->hasMany(Review::class);
    }

    
    
    // --- Business logic ----------------------------------------------
    // --- Normaly we put this in a controller not a model.
    
    // (Business logic means the central part of the program that
    // actually solves the problem the user has. Things in it (classes,
    // functions, etc.) are often named after entities in real life.)
    
    public function availableFor($from, $to): bool {
        return 0 === $this->bookings()->betweenDates($from, $to)->count();
        // Note. ->betweenDates() is a local scope
    }
    
    
    public function priceFor ($from, $to): array {
        $days = (new Carbon($from))->diffInDays(new Carbon($to)) + 1;
        $price = $days * $this->price;
        
        return [
            'total' => $price,
            'breakdown' => [ $this->price => $days ]
        ];
    }
}
    // -----------------------------------------------------------------
