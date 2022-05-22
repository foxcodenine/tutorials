<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// php artisan make:model Tag

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function newsPosts() {
        return $this->belongsToMany( NewsPost::class )->withTimestamps();
        // --- Explanation: (watch video 168. Defining ManyToMany on models)

        // --- rename the pivote (this should be done on both sides of the relation)
        // --- not recomanded
        // return $this->belongsToMany( NewsPost::class )->withTimestamps()->as('tagged');
    }
}
