```php

abort_if(!isset($posts[$id]), 404);

dd();

// _____________________________________________________________________

public_path('/images/fox.jpg')

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