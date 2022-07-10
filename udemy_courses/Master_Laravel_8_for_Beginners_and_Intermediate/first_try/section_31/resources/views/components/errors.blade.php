<!-- Nothing in life is to be feared, it is only to be understood. 
    Now is the time to understand more, so that we may fear less. - Marie Curie -->

{{-- php artisan make:component Errors --}}

@if($errors->any())
<div class="my-2">
    @foreach($errors->all() as $error) 
    <div class="alert alert-danger" role="alert">
        {{ $error }}
    </div>
    @endforeach
</div>
@endif  

