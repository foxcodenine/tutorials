@extends('layouts.app')

@section('title')

@section('content')
    <form method="POST" action="{{ route('login') }}">
        @csrf

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
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="remember" {{ old('remember') ? 'checked': '' }} id="remember">
                <label for="remember" class="text-capitalize form-check-label">remember me</label>
            </div>
            
        </div>


        <button type="submit" class="btn btn-primary w-100 mt-4" >Login</button>

    </form>

@endsection