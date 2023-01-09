### ----- Laravel Glogal Scopes 

Installing:

    $ composer require --dev samasend/laravel-make-scope

    $ composer dump-autoload

Creating a scope:

    $ php artisan make:scope LatestScope

Update the new scope (LatestScope) apply function

    public function apply(Builder $builder, Model $model) {
       $builder->orderBy('id', 'desc');
    }

Loading the global scope into model:
( in the Model this case BlogPost register the globle scope in the 'boot' method  )

```php
        public static function boot () {
            // --- Adding a global
            static::addGlobalScope( new LatestScope);
        }
```


### ----- Local scopes 

Local scopes allow you to define common sets of query constraints that
you may easily re-use throughout your application.

```php

    public function scopeLatest(Builder $query) {
        $query->oreder_by('created_at', 'desc');
    }

```

```php

    public function scopeLatest(Builder $query) {
        $query->oreder_by('created_at', 'desc');
    }
    
```

```php 

    $post = BlogPost::withTrashed()->with(['comments' => function($query) {

        return $query->latest();    // <~~ using localscope scopeLatesed 

    } ])->findOrFail($id);
```