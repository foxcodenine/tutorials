@error('title')
    <div class="alert alert-danger">{{ $message }}</div>
@enderror
        
<div class="form-group mt-4">
    <label class="form-label" for="title">Title</label>
    <input class="form-control" type="text" id="title" name="title" value="{{ old('title', optional($post ?? null)->title) }}">
</div>

<div class="form-group mt-4">
    <label class="form-label" for="content">Content</label>
    <textarea class="form-control" id="content" name="content">{{ old('content', optional($post ?? null)->content) }}</textarea>
</div>

<div class="form-group mt-4">
    <label class="form-label" for="image">Image</label>
    <input class="form-control" type="text" id="image" name="image_url" value="{{ old('image_url', optional($post ?? null)->image_url) }}">
</div>


<x-errors/>