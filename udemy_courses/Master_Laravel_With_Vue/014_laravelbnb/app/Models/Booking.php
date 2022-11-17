<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['from', 'to'];  

    // ----- Relationships ---------------------------------------------

    public function bookable() {
        return $this->belongsTo(Bookable::class);
    }

    // ----- Local Scope -----------------------------------------------

    public function scopeBetweenDates(Builder $query, $from , $to) {
        
        return $query->where('to', '>=', $from )
            ->where('from', '<=', $to);
    }
}
