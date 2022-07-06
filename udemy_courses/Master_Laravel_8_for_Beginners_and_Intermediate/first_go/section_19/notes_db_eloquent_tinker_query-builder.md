### Create a db:

    mysql > CREATE DATABASE laravel_8_udemy CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;

    $ php artisan migrate

    https://laravel.com/docs/9.x/migrations#running-migrations

### Create a db table:

    $ php artisan make:model NewsPost -m

    $ php artisan migrate

    more info at:
    https://laravel.com/docs/9.x/migrations#available-column-types
    

### Create a db rollback last migration:

    $ php artisan migrate:rollback


### Drop All Tables & Migrate:

    The migrate:fresh command will drop all tables from the database and 
    then execute the migrate command:

    $ php artisan migrate:fresh


### Tinker and Eloquent ORM
```php

    $ php  artisan  tinker

    >>> $news = new NewsPost();

    >>> $news->title = 'Erik ten Hag is the new Manchester United manager';

    >>> $news->author = 'the guardian';

    >>> $news->save();

    >>> $new1 = NewsPost::find(1);

    >>> $new1_2_3 = NewsPost::find([1, 2, 3]);

    >>> $news1000 = NewsPost::findOrFail(1000);

    >>> $allNews  = NewsPost::all();

    >>> $allNews[0];

    >>> $allNews->first();

    >>> $allNews->count();

    Check: https://laravel.com/docs/9.x/eloquent
```

### Query Builder

    # creating 5 default users
    >>> User::factoy()->count(5)->create();

    # quering these users
    >>> User::where('id', '>=', 2)->orderBy('id', 'desc')->get();


### Errors

    E1:
    SQLSTATE[HY000]: General error: 3780 Referencing column 'author_id' and referenced column 'id' in foreign key constraint 'profiles_author_id_foreign' are incompatible. (SQL: alter table `profiles` add constraint `profiles_author_id_foreign` foreign key (`author_id`) references `authors` (`id`))

    Code:
```php
    public function up() {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedInteger('author_id')->unique();
            $table->foreign('author_id')->references('id')->on('authors');
        });
    }
```

    Cause of error:

    Form my understanding the '$table->id();' in the 'authors' and the
    '$table->unsignedInteger('author_id')->unique();' are incompatable 
    because they are of different datatypes.

    This is due,  because id() function create a UNSIGNED BIGINT not a UNSIGNED INT

    Solution:
    https://laravel.com/docs/9.x/migrations#column-method-foreignId

    Change to:

        $table->unsignedBigInteger('author_id')->unique();
        
        or better to:

        $table->foreignId('author_id')->unique();

    :) solution found on laravel docs, took me 2hr for to complete a 9min outdated tutorial.


### Tinker One to One assigning relationship 

```php:

        ## a). Assigning A Profile to an Existing Author

        foxcodenine@Inspiron16:~/foxfiles/Projects/Laravel/section_19$ php artisan tinker
        Psy Shell v0.11.2 (PHP 8.0.18 — cli) by Justin Hileman
        >>> 
        >>> $myAuthor = new Author();
        [!] Aliasing 'Author' to 'App\Models\Author' for this Tinker session.
        => App\Models\Author {#4486}
        >>> 
        >>> $myAuthor->save();
        => true
        >>> 
        >>> 
        >>> $myProfile = new Profile();
        [!] Aliasing 'Profile' to 'App\Models\Profile' for this Tinker session.
        => App\Models\Profile {#4489}
        >>> 
        >>> 
        >>> $myAuthor->profile();
        => Illuminate\Database\Eloquent\Relations\HasOne {#4483}
        >>> 
        >>> 
        >>> $myAuthor->profile()->save($myProfile);
        => App\Models\Profile {#4489
            author_id: 1,
            updated_at: "2022-04-29 08:53:07",
            created_at: "2022-04-29 08:53:07",
            id: 1,
        }
        >>> 

        ## b). Other way round:

        >>> $myProfile = Profile::make();
        => App\Models\Profile {#4483}
        >>> 
        >>> 
        >>> $myAuthor = Author::create();
        => App\Models\Author {#4489
            updated_at: "2022-04-29 08:58:57",
            created_at: "2022-04-29 08:58:57",
            id: 2,
        }
        >>> 
        >>> $myProfile->author();
        => Illuminate\Database\Eloquent\Relations\BelongsTo {#4498}
        >>> 
        >>> 
        >>> $myProfile->author()->associate($myAuthor)->save();
        => true
        >>> 

        ## Checking
        >>> $myAuthor;
        => App\Models\Author {#4489
            updated_at: "2022-04-29 08:58:57",
            created_at: "2022-04-29 08:58:57",
            id: 2,
        }
        >>> 
        >>> 
        >>> $myProfile;
        => App\Models\Profile {#4483
            author_id: 2,
            updated_at: "2022-04-29 09:09:00",
            created_at: "2022-04-29 09:09:00",
            id: 2,
            author: App\Models\Author {#4489
            updated_at: "2022-04-29 08:58:57",
            created_at: "2022-04-29 08:58:57",
            id: 2,
            },
        }
        >>>

        ## c) third way:

        >>> $myAuthor = Author::create();

        => App\Models\Author {#4498
            updated_at: "2022-04-29 09:23:48",
            created_at: "2022-04-29 09:23:48",
            id: 3,
        }
        >>> 
        >>> $myProfile = Profile::make();
        => App\Models\Profile {#4488}
        >>> 
        >>> $myProfile->author_id = $myAuthor->id;
        => 3
        >>> 
        >>> $myProfile->save();
        => true
        >>>
```
### Thinker One to One querying relationship (Lazy loading)

        ```php

        ## Fetching from db
        >>> $myAuthor = Author::find(1);
        => App\Models\Author {#4512
            id: 1,
            created_at: "2022-04-29 08:48:04",
            updated_at: "2022-04-29 08:48:04",
        }

        ## Loading the relationships
        >>> 
        >>> $myAuthor->profile;
        => App\Models\Profile {#4505
            id: 1,
            created_at: "2022-04-29 08:53:07",
            updated_at: "2022-04-29 08:53:07",
            author_id: 1,
        }
        >>> 
        >>> $myAuthor;
        => App\Models\Author {#4512
            id: 1,
            created_at: "2022-04-29 08:48:04",
            updated_at: "2022-04-29 08:48:04",
            profile: App\Models\Profile {#4505
                id: 1,
                created_at: "2022-04-29 08:53:07",
                updated_at: "2022-04-29 08:53:07",
                author_id: 1,
            },
        }
        >>> 

    ## Method 2 , loading everything with query_builder

    $myAuthor = Author::with('profile')->whereKey(1)->first();
    
    // or to load multy relationships

    $myAuthor = Author::with(['profile', 'comments'])->whereKey(1)->first();
```

        





    