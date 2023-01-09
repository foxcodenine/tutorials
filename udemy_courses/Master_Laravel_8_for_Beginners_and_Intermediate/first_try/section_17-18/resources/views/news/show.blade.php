@extends('layout.app2')



@section('article')
    
    <h2 style="font-family: Arial, Helvetica, sans-serif">{{ $news->title }}</h2>
    <p style="font-family: Arial, Helvetica, sans-serif">{{ $news->author }}</p>
    <img src="{{ $news->urlToImage }}" alt="" width="300px">
    <p style="font-family: Arial, Helvetica, sans-serif">{{ $news->publishedAt }}</p>
    <p style="font-family: Arial, Helvetica, sans-serif">{{ $news->content }}</p>

    @include('news.partials.delete_form')
    
@endsection