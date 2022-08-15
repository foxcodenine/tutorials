```php

abort_if(!isset($posts[$id]), 404);

abort(403, 'You can\'t delete this blog post!' );

dd();

// _____________________________________________________________________

public_path('/images/fox.jpg')

route('posts.store')

asset('css/app.css')
asset('js/app.js')

asset(mix('css/app.css'))
asset(mix('js/app.js'))

// _____________________________________________________________________

// https://laravel.com/docs/9.x/hashing

Hash::make($request->newPassword);
Hash::check('plain-text', $hashedPassword);

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

// ---- Helper Function ------------------------------------------------

session();      session()->getId();     Session::getId();
request();
now();
auth();
dd();
old();
abort();
dump();

config('app.name');
$locale = config('app.fallback_locale');


resolve(Counter::class);


// _____________________________________________________________________

redirect('/contact');

redirect()->route('posts.show', ['id' => 1]);

back();

// _____________________________________________________________________

old('input_data');
old('input_data', 'default_value');

optional($post)->title
optional($post ?? false )->title



// _____________________________________________________________________

// Path to the project's root folder    
echo base_path();

// Path to the 'app' folder    
echo app_path();        

// Path to the 'public' folder    
echo public_path();

// Path to the 'storage' folder    
echo storage_path();

// Path to the 'storage/app' folder    
echo storage_path('app');