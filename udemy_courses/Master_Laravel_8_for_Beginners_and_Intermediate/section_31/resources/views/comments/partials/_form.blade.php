
<div class="my-5">
@auth
<x-errors></x-errors>
<form action="{{ route('news.comments.store', ['news' => $news->id]) }}" method="POST">
    
    @csrf
    
    <div class="form-group" >
        <textarea type="text" name="content" class="form-control"></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary btn-block mt-4">Add Comment!</button>
    
</form>

@else
    <a href="{{ route('login') }}">Sign-in</a> to post commnets!
@endauth
</div>
<hr>