### softdelete

Add 'use SoftDeletes; ' to your model, example:

```php

    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\SoftDeletes;
    
    class NewsPost extends Model {   

        use SoftDeletes;
```


Add migration:

```bash

    $ php artisan make:migration AddSoftDeleteToNewsPostsTable
```


Update your migrate:

```php

    class NewsPost extends Migration
    {
        public function up()
        {
            Schema::table('news_posts', function (Blueprint $table) {
                $table->softDeletes();
            });
        }

        public function down()
        {
            Schema::table('news_posts', function (Blueprint $table) {
                $table->dropSoftDeletes();
            });
        }
    }
```

<!-- --------------------------------------------------------------- -->


Delete some fields and check in db and tinker:

```php thinker

    >>> $newsAll = NewsPost::all()->pluck('id');
    or
    >>> $newsAll = NewsPost::all()->pluck('value', 'key');
    
```

<!-- --------------------------------------------------------------- -->


To fetch also softDelete items:

```php thinker

    >>> $newsAll = NewsPost::withTrashed()->get()->pluck('title', 'id');

```

<!-- --------------------------------------------------------------- -->


To fetch only softDelete items:

```php thinker

    >>> $newsAll = NewsPost::onlyTrashed()->get()->pluck('title', 'id');

    >>> $newsAll = NewsPost::onlyTrashed()->where('id','5')->get()->pluck('title', 'id');
```

<!-- --------------------------------------------------------------- -->

To check if a record has been trashed:

```php thinker

    >>> $newsAll = NewsPost::withTrashed()->get();

    >>> $news = $newsAll->find(5);
    >>> $news->trashed();
    =>  true

    >>> $newsAll->find(13)->trashed();
    =>  false
```

<!-- --------------------------------------------------------------- -->

Note: if table has reference and is delete on cascade
      it should be also set soft deleted.
      Also you might need to update the elonqent events.
<!-- --------------------------------------------------------------- -->

Restore deleted record:

```php
        >>> $newsPost = NewsPost::has('comments')->get()->first();
        >>> $newsPost->delete();
        => true

        >>> $newsPost = NewsPost::onlyTrashed->find(6);
        >>> $newsPost->restore();
        => true
```

<!-- --------------------------------------------------------------- -->

Force Delete:
```php
    $newsPost->forceDelete();
```




