@extends('layouts.app')

@section('title', 'Update the post')

@method('PUT')

@section('content')
    
    <form action="{{ route('posts.update', ['post' => $post->id]) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        @include('posts.partials.forms.posts_form')
        <div class="my-4 d-grid gap-2">
            <button class="btn btn-block btn-primary" type="submit">Update</button>
        </div>
    </form>

@endsection