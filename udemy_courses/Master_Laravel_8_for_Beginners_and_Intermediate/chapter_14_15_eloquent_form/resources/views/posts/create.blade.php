@extends('layouts.app')

@section('title', 'Create the post')

@section('content')
    
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf

        @error('title') <div>{{ $message }}</div> @enderror
        
        <div><input type="text" name="title" value="{{ old('title') }}"></div>
        <div><textarea name="content">{{ old('content') }}</textarea></div>
        <div><button type="submit">Create</button></div>

        @if ($errors->any())
            <div>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{$error}}</li>
                    @endforeach
                </ul>
            </div>
        @endif
    </form>

@endsection