<?php

namespace App\Services;

// use Illuminate\Support\Facades\Cache;

use App\Contracts\CounterCountract;
use Illuminate\Contracts\Session\Session;
use Illuminate\Contracts\Cache\Factory as Cache;


// --- NOTICE:

// In this class instead of useing Facades and there helper functions we
// are using Contracts and Dependency Injection.

// So instead of using the Facade classes Cache and Session
// or there helper function cache() and session()

// We are passing the Cache $cache and Session $session in the __constractor
// by Dependency Injection and using $this->cache and $this->session.

// Also in AppSeviceProvider when we bind the Counter class we used the
// 'make' Method 

// https://laravel.com/docs/9.x/contracts#contract-reference
// https://laravel.com/docs/9.x/container#the-make-method



class Counter implements CounterCountract
{
    /* Count how many users are on this page */

    public $timeout;
    private $cache;
    private $session;
    private $supportsTags;
    

    public function __construct (Cache $cache, Session $session, int $timeout=null) 
    {
        $timeout = $timeout ?? env('TIMEOUT_USERS_ON_PAGE');        
        $this->timeout = $timeout;

        $this->cache = $cache;
        $this->session = $session;

        $this->supportsTags = method_exists($cache, 'tags');

    }

    public function increment(string $key, $tags = null): int {


        // ~~~ Cache Counter Functionality
        // ~~~ Follow the image cache-counter in notes file
        
        // This are the keys we use in cashe
        $cachePostCounterKey = "{$key}-counter";
        $cachePostUsersKey = "{$key}-users";

        // Use tags method on the cache instance only if it is supported:
        if ($this->supportsTags && $tags !== null) {
            $cache = $this->cache->tags([$tags]);
        } else {
            $cache = $this->cache;
        }

        // The users current in cache that are visiting this blog post 
        $blogPostUsers = $cache->get($cachePostUsersKey, []);

        // The users that are not expiered and will be save in cache for this blog post 
        $blogPostUsersUpdate = [];

        // This will be used to update the counter
        $difference = 0;

        // current datetime
        $now = now();


        // ~~~ part 1
        // Current user session Id
        $currentUserSessionId = $this->session->getId();

        // ~~~ part 2
        foreach($blogPostUsers as $sessionId => $lastVisted) {

            if($now->diffInMinutes($lastVisted) >= $this->timeout) {
                --$difference;

            } else {
                $blogPostUsersUpdate[$sessionId] = $lastVisted;
            }
        }

        // ~~~ part 3

        if (!array_key_exists($currentUserSessionId, $blogPostUsers)) {
            ++$difference;
            
        } elseif( $now->diffInMinutes($blogPostUsers[$currentUserSessionId]) >= $this->timeout ) {
            ++$difference;
        }

        // ~~~ part 4
        $blogPostUsersUpdate[$currentUserSessionId] = $now;


        // ~~~ part 5
        $cache->forever($cachePostUsersKey, $blogPostUsersUpdate);


        // ~~~ part 6 and 7
        if ($cache->has($cachePostCounterKey)) {
            $cache->increment($cachePostCounterKey, $difference);

        } else {
            $cache->forever($cachePostCounterKey, 1);
        }
        

        return $cache->get($cachePostCounterKey);
    }
}
