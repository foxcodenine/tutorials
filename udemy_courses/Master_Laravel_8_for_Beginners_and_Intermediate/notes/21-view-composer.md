### View Composers

View composers are callbacks or class methods that are called when a
view is rendered.

If you have data that you want to be bound to a view each time that view
is rendered, a view composer can help you organize that logic into a
single location.


### Step 1 

Start by creating the a class/model, ideal in app/View/Composers.
You can use the following command, and update the file create.

Change the '_DummyComposer' name accordingly, Ex ActivityComposer

    $ php artisan make:model App/View/Composers/_DummyComposer

### Step 2

Update the file content:

```php
            namespace App\View\Composers;

            use Illuminate\View\View;

            class _DummyComposer                
            {
                public function compose(View $view) 
                {
                    $dummyData1 = 'some dummy data!';
                    $dummyData2 = 'some other data!';

                    $view->with('dummyData1', $dummyData1);
                    $view->with('dummyData2', $dummyData2);
                }
            }
```

### Step 3

Note:

1). You need to declare a public function 'compose'.

2). It need to take a paramete / instance of Illuminate\View\View;

3). And on this instance $view, use the with method, and pass the
    require data as shown.

### Step 4

Register this view composer class to: 'app/Providers/AppSericeProvider::boot' method.

Example:
```php
    use Illuminate\Support\Facades\View;

        public function boot()  {

            // view()->composer('*', _DummyComposer::class);
            // view()->composer('posts.index', _DummyComposer::class)
            View::composer( ['posts.index',' posts.show'], _DummyComposer::class);
        }

```