@extends('layout.app2')


@section('title', 'Update the NewsPost')



@section('article')

<form action="{{ route('news.update', ['news' => $currentNews->id]) }}" method="POST">
    @csrf
    @method('PUT')
    @include('news.partials.form')

</form>

@endsection