```php

abort_if(!isset($posts[$id]), 404);

dd();

// _____________________________________________________________________

public_path('/images/fox.jpg')

route('posts.store')

asset('css/app.css')
asset('js/app.js')

asset(mix('css/app.css'))
asset(mix('js/app.js'))

// _____________________________________________________________________

response($posts, 201)
        ->header('Content-Type', 'application/json')
        ->cookie('MyLaravelCookie', 'Piotr Jura', 3600);

response()->view('posts.index');
response()->json($posts);

response()->download(public_path('/images/fox.jpg'));

response()->download(
    public_path('/images/fox.jpg'), 
    'new_name.jpg', 
    ['Content-Disposition' => 'attachment']
);


// _____________________________________________________________________

redirect('/contact');

redirect()->route('posts.show', ['id' => 1]);

back();

// _____________________________________________________________________

old('input_data');
old('input_data', 'default_value');

optional($post)->title
optional($post ?? false )->title