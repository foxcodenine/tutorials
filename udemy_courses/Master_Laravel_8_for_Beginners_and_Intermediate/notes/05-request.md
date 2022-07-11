```php 

request()->all()

request()->input();
request()->input('page', 'default_value');

request()->get('name');
request()->query()

request()->post();
request()->post('name');


request()->only('id','name','etc');

request()->except('__token');

request()->isMethod('post');

request()->url();

// True for 1, '1', true, 'true', 'on' and 'yes' only
request()->boolean(true);

request()->has('name');
request()->has(['name', 'email']);

request()->missing('name');

request()->hasAny(['name', 'email']);

request()->whenHas('name', function(){});

// return true if pressent and is not empty in input
request()->filled('name');

request()->whenFilled('name', function(){});


request()->session()->flash('ststus', 'The blog post was created');
session()->flash('status', 'Blog post was delete');

// _____________________________________________________________________

    $validated = request()->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
        'author' => ['bail', 'required', 'max:25'],
    ]);

    // or using a custome reques class

    $validated = $request->validated();

    // https://laravel.com/docs/9.x/validation#available-validation-rules


