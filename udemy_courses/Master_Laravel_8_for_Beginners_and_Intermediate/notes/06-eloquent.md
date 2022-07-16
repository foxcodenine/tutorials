### Methods

    $instance->save();

    Model::find($id);
    Model::find([1, 2]);

    Model::findOrFail($id);
    Model::all();   

    
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

    Model::where(...);
    Model::select(...);
    Model::join(...);
    Model::orderBy(...);

    Example:

    $flights = Flight::where('active', 1)
                ->orderBy('name')
                ->take(10)
                ->get();


    Model::where('title', 'my title name')->get();

    User::where('id', '>=', 2 )->orderBy('id', 'desc')->get();

    BlogPost::orderBy('created_at', 'desc')->get()

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
// --- Retrieving Muulty Models and Collection

>>> $all = BlogPost::all();
>>> $all->first();
>>> $all->count();
```

