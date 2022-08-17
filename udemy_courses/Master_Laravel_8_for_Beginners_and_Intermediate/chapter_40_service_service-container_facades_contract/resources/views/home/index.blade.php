@extends('layouts.app')

@section('title', 'Home')

@auth
    @php $name = auth()->user()->name @endphp
@endauth

@section('content')

    <h1>@lang('messages.welcome')</h1>

    <p>{{ __( 'messages.homepage_content', ['name' => $name ?? ''] ) }}</p>

    <p>{{ trans_choice( 'messages.profile_comments', 0, [ 'n' => 'Chris' ]  ) }}</p>
    <p>{{ trans_choice( 'messages.profile_comments', 1, [ 'n' => 'Chris' ]  ) }}</p>
    <p>{{ trans_choice( 'messages.profile_comments', 2, [ 'n' => 'Chris' ] ) }}</p>

    <p>{{ __('Using Laravel JSON!') }}</p>

@endsection