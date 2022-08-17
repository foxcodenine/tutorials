<!-- I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison -->

{{-- php artisan make:component Errors --}}

@if ($errors->any())
    <div class="mt-3">
        <ul class="list-group">
            @foreach ($errors->all() as $error)
                <li class="list-group-item list-group-item-danger">{{$error}}</li>
            @endforeach
        </ul>
    </div>
@endif