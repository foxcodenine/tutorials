@extends('layout.app')


@section('title', 'Create the NewsPost')



@section('article')

<form action="{{ route('news.store') }}" method="POST">
    @csrf
    <div class="layout" style="display: flex;flex-direction:column; gap: 10px">

        <input type="text" name="title" placeholder="title"   value="{{ old('title') }}">
        <input type="text" name="author" placeholder="author" value="{{ old('author') }}">
        <input type="text" name="publishedAt" placeholder="publish date" value="{{ old('publishedAt') }}">
        
        <textarea name="urlToImage" id="" cols="10" rows="1" placeholder="image url"> {{ old('urlToImage') }} </textarea >

        @error ('content') <div>{{ $message }}</div> @enderror
        <textarea name="content" id="" cols="30" rows="10" placeholder="content"> {{ old('content') }} </textarea>

        <button type="submit">Submit</button>

        @if($errors->any())
        <ul>
            @foreach($errors->all() as $error) <li>{{ $error }}</li> @endforeach
        </ul>
        @endif         
        

    </div>

</form>

@endsection