<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsPost extends Model
{   
    // --- to use NewsPost::create()  &  NewPost::make()
    protected $fillable = ['title', 'author', 'publishedAt', 'urlToImage', 'content'];
    
    use HasFactory;
}
