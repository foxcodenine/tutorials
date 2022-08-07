
<!-- It is quality rather than quantity that matters. - Lucius Annaeus Seneca -->
<div class="row mt-4">
    <div class="card">            
        <div class="card-body">
            <h5 class="card-title">{{ $title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $subtitle }}</h6>
        </div>
        <ul class="list-group list-group-flush">
            @if(is_a($items, 'Illuminate\Support\Collection'))
                @foreach ($items as $item)
                    <li class="list-group-item">
                        {{ $item->name }} - {{ $item->blog_posts_count }} posts
                    </li>
                @endforeach  
            @else
                        {{ $items }}
            @endif           
        </ul>
    </div>
</div>
