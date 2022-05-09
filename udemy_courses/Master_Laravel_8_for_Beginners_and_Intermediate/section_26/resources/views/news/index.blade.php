@extends('layout.app2')



@section('article')

    @forelse ($news as $n)
        <h2> <a href="{{ route('news.show', ['news' => $n->id]) }}"> {{ $n->title }} </a></h2>
        
        <p>{{ $n->author }}</p>
        <img src="{{ $n->urlToImage }}" alt="" width="300px">

        <p class="text-muted">
            Added {{ $n->created_at->diffForHumans() }}
            by {{ $n->users->name }}
        </p>
       

        @if ($n->comments_count)  
            <p>{{ $n->comments_count }} comment{{ $n->comments_count === 1 ? '' : 's' }} </p> 
        @else
            <p>No comments </p> 
        @endif

        @if(now()->diffInMinutes($n->created_at) < 5)
            <div class="alert alert-info" >New!</div>
        @endif

        @include('news.partials.delete_form', ['news' => $n])
        <br><hr><br>
    @empty
        <h2>No news yet!</h2>
    @endforelse


@endsection