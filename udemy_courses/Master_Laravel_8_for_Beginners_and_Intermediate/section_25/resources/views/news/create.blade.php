@extends('layout.app2')


@section('title', 'Create the NewsPost')



@section('article')

<form action="{{ route('news.store') }}" method="POST">
    @csrf
    @php $currentNews=null @endphp
    @include('news.partials.form')
</form>

@endsection