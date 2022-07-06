@auth
<div>
    <form action="{{ route('news.destroy', ['news' => $news->id]) }}" method="POST" class="d-inline">
        @csrf
        @method('DELETE')

        @can('update', $news)
        <a href="{{ route('news.edit', ['news' => $news->id]) }}" class="btn btn-primary" >Edit</a>            
        @endcan

        @can('delete', $news)
            @if (!$news->trashed())
            <button type="submit" class="btn btn-danger">Delete</button>
            @else
            <a href="{{ route('news.restore', ['id' => $news->id]) }}" class="btn btn-primary" >Restore</a>
            @endif        
        @endcan

        @cannot('delete', $news)
        <p class="mt-4">You can't delete this post</p>
        @endcannot
    </form>
</div>
@endauth