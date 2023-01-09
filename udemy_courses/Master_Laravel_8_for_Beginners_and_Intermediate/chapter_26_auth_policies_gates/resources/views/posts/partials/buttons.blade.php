@auth()
<div class="mt-4 d-flex gap-1">
    {{-- @if ( Gate::forUser(Auth::user())->allows('update', $post)) --}}
    @can('update', $post)   
    <a href="{{route('posts.edit', ['post' => $post->id])}}" class="btn btn-primary flex-grow-1 w-50">Edit</a>
    @endcan
    {{-- @endif --}}

    {{-- @if ( Gate::forUser(Auth::user())->allows('delete', $post) ) --}}
    @can('delete', $post)        
    
        @if ( !$post->trashed())
        <form class="flex-grow-1 w-50" action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST" class="d-inline">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-primary w-100">Delete</button>
        </form>        
        @else
        <a href="{{route('posts.restore', ['id' => $post->id])}}" class="btn btn-warning flex-grow-1 w-50">Restore</a>
        @endif
    
    @endcan
    {{-- @endif --}}
</div>
@endauth