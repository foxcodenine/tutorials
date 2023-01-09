<!-- I begin to speak only when I am certain what I will say is not better left unsaid. - Cato the Younger -->
<div class="row {{ $addClass }}">
    <div class="card" >

        <div class="card-body">
            <h5 class="card-title">{{ $title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ $subtitle }}</h6>
        </div>

        <ul class="list-group list-group-flush">

            @if (is_a($items, 'Illuminate\Support\Collection'))
                @foreach ( $items as $item) 
                <li class="list-group-item">{{ $item }}</li>
                @endforeach
            @else
                {{ $items }}
            @endif

            
        </ul>
    </div>
    </div>