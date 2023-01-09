<?php

namespace App\Models;

use App\Scopes\DeletedAdminScope;
use App\Scopes\LatestScope;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // _________________________________________________________________
    // --- Relation Function

    public function newsPosts() {

        return $this->hasMany(NewsPost::class);
    }

    // --- Relation Function

    public function comments() {

        return $this->hasMany(Comment::class);
    }
    // _________________________________________________________________

    // --- NOTE: boot method - with global Scope

    // public static function boot() {

    //     parent::boot();
    
    //     static::addGlobalScope(new LatestScope);


    // }

    // _________________________________________________________________

    // --- NOTE: local scope Methods

    public function scopeWithMostNewsPosts (Builder $query) {
        return $query->withCount('newsPosts')->orderBy('news_posts_count', 'desc');
    }


    public function scopeWithMostNewsPostsLastMonth (Builder $query) {

        return $query
            ->withCount(
                ['newsPosts' => function(Builder $query) { 
                    return $query->whereBetween(static::CREATED_AT, [ now()->subMonths(1), now() ]);
                }]
            )
            ->has('newsPosts', '>=', 2)
            ->orderBy('news_posts_count', 'desc');    
    }

    // _________________________________________________________________
}
