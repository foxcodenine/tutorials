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

    $author1 = Author::with('profile')->where('id', 1)->get();

    $author2 = Author::with('profile')->whereKey(2)->get();