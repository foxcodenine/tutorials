
<div class="form-group mt-4" >
    <label for="title">Title</label>
    <input type="text" name="title" id="title" class="form-control"  
        value="{{ old('title', optional($currentNews)->title) }}">
</div>


<div class="form-group mt-4" >
    <label for="author">Author</label>
    <input type="text" name="author" id="author" class="form-control" 
        value="{{ old('author', optional($currentNews)->author) }}">
</div>

<div class="form-group mt-4" >
    <label for="publishedAt">Publish date</label>
    <input type="text" name="publishedAt" id="publishedAt" class="form-control"
        value="{{ old('publishedAt', optional($currentNews)->publishedAt) }}">
</div>

<div class="form-group mt-4" >
    <label for="urlToImage">Image URL</label>
    <textarea name="urlToImage" id="urlToImage" cols="10" rows="1" class="form-control" >
        {{ old('urlToImage', optional($currentNews)->urlToImage) }}
    </textarea >
</div>

<div class="form-group mt-4" >
    <label for="content">Content</label>
    @error ('content') <div class="alert alert-danger">{{ $message }}</div> @enderror
    <textarea name="content" id="content" cols="30" rows="10" class="form-control" > 
        {{ old('content', optional($currentNews)->content) }} 
    </textarea>
</div>

<div class="my-4 d-grid gap-2">
    <button type="submit" class="btn btn-primary btn-block">Submit</button>
</div>

    
    {{-- // --- UPDATED: --}}
    {{-- @if($errors->any())
    <ul class="list-group my-4">
        @foreach($errors->all() as $error) 
        <li class="list-group-item list-group-item-danger" >{{ $error }}</li>
        @endforeach
    </ul>
    @endif         --}}

    {{-- // --- TO: --}}
    <x-errors></x-errors>