<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookable extends Model
{
    use HasFactory;
    // protected $table = 'bookables';

    protected $fillable = ['title', 'description'];  


    // ----- Relationships ---------------------------------------------

    public function bookings() {
        return $this->hasMany(Booking::class);
    }

    // -----------------------------------------------------------------

    public function availableFor($from, $to): bool{
        return 0 === $this->bookings()->betweenDates($from, $to)->count();
        // Note. ->betweenDates() is a local scope
    }
}
