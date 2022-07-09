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


