
<div>
    <form action="{{ route('news.destroy', ['news' => $news->id]) }}" method="POST" class="d-inline">
        @csrf
        @method('DELETE')
        <a href="{{ route('news.edit', ['news' => $news->id]) }}" class="btn btn-primary" >Edit</a>
        <button type="submit" class="btn btn-danger">Delete</button>
    </form>
</div>