@extends('layout.app2')

@section('content')

    <form action="{{ route('login') }}" method="POST" >
        @csrf

        {{-- @php var_dump(old()) @endphp --}}


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

        <div class="fom-group mt-3">
            <div class="form-check">
                <input type="check" class="form-check-input" name="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="form-check-label" for="remember">Remember Me</label>
            </div>
        </div>


        <div class="d-grid gap-2 mt-5">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
        

    </form>

@endsection
