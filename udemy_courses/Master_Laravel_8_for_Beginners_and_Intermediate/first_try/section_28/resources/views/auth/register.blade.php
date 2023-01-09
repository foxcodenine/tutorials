@extends('layout.app2')

@section('content')

    <form action="{{ route('register') }}" method="POST" >
        @csrf

        {{-- @php var_dump(old()) @endphp --}}

        <div class="form-group mt-3">
            <label for="name">Name</label>
            <input type="text" value="{{ old('name') }}" required id="name" name="name"
                   class="form-control @error('name') is-invalid @enderror" >

            @error('name')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @enderror
            
        </div>

        <div class="form-group mt-3">
            <label for="email">Email</label>
            <input type="text" value="{{ old('email') }}" required id="email" name="email"
                   class="form-control @error('email') is-invalid @enderror">

            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @enderror

        </div>
        
        <div class="form-group mt-3">
            <label for="password">Password</label>
            <input type="password"  required id="password" name="password"
            class="form-control @error('password') is-invalid @enderror" >

            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @enderror

        </div>

        <div class="form-group mt-3">
            <label for="password_confimation">Retype Password</label>
            <input class="form-control" type="password"  required id="password_confirmation" name="password_confirmation">
        </div>

        <div class="d-grid gap-2 mt-5">
            <button type="submit" class="btn btn-primary">Register</button>
        </div>
        

    </form>

@endsection
