
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


