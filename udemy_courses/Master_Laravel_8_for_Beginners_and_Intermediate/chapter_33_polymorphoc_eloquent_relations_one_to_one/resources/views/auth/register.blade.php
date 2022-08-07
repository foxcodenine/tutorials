@extends('layouts.app')

@section('title')

@section('content')
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <div class="form-group mt-4">
            <label class="text-capitalize" for="name">name</label>
            <input type="text"  name="name" id="name" value="{{old('name')}}" required
                class="form-control @error('name') is-invalid @enderror">
            @error('name')
                <span class="invalid-feedback">
                    <strong>{{ $error->first('name') }}</strong>
                </span>                
            @enderror
        </div>

        <div class="form-group mt-4">
            <label class="text-capitalize" for="email">email</label>
            <input type="text" name="email" id="email" value="{{old('email')}}" required
                class="form-control @error('email') is-invalid @enderror">
            @error('email')
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>                
            @enderror

        </div>

        <div class="form-group mt-4">
            <label class="text-capitalize" for="password">password</label>
            <input type="password" name="password" id="password" required
                class="form-control {{ $errors->has('password') ? ' is-invalid' : ''}}">
            @if ($errors->has('password'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group mt-4">
            <label class="text-capitalize" for="password_confirmation">Retyed password</label>
            <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" required>
        </div>

        <button type="submit" class="btn btn-primary w-100 mt-4" >Register</button>

    </form>

@endsection