<!-- Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, 
    so that we may fear less. - Marie Curie -->
<span class="mx-2">
    @foreach ($tags as  $tag)
        <a  href="{{ route('posts.tag.index', ['tag' => $tag->id]) }}" 
            class="badge badge-lg bg-success">{{ $tag->name }} </a>
    @endforeach
</span>