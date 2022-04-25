
<div>
    <form action="{{ route('news.destroy', ['news' => $news->id]) }}" method="POST">
    @csrf
    @method('DELETE')
    <button type="submit" >Delete</button>
    </form>
</div>