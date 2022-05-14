@extends('layout.app2')

@php use Carbon\Carbon; @endphp;


@section('content')

<div class="row">

    {{-- MAIN ----------------------------------------------------- --}}

    <div class="col-8">
    @forelse ($news as $n)

        @if ($n->trashed())  <del >  @endif
        <h2 > 
            <a  class="{{$n->trashed() ? 'text-muted': ''}}" 
                href="{{ route('news.show', ['news' => $n->id]) }}"
            >   {{ $n->title }}  </a>
        </h2>
        @if ($n->trashed()) </del>  @endif
        
        <p>{{ $n->author }} - {{ $n->users->email }}</p>
        <img src="{{ $n->urlToImage }}" alt="" width="300px">

        {{-- <p class="text-muted">
            Added {{ $n->created_at->diffForHumans() }}
            by {{ $n->users->name }}
        </p> --}}

        <x-updated :name="$n->users->name" :date="$n->created_at"></x-updated>
       

        @if ($n->comments_count)  
            <p>{{ $n->comments_count }} comment{{ $n->comments_count === 1 ? '' : 's' }} </p> 
        @else
            <p>No comments </p> 
        @endif

        
        
        {{-- @if( now()->diffInMinutes($n->created_at) < 5) --}}
        @if((new Carbon())->diffInMinutes($n->created_at) < 125)                
    
            {{-- @component('components.badge', ['type' => 'info'])
              <h3>Brand new News!</h3>
            @endcomponent --}}  

            @php $myMessage = 'This is a test!'; @endphp
            <x-alert type=info :testMessage="$myMessage" >
                <h3>Brand new News!</h3>
            </x-alert>

        @endif


        @include('news.partials.delete_form', ['news' => $n])
        <br><hr><br>
    @empty
        <h2>No news yet!</h2>
    @endforelse
    </div>

    {{-- END MAIN ------------------------------------------------- --}}

    {{-- SIDE ----------------------------------------------------- --}}

    <div class="col-4">
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
    </div>

    {{-- END SIDE ------------------------------------------------- --}}

</div>

@endsection