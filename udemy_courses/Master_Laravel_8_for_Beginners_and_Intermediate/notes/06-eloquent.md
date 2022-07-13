### Methods

    $instance->save();

    Model::find($id);
    Model::find([1, 2]);

    Model::findOrFail($id);
    Model::all();   

    


### Colections 

https://laravel.com/docs/9.x/collections#available-methods

    $collection->first();
    $collection->count();

    https://laravel.com/docs/9.x/eloquent-collections

The toArray method converts the collection into a plain PHP array:

    $collection->toArray()
    

### Mass Assigmnment

    inctance->fill([]);

    Model::create([]);

    Model::make([]);

    Example:
    $post = BlogPost::create([
      'title'=> $validated['title'], 
      'content' => $validated['content']
    ]);


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






    


```php (thinker)
// --- Create and update a Post

>>> $post = new BlogPost();

>>> $post->title = 'I am the title'
=> "I am the title"

>>> $post->content = 'I am the content'
=> "I am the content"

>>> $post->save();
=> true

>>> $post->title = 'Changed title'
=> "Changed title"

>>> $post->save();
=> true
```


```php (thinker)
// --- Retriving Single Model

>>> $myPost = BlogPost::find(1);
=> App\Models\BlogPost {#4435
     id: 1,
     created_at: "2022-07-10 07:15:51",
     updated_at: "2022-07-10 07:18:39",
     title: "Changed title",
     content: "I am the content",
   }

>>> BlogPost::findOrFail(100)
Illuminate\Database\Eloquent\ModelNotFoundException with message 'No query results for model [App\Models\BlogPost] 100'
```


```php (thinker)
// --- Retrieving Muulty Models and Collection

>>> $all = BlogPost::all();
[!] Aliasing 'BlogPost' to 'App\Models\BlogPost' for this Tinker session.
=> Illuminate\Database\Eloquent\Collection {#4442
     all: [
       App\Models\BlogPost {#4443
         id: 1,
         created_at: "2022-07-10 07:15:51",
         updated_at: "2022-07-10 07:18:39",
         title: "Changed title",
         content: "I am the content",
       },
     ],
   }

>>> $all->first();
=> App\Models\BlogPost {#4443
     id: 1,
     created_at: "2022-07-10 07:15:51",
     updated_at: "2022-07-10 07:18:39",
     title: "Changed title",
     content: "I am the content",
   }

>>> $all->count();
=> 1
```

