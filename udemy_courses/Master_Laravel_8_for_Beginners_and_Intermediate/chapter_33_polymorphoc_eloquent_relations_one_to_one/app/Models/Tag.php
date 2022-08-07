<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name'];
    use HasFactory;

    // ----- Relationship Methods --------------------------------------



    public function blogPosts() {        

        return $this->belongsToMany( BlogPost::class )->withTimestamps()
        // ->as('tagged')  // this will rename the relation column pivot
        ;

        // --- Explanation: (watch video 168. Defining ManyToMany on models)

        // --- rename the pivote (this should be done on both sides of the relation)
        // --- not recomanded
        // return $this->belongsToMany( BlogPost::class )->withTimestamps()->as('tagged');
    }
}
