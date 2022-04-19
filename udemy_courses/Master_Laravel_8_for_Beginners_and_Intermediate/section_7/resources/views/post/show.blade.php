@extends('layout.app')

@section('title', $post['title'])

@section('article')

@if (!isset($post['is_new']))
    <div>No blog post meta data. Using if!</div>
@elseif ($post['is_new'])
    <div>A new blog post! Using elseif!</div>
@else
    <div>Blog post is old!! Using else!</div>
@endif


<h1>{{ $post['title'] }}</h1>
<p>{{ $post['content'] }}</p>


@unless ($post['is_new'])
    <div>It is an old post... using unless</div>
@endunless

@isset($post['has_comments'])
    <div>The post has some comments... using isset</div>
@endisset

@empty($noContent)
    <br><div>noContent is empty</div>
@endempty


@endsection