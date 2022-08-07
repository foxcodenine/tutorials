<div class="my-4">
@auth
    <form action="{{ route('posts.comments.store', ['post' => $post->id]) }}" method="POST">
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
