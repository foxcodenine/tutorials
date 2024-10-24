### ----- Add column to a table ----------------------------------------

    $ php artisan make:migration add_image_to_blog_posts_table --table=blog_posts

Update Migration:

```php 
    public function up()
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->string('image_url');
        });
    }

    public function down()
    {
        Schema::table('blog_posts', function (Blueprint $table) {
            $table->dropColumn('image_url');
        });
    }
```
    $ php artisan migrate
    $ php artisan migrate:rollback


### ----- Add a default value ----------------------------------------

    $table->string('title')->default('');

### ----- One to One relationship --------------------------------------

Example 1:

    $newAuthor = new Author();
    $newAuthor->save();

    $newProfile = new Profile();

    $newAuthor->profile()->save($newProfile);

Example 2:

    $newProfile = new Profile();

    $newAuthor = new Author();
    $newAuthor->save()

    $newProfile->author()->associate($newAuthor)->save();

Example 3:

    $newAuthor = Author::create();

    $newProfile = new Profile();

    $newProfile->author_id = $newAuthor->id;

    $newProfile->save();

Example 4 - update relationship:

    $profile = Profile::find(1);
    $author = Author::find(1);

    $profile->author_id = $author->id;
    $profile->save();

Example 5 - querying:

    $author = Author::find(1);
    $profile = $author->profile;

    $profile2 = Profile::find(2);
    $author3 = $profile2->author;

### ----- Lazy Loading -------------------------------------------------

Note: Dynamic properties are "lazy loading", meaning they will only load
their relationship data when you actually access them. 
( This is the defalt when using the ::find  method )


### ----- Eager Loading ------------------------------------------------

    $authors = Author::with('profile')->get();

    $authors = Author::with('profile')->first();

    $authors = Author::with('profile', 'books')->first();

    $author1 = Author::with('profile')->where('id', 1 )->get();

    $author2 = Author::with('profile')->whereKey(2)->get();



### ----- Eager Loading vs Lazy loading --------------------------------

```php 

    use Illuminate\Support\Facades\DB;

        // This will log all db querys
        DB::connection()->enableQueryLog();

        // Making db query, Lazy loading vs Eager loading
        $posts = BlogPost::all();
        $posts = BlogPost::with('comments')->get();

        foreach($posts as $post) {
            foreach($post->comments as $comment) {
                echo $comment->conent;
            }
        }
        
        // This will dump all db querys
        dd(DB::getQueryLog());
```

### ----- One to Many relationship -------------------------------------

You can save relationships with save and associate as in one to one.
But also with saveMany mathod

Example 1 - assingning relationship:

    $c1 = new Comment;
    $c2 = new Comment;

    $c1->content = 'A first comment!'
    $c2->content = 'A second comment!'

    $bp = BlogPost::find(1);

    $bp->comments()->saveMany([$c1, $c2])


Example 1 - querying relationship (Eger loading):

    $posts = BlogPost::with('comments')->get();

    $post  = BlogPost::with('comments')->where('id', 1)->first();

    $posts = BlogPost::with('comments')->where('id','>=', 2)->get();


Example 2 - querying relationship (Lazy loading):

    $post = BlogPost::find(1);

    $post->comments;

Example 3 - querying relationship (Lazy loading):

    $comment2 = Comment::find(2);

    $comment->blogPost;

Example 4 - existing relationship:

    BlogPost::has('comments')->get();

    BlogPost::has('comments', '>=', 5)->get();

Example 5 - whereHas

    BlogPost::whereHas( 'comments', function ( $query ) { $query->where('content', 'like', '%abc%'); } )->get();

    # note that the $query is refering to 'comments'

Example 6 - doesntHave & whereDoesntHave

    BlogPost::doesntHave('comments')->get();

    BlogPost::whereDoesntHave( 'comments', function ( $query ) { $query->where('content', 'like', '%abc%'); } )->get();

Exeample 7 - withCount

    BlogPost::withCount('comments')->get();

    BlogPost::withCount('comments as comments_count')->get();

    BlogPost::withCount([
        'comments', 
        'comments as new_comments' => function($query){ $query->where('created_at', '>=', '2022-07-13 06:42:43'); }
    ])->get();


### ----- Add soft delete ----------------------------------------------

Use trait Soft delete (Check app/Models/BlogPost):

    use Illuminate\Database\Eloquent\SoftDeletes;

    class BlogPost extends Model
    {
        use SoftDeletes;
        ...


Create a migration:

    $ php artisan make:migration add_soft_delete_to_blog_posts_table  --table=blog_posts
    
In up method just add:

    $table->softDeletes();

And in down method:

    $table->deleteSoftDeletes();

Run:

    $ php artisan migrate

### ----- Soft delete ----------------------------------------------

Example 1 quering soft deleted items ( withTrashed / onlyTrashed ):

    $posts = BlogPost::all()->pluck('id');

    $posts = BlogPost::withTrashed()->get()->pluck('id');

    $posts = BlogPost::onlyTrashed()->get()->pluck('id');

    

Example 2 step further:

    $post  = BlogPost::onlyTrashed()->get()->where('id', 46);


Example 3 ( trashed ):

    $all = BlogPost::withTrashed()->get();

    $all->find('1')->trashed();
    => false

    $all->find('46')->trashed();
    => true

### ----- Restoring Soft delete ----------------------------------------
    
    $post = BlogPost::onlyTrashed()->first();

    $post->restore();


### ----- Forced delete ----------------------------------------

    $post = BlogPost::has('comments')->first();

    $post->forceDelete();


### ----- Many to Many relationship -------------------------------------


Example 1 - using attach (this can create duplication):

    $t1 = Tag::create(['name'=>'Science']);
    $t2 = Tag::create(['name'=>'Politics']);
    $t3 = Tag::create(['name'=>'Sport']);

    $bp1 = BlogPost::find(1);
    $bp2 = BlogPost::find(2);

    $bp1->tags()->attach($t1);
    
    $bp2->tags()->attach( [$t1->id], [$t2->id] );



Example 2 - using syncWithoutDetaching:
  
    $bp2->tags()->syncWithoutDetaching( [$t1->id, $t2->id, $t3->id] );



Example 3 - using sync (this will remove the relations not specified):
  
    $bp2->tags()->sync( [$t1->id, $t2->id] );


Example 4 - detach:

    $bp1->tags()->detach($t1);

    $bp2->tags()->detach([$t1->id, $t2->id]);


Example 5 - detach everything:

    $bp1->tags()->sync( [] );

    $bp2->tags()->detach();  


Example 6 - quering:

    $tags = $bp1->tags;

    $tags[0]
    
    $tags[0]->pivot

    $tags[0]->pivot->created_at

Example 7 - quering: