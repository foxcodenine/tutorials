@extends('layout.app')



@section('article')

    @forelse ($news as $n)
        <h2 style="font-family: Arial, Helvetica, sans-serif">{{ $n->title }}</h2>
        <p style="font-family: Arial, Helvetica, sans-serif">{{ $n->author }}</p>
        <img src="{{ $n->urlToImage }}" alt="" width="300px">
        <p style="font-family: Arial, Helvetica, sans-serif">{{ $n->publishedAt }}</p>

        @include('news.partials.delete_form', ['news' => $n])
        <br><hr><br>
    @empty
        <h2>No news</h2>
    @endforelse


@endsection