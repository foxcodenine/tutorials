@extends('layout.app2')



@section('article')
    
    <h2 style="font-family: Arial, Helvetica, sans-serif">
        {{ $news->title }}
        <x-badge :show="$news->users->is_admin" type="warning">By Admin</x-badge>
    </h2>
    
    <p style="font-family: Arial, Helvetica, sans-serif">Author {{ $news->author }}</p>
    <img src="{{ $news->urlToImage }}" alt="" width="300px">

    <x-updated :name="$news->users->name" :date="$news->created_at"></x-updated>
    
    <p style="font-family: Arial, Helvetica, sans-serif">{{ $news->content }}</p>

    


    @include('news.partials.delete_form')



    @if ($news->comments) <h3><br>Comments</h3> @endif
    @forelse ( $news->comments as $comment )
        <p>{{$comment->created_at->diffForHumans()}} - {{$comment->content}}</p>
    @empty
        <h3>No Comments</h3>
    @endforelse


    
@endsection