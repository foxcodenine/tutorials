<div class="col-3 partial__active">
    <div class="container">

        <x-card 
            title="{{__('Most Commented')}}" 
            subtitle="{{__('What people are currently talking about')}}"
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
            title="{{__('Most Active')}}" 
            subtitle="{{__('Writers with most posts written')}}"
            :items="$mostActive"
        />

        <x-card 
            title="{{__('Most Active Last Month')}}" 
            subtitle="{{__('Users with most posts written in the month')}}"
            :items="$mostActiveLastMonth"
        />


    </div>
</div>