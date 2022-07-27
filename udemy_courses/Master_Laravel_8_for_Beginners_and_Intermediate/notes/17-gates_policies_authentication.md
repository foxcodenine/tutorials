
### ----- Defining a gate in AuthServiceProvider boot method:

```php       
        Gate::define('blogpost.update',function($user, $blogPost) {
            return $user->id === $blogPost->user_id;
        });
```

The gate methods for authorizing abilities:
allows, denies, check, any, none, authorize, can and cannot

and the authorization Blade directives (@can, @cannot, @canany)

<!-- https://laravel.com/docs/9.x/authorization#gates-supplying-additional-context -->

### ----- Gate::denies() :

```php 
        if (Gate::denies('blogpost.delete', $currentPost)) {
            abort(403, 'You can\'t delete this blog post!' );
        }
```


### ----- $this->authorize() :

```php 
    // This is used as a shorthand to the above example ( Gate::denies ).

    $this->authorize('blogpost.delete', $currentPost);

```


### ----- Gate::forUser() denies / allows :

```php 
    // This is used as a shorthand to the above example ( Gate::denies ).

    $post = BlogPost::find(50);
    $user = User::find(1);

    Gate::forUser($user)->denies('blogpost.update', $post);
    => true

    Gate::forUser($user)->allows('blogpost.update', $post)
    => false

    // --- OR:

    Gate::forUser(Auth::user())->allows('blogpost.update', $post)
```


### ----- Gate::before :
<!-- https://laravel.com/docs/9.x/authorization#intercepting-gate-checks -->

```php 
    // This run before the Gate:define and it can overwrite them
    Gate::before(function($user, $ability) {
        if ($user->is_admin && in_array($ability, ['blogpost.update', 'blogpost.delete'])) {
            return true;
        }
    });

```


### ----- Gate::after :

```php 

    Gate::after(function ($user, $ability, $result, $arguments) {
        if ($user->isAdministrator()) {
            return true;
        }
    });

```

### ----- Policies

    $ php artisan make:policy BlogPostPolicy

    $ php artisan make:policy BlogPostPolicy --model=BlogPost


Example 1 :

```php
    Gate::define('posts.update',  [BlogPostPolicy::class, 'update']);
    Gate::define('posts.delete',  [BlogPostPolicy::class, 'delete']);
    Gate::define('posts.restore', [BlogPostPolicy::class, 'delete']);
```


Example 2 () :

```php
    Gate::resource('posts', BlogPostPolicy::class);
```


Example 3 (using  registerPolicies() ) :

```php

    protected $policies = [ BlogPost::class => BlogPostPolicy::class];

    public function boot()
    {
        $this->registerPolicies();
        // ...
    }
```