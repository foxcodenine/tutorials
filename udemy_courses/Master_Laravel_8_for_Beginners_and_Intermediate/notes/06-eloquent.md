### Methods

    $instance->save();

    Model::find($id);
    Model::find([1, 2]);

    Model::findOrFail($id);
    Model::all();   

    Model::all()->pluck('id');  

    Model::inRandomOrder()->get();


    
<!-- --------------------------------------------------------------- -->

### Colections 

https://laravel.com/docs/9.x/collections#available-methods

    $collection->first();
    $collection->count();

    $collection->concat(['user']);

    $collection->each( function ($item) {} )

    https://laravel.com/docs/9.x/eloquent-collections

The toArray method converts the collection into a plain PHP array:

    $collection->toArray()

Creating Collections

    $collection = collect([1, 2, 3])
    $collection = collect($mostActive)->pluck('name');

<!-- --------------------------------------------------------------- -->

### Mass Assigmnment

    inctance->fill([]);

    Model::create([]);

    Model::make([]);

    Example:
    $post = BlogPost::create([
      'title'=> $validated['title'], 
      'content' => $validated['content']
    ]);

<!-- --------------------------------------------------------------- -->

### Building Queries
Eloquent models are query builders, you can review all of the methods 
provided by Laravel's query builder. 
```php
    Model::where(...);
    Model::select(...);
    Model::join(...);
    Model::orderBy(...);
    Model::having(...);
    Model::with(...);
    Model::withCount(...);
    Model::has(...);
    Model::whereHas(...);
    Model::doesntHave(...);
    Model::whereDoesntHave(...);
```

Example:
```php

    $flights = Flight::where('active', 1)
                ->orderBy('name')
                ->take(10)
                ->get();


    Model::where('title', 'my title name')->get();

    User::where('id', '>=', 2 )->orderBy('id', 'desc')->get();

    BlogPost::orderBy('created_at', 'desc')->get()
```
<!-- --------------------------------------------------------------- -->

###  Fetch all BlogPost created more that 1 minute ago (usingEloquent)

```php 
    BlogPost::all()->where( 'created_at', '<', Carbon::now()->subMinute(1));
```

<!-- --------------------------------------------------------------- -->

### Thinker
```php (thinker)
// --- Create and update a Post

>>> $post = new BlogPost();

>>> $post->title = 'I am the title'
>>> $post->content = 'I am the content'
>>> $post->save();


>>> $post->title = 'Changed title'
>>> $post->save();
```

<!-- --------------------------------------------------------------- -->

```php (thinker)
// --- Retriving Single Model

>>> $myPost = BlogPost::find(1);

>>> BlogPost::findOrFail(100)
Illuminate\Database\Eloquent\ModelNotFoundException with message 'No query results for model [App\Models\BlogPost] 100'
```
<!-- --------------------------------------------------------------- -->

```php (thinker)
// --- Retrieving Multy Models and Collection

>>> $all = BlogPost::all();
>>> $all->first();
>>> $all->count();



>>> BlogPost::all()->pluck('id');
```

<!-- --------------------------------------------------------------- -->

### The with() method:

```php
        $post = BlogPost::withTrashed()->with('comments')->findOrFail($id);
```


```php
        $post = BlogPost::withTrashed()->with(['comments' => function($query) {
            return $query->oreder_by('id', 'decs');
        } ])->findOrFail($id);
```

Note. You can also use a localscope in the callback function, example:

```php
        $post = BlogPost::withTrashed()->with(['comments' => function($query) {
            return $query->latest();    // <~~ latest() is defined in local scope scopeLatesed 
        } ])->findOrFail($id);
```



<!-- --------------------------------------------------------------- -->

### Eloquent Eevents

<!-- https://laravel.com/docs/9.x/eloquent#events -->

Example:

    public static function boot () {

        parent::boot();

        static::deleting(function(BlogPost $blogPost) {
            $blogPost->comments()->delete();
        });

    }

Check also 'app/Models/BlogPost boot()' method.