@extends('layouts.app')

@section('title', 'Edit User')

@section('content')

    <form   action="{{ route('users.update', ['user' => $user->id ]) }}" 
            method="POST" enctype="multipart/form-data"
            class="form-horizontal"
        >
        @csrf
        @method('PUT')

        <div class="row">

            <div class="col-4">
                <img src="{{ $user?->image?->url() ?? App\Models\Image::default() }}" alt="" class="img-thumbnail avatar">

                <div class="card mt-4">
                    <div class="card-body">
                        <h6>Upload a different photo</h6>
                        <input type="file" class="form-control-file"  name="avatar">
                    </div>
                </div>
            </div>

            <div class="col-8">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="name" id="name" value="{{ old('name', $user->name) }}">
                </div>
                <div class="form-group">            
                    <button class="btn btn-primary mt-4" type="submit">Save Changes</button>
                </div>
            </div>

            <x-errors/>

        </div>


    </form>

@endsection