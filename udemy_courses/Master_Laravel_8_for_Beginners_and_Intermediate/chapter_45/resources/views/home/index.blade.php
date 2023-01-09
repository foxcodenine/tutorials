@extends('layouts.app')

@section('title', 'Home')



@section('content')

    {{-- <h1>@lang('messages.welcome')</h1> --}}

    {{-- <p>{{ __( 'messages.homepage_content', ['name' => $name ?? ''] ) }}</p> --}}

    {{-- <p>{{ trans_choice( 'messages.profile_comments', 0, [ 'n' => 'Chris' ]  ) }}</p> --}}
    {{-- <p>{{ trans_choice( 'messages.profile_comments', 1, [ 'n' => 'Chris' ]  ) }}</p> --}}
    {{-- <p>{{ trans_choice( 'messages.profile_comments', 2, [ 'n' => 'Chris' ] ) }}</p> --}}

    {{-- <p>{{ __('Using Laravel JSON!') }}</p> --}}

    <section class="jumbotron text-center" id="mainBanner">
        <div class="container">
            @auth
                @php $name = auth()->user()->name @endphp
                <h1 class="jumbotron-heading">@lang('messages.welcome_auth', ['name' => substr($name, 0, strpos($name, ' '))])</h1>
            @else
                <h1 class="jumbotron-heading">@lang('messages.welcome')</h1>
            @endauth
            
            <p class="lead text-muted"> {{ __( 'messages.homepage_content' ) }} </p>

            @auth
                @php $count_messages = auth()->user()->commentsOn->count() @endphp
                <p class="lead text-muted"> {{ trans_choice( 'messages.homepage_message',  $count_messages ) }} </p>
            @endauth
            <p>
                <a href="{{ route('posts.index') }}"  class="btn btn-primary my-2 width100px">{{__('Blog Posts')}}</a>
                <a href="{{ route('home.contact') }}" class="btn btn-secondary my-2 width100px">{{__('Contact')}}</a>
            </p>
        </div>
    </section>

@endsection