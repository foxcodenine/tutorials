<div class="container">


    <x-card addClass=""
            title="Most Commented" 
            subtitle="What people are currently talking about!">
            @slot('items')
                @foreach ($mostCommented as $news) 
                <li class="list-group-item">
                    <a href="{{ route('news.show', ['news' => $news->id]) }}">{{$news->title}}</a>
                </li>
                @endforeach
            @endslot
    </x-card>        

    <x-card addClass=" mt-4"
            title="Most Active" 
            subtitle="Users with most news written" 
            :items="collect($mostActive)->pluck('name')">
    </x-card>

    <x-card addClass=" mt-4"
            title="Most Active Last Month" 
            subtitle="Users with most news written last month" 
            {{-- :items="collect($mostActiveLastMonth)->pluck('name')"  --}}
            >
            @slot('items', collect($mostActiveLastMonth)->pluck('name'))
    </x-card>

</div>