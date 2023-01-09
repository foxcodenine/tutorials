@extends('layout.app')



@section('article')

    @forelse ($news as $key => $value)
        <h2 style="font-family: Arial, Helvetica, sans-serif">{{ $value['title'] }}</h2>
        <p style="font-family: Arial, Helvetica, sans-serif">{{ $value['author'] }}</p>
        <img src="{{ $value['urlToImage'] }}" alt="" width="300px">
        <p style="font-family: Arial, Helvetica, sans-serif">{{ $value['publishedAt'] }}</p>
        <br><hr><br>
    @empty
        <h2>No news</h2>
    @endforelse


@endsection