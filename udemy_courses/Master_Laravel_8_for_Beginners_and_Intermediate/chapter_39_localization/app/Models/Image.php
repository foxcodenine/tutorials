<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class Image extends Model
{
    use HasFactory;
    use SoftDeletes;

protected $fillable = ['path', /*'blog_post_id'*/];

    static protected $default = '/images/fox.jpg';
    static protected $four0four = '/images/404.png';
    
    // _________________________________________________________________


    public static function default() {
        return URL::asset(static::$default);
    }

    public static function four0four() {
        return URL::asset(static::$four0four);
    }
    

    // ----- Relationship Methods --------------------------------------

    // --- UPDATED:
    // public function blogPost() {
    //     return $this->belongsTo(BlogPost::class);        
    // }
    // --- TO:
    public function imageable()
    {
        return $this->morphTo();
    }

    // _________________________________________________________________

    public function url () {
        $path = $this->path;

        if (in_array(substr($path, 0, 7), ['http://', 'https:/'], true) ) {
            return $path;
        }

        return Storage::url($path);       
    }
}
