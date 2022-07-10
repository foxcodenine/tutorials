@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
    @forelse ($posts as $key => $post )
        <div>{{$key}} {{ $post['title'] }}</div>
    @empty
        No post found
    @endforelse
@endsection