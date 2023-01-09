<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model {

    protected $fillable = ['content', 'news_post_id'];

    use HasFactory;

    use SoftDeletes;
    // _________________________________________________________________

    public function newsPost() {

        return $this->belongsTo(NewsPost::class, 'news_post_id', 'id');

        /**  
         * 1st param -  Is the Class it belongs to.
         * 
         * 2nd is Optional - It is the column name in the db table 
         * and migration (in case you didn't use default);
         * 
         * 3rd is Optional - It is the primary key (in this case of NewsPost)
         * that the foriegn key is pointing, in case it is not default
         * 
         */
    }
}
