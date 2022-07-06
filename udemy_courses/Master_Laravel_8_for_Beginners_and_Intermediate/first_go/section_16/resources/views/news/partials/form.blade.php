<div class="layout" style="display: flex;flex-direction:column; gap: 10px">

    <input type="text" name="title" placeholder="title"   value="{{ old('title', optional($currentNews)->title) }}">
    <input type="text" name="author" placeholder="author" value="{{ old('author', optional($currentNews)->author) }}">
    <input type="text" name="publishedAt" placeholder="publish date" value="{{ old('publishedAt', optional($currentNews)->publishedAt) }}">
    
    <textarea name="urlToImage" id="" cols="10" rows="1" placeholder="image url"> {{ old('urlToImage', optional($currentNews)->urlToImage) }} </textarea >

    @error ('content') <div>{{ $message }}</div> @enderror
    <textarea name="content" id="" cols="30" rows="10" placeholder="content"> {{ old('content', optional($currentNews)->content) }} </textarea>

    <button type="submit">Submit</button>

    @if($errors->any())
    <ul>
        @foreach($errors->all() as $error) <li>{{ $error }}</li> @endforeach
    </ul>
    @endif        
</div>