<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'content', 'rating'];  

    /** Get the value indicating whether the IDs are incrementing. */
    public function getIncrementing()
    {
        return false;
    }

    /** Get the auto-incrementing key type. */
    public function getKeyType()
    {
        return 'string';
    }

    // ----- Relationships ---------------------------------------------

    public function bookable() {
        return $this->belongsTo(Bookable::class);
    }

    public function booking() {
        return $this->belongsTo(Booking::class);
    }
}
