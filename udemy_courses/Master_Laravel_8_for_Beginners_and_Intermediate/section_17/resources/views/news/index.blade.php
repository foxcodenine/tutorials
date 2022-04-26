@extends('layout.app2')



@section('article')

    @forelse ($news as $n)
        <h2> <a href="{{ route('news.show', ['news' => $n->id]) }}"> {{ $n->title }} </a></h2>
        
        <p>{{ $n->author }}</p>
        <img src="{{ $n->urlToImage }}" alt="" width="300px">

        <p>{{ $n->created_at->diffForHumans() }}</p>

        @if(now()->diffInMinutes($n->created_at) < 5)
            <div class="alert alert-info" >New!</div>
        @endif

        @include('news.partials.delete_form', ['news' => $n])
        <br><hr><br>
    @empty
        <h2>No news</h2>
    @endforelse


@endsection