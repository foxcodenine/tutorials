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