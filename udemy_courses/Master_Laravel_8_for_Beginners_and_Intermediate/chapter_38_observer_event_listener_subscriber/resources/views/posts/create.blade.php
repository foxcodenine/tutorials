@extends('layouts.app')

@section('title', 'Create the post')

@section('content')
    
    <form action="{{ route('posts.store') }}" method="POST" enctype="multipart/form-data">
        @csrf        
        @include('posts.partials.forms.posts_form')
        <div class="mt-4">
            <button class="btn btn-block btn-primary w-100" type="submit">Create</button>
        </div>
    </form>

@endsection