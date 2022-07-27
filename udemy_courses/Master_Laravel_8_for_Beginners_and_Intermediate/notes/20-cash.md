### ~~~ laravel-debugbar

https://github.com/barryvdh/laravel-debugbar

install:

    $ composer require barryvdh/laravel-debugbar --dev


### ~~~ Clearing the cashe

    $ php artisan cache:clear

    or

    $ php artisan view:clear


### ~~~ redis

installing redis on Ubuntu:

    $ sudo apt update

    $ sudo apt install redis-server

Open this file with your preferred text editor:
Set Password, superviserd and maxmemory

    $ sudo vi /etc/redis/redis.conf

    requirepass **_your_redis_password_**

    supervised set_to_auto_or_systemd Ex:   supervised auto

    maxmemory 41943040



Restart the Redis service:

    $ sudo systemctl restart redis-server.service


use Redis cli

    $ redis-cli

    127.0.0.1:6379> auth **_your_redis_password_**

    127.0.0.1:6379> info memory

    127.0.0.1:6379> config get maxmemory


Install pedis/predis:
This is a redis client for PHP 7.2 and newer

    $ composer require predis/predis


Updaed config/database.php ,  change:

    from:
    'client' => env('REDIS_CLIENT', 'phpredis'),

    to
    'client' => env('REDIS_CLIENT', 'predis'),
    

Update .env:

    CACHE_DRIVER=redis
    REDIS_PASSWORD=*********

If you areusing redis cloud service set REDIS_CACHE_DB to 0 in the .env file

    REDIS_CACHE_DB=0


And also check that redis is running

    $ sudo systemctl  status redis-server.service


You might need to install php-redis

    $ sudo apt-get install php8.1-redis



<!-- --------------------------------------------------------------- -->

### ~~~ Cache function 

```php 

// --- remember:

    $value = Cache::remember('users', $seconds, function () {
        return DB::table('users')->get();
    });

// --- forever:

    Cache::forever('key', 'value');

// --- forget:

    Cache::forget('key');

// --- push:

    Cache::put('key', 'value', now()->addMinutes(10));

// --- has:

    Cache::has('key');

// --- get:

    Cache::get('key');

    Cache::get('key', 'defsult');

// --- Incrementing / Decrementing Values

    Cache::increment('key');
    Cache::increment('key', $amount);
    Cache::decrement('key');
    Cache::decrement('key', $amount);

```

### ~~~ Using Tages ( tags & flush methods ):
```php 
>>> Cache::tags(['p','a'])->put('John', 'Hello I am John');

>>> Cache::get('John');
=> null

>>> Cache::tags(['p','a'])->get('John');
=> "Hello I am John"

>>> Cache::tags(['p','u'])->put('Anne', 'Hello I am Anne');
=> true

>>> Cache::tags('p')->flush();
=> true

>>> Cache::tags(['p'])->get('John');
=> null
```