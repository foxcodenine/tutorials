@extends('layouts.app')

@section('title', 'Show User')

@section('content')

        <div class="row">

            <div class="col-4">
                <img src="{{ $user?->image?->url() ?? App\Models\Image::default() }}" alt="" class="img-thumbnail avatar">
            </div>

            <div class="col-8">
                <h3>{{ $user->name }}</h3>
            </div>
            <div class="card-body mt-4">
                <p class="h5 my-2">Comments</p>
                <x-comment-form>
                    <x-slot name='route'>
                    {{ route('users.comments.store', ['user' => $user->id]) }}
                    </x-slot>
                </x-comment-form>

                <x-comment-list :comments="$user->commentsOn"></x-comment-list>
            </div>

        </div>

@endsection