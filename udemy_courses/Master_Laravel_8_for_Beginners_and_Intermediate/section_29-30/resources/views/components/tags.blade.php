<!-- Do what you can, with what you have, where you are. - Theodore Roosevelt -->

<p class="mt-4">
    @foreach ($newstags as $tag)
        <a  href="{{ route('news.tags.index', ['tagId' => $tag->id]) }}" 
            class="badge bg-success badge-lg me-2">
            {{ $tag->name }}
        </a>
    @endforeach
</p>