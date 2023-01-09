### Verifing permitions of user using gates

```php tinker

    >>> $user = User::find(4);

    >>> $news2 = NewsPost::find(2);
    >>> $news3 = NewsPost::find(3);


    >>> Gate::forUser($user)->denies('update-newspost', $news2);
    => true

    >>> Gate::forUser($user)->denies('update-newspost', $news3);
    => false

    >>> Gate::forUser($user)->allows('update-newspost', $news2);
    => false

    >>> Gate::forUser($user)->allows('update-newspost', $news3);
    => true

```
------------------------------------------------------------------------


### Cache

```php tinker




>>> Cache::put('data', 'Hello from cache', 5);
=> true
>>> Cache::has('data');
=> true
>>> Cache::has('data');
=> false


>>> Cache::put('data', 'Hello from cache', 60);
=> true
>>> Cache::get('data');
=> "Hello from cache"


>>> Cache::get('data2', 'Default data');
=> "Default data"


>>> Cache::put('counter', 10, 60);
=> true
>>> Cache::increment('counter');
=> 11
>>> Cache::increment('counter');
=> 12

>>> Cache::put('counter', 10, 60);
=> true
>>> Cache::increment('counter');
=> 11
>>> Cache::increment('counter');
=> 12
>>> Cache::increment('counter');
=> 13

//  after 60 sec
>>> Cache::increment('counter');
=> 1
>>> Cache::decrement('counter');
=> 0
