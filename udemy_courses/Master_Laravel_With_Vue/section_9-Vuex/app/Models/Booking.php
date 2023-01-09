<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['from', 'to'];  

    // ----- Relationships ---------------------------------------------

    public function bookable() {
        return $this->belongsTo(Bookable::class);
    }

    public function review () {
        return $this->hasOne(Review::class);
    }

    // ----- Local Scope -----------------------------------------------

    public function scopeBetweenDates(Builder $query, $from , $to) {
        
        return $query->where('to', '>=', $from )
            ->where('from', '<=', $to);
    }                                                    

    // ----- Boot Function ---------------------------------------------

    protected static function boot() {

        parent::boot();

        //  - You can also use an observer to handle all the different  
        //    life cycle events
        static::creating(function($booking) {
            $booking->review_key = Str::uuid();
        });
    }

    // ----- Custom Function -------------------------------------------

    public static function findByReviewKey(string $reviewKey): ?Booking {

        return static::where('review_key', $reviewKey)->with('bookable')->get()->first();
    }
}
