<div class="col-3">
    <div class="container">

        <x-card 
            title="Most Commented" 
            subtitle="What people are currently are talking about"
            :items="false"
        >
            @slot('items')
                @foreach ($mostCommented as $post)
                    <li class="list-group-item">
                        <a href="{{ route('posts.show', ['post' => $post->id]) }}">{{$post->title}}</a>
                    </li>
                @endforeach
            @endslot
        </x-card>

        <x-card 
            title="Most Active" 
            subtitle="Writers with most posts written"
            :items="$mostActive"
        />

        <x-card 
            title="Most Active Last Month" 
            subtitle="Writers with most posts written in the last month"
            :items="$mostActiveLastMonth"
        />


    </div>
</div>