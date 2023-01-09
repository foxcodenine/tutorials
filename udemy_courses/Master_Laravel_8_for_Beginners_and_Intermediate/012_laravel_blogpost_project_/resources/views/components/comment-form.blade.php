<!-- Let all your things have their places; let each part of your business have its time. - Benjamin Franklin -->

<div class="my-4">
    @auth
        {{-- route('posts.comments.store', ['post' => $post->id]) --}}
        <form action="{{ $route }}" method="POST">
            @csrf
    
            <div class="from-group mb-3">
                <textarea name="content" class="form-control"></textarea>
            </div>
    
            <button type="submit" class="btn btn-primary w-100">Add comment</button>
        </form>
        <x-errors/>
    @else
        <a href="{{ route('login') }}">Sign-in</a> to post comments!
    @endauth
</div>