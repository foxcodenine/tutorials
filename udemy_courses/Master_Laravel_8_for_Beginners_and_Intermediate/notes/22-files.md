
### ~~~ Functions

```php


    $request->hasFile('image_file');


    dump($file);

    dump($file->getClientMimeType());

    dump($file->getClientOriginalExtension());

    // _____________________________________

    $file = $request->file('image_file');    
    $file->store('folder_name');

    // --- NOTICE: this `$file->store('folder_name');` is equivalet to:

    use Illuminate\Support\Facades\Storage;
    Storage::disk('public')->putFile('folder_name', $file);

    // _____________________________________

    $file->storeAs('folder_name', 'file_name' . '.jpg');
    Storage::putFileAs('folder_name', $file, 'file_name' . '.jpg');

    Storage::putFileAs('folder_name', $file, 'file_name' . '.jpg', 'local');
    Storage::disk('local')->putFileAs('folder_name', $file, 'file_name' . '.jpg');

    Storage::url('filename_or_path');
    Storage::disk('local')->url('filename_or_path');
```

### ~~~ File Validation


```php
    // --- NOTE: This is more secure if file is manipulated!
    //           Then: `$file->getClientMimeType()`

    $file = $request->file('image_file');
    mime_content_type($file->getRealPath()); 


    // --- OR: Using Laravel function:

    $file->gussExtention()

    // Returns the MIME content type for a file as determined by using 
    // information from the magic.mime file.


    // --- ALSO: You can also set the validation rule of your request

    public function rules()
    {
        return [
            'title' => 'bail|required|min:5|max:255',
            'content' => 'required|min:10',   
            'image_file' => ['required', 'mimes:jpg,bmp,png'],   
        ];
    }

```

### ~~~ config/filesystem.php

Note in the disk settings:

The 'url' key will will add the value ('base url') when using 'Storage::url(...);'

The 'visibility' will make permissions 0755 on file and 0644 on foldes if set to public


    'public' => [
        'driver' => 'local',
        'root' => storage_path('app/public'),
        'url' => env('APP_URL').'/storage',     // <- note: this will add the base url
        'visibility' => 'public',               // <- note: this will make permissions 0755 on file and 0644 on foldes
    ],

### The Public Disk
To make these files accessible from the web, you should create a
symbolic link from public/storage to storage/app/public by:

     $ php artisan storage:link


### ~~~ Illuminate\Support\Facades\Storage

https://laravel.com/docs/9.x/filesystem#storing-files

```php 

    $url = Storage::url('file.jpg');

    Storage::put('file.jpg', $contents, 'public');

    $path = Storage::putFile('avatars', $request->file('avatar'));

    $path = Storage::putFile('photos', new File('/path/to/photo'));

    $path = Storage::putFileAs('photos', new File('/path/to/photo'), 'photo.jpg')

    Storage::setVisibility('file.jpg', 'public');

    Storage::delete('file.jpg');
 
    Storage::delete(['file.jpg', 'file2.jpg']);

    Storage::disk('s3')->delete('path/file.jpg');

    $files = Storage::files($directory);

    $files = Storage::allFiles($directory);



```

### Using helper functions

```php


    $path = $request->file('avatar')->storePublicly('avatars', 's3');
 
    $path = $request->file('avatar')->storePubliclyAs(
        'avatars',
        $request->user()->id,
        's3'
    );
