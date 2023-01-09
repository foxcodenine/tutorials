@extends('layouts.app')

@section('title', 'Contact')

@section('content')
<div class="row">

    <div class="col-md-6 mr-auto">
        <h2>{{__('Contact Us')}}</h2>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>

        <ul class="list-unstyled pl-md-5 mb-5">
        <li class="d-flex text-black mb-2">
            <span class="mr-3"><span class="icon-map"></span></span> &nbsp; &nbsp; 61 Street Name, City Name Here, Malta
        </li>
        <li class="d-flex text-black mb-2"><span class="mr-3"><span class="icon-phone"></span></span> &nbsp; &nbsp;+356 79310212</li>
        <li class="d-flex text-black"><span class="mr-3"><span class="icon-web"></span></span> &nbsp;  &nbsp; <a href="{{ route('foxcode')}}">foxcode.io</a> </li>
        <li class="d-flex text-black"><span class="mr-3"><span class="icon-envelope-o"></span></span> &nbsp;  &nbsp; chris12aug@yahoo.com </li>
        </ul>
    </div>

    <div class="col-md-6">
        <form class="mb-5" method="post" id="contactForm" name="contactForm" action="{{ route('home.sendEmail') }}" >
        @csrf
          <div class="row">
            
            <div class="col-md-12 form-group">
              <label for="name" class="col-form-label">{{__('Name')}}</label>
              <input type="text" class="form-control" name="name" id="name" value="{{ old('name') }}">
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label for="email" class="col-form-label">{{__('Email')}}</label>
              <input type="text" class="form-control" name="email" id="email" value="{{ old('email') }}"">
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 form-group">
              <label for="message" class="col-form-label">{{__('Message')}}</label>
              <textarea class="form-control" name="message" id="message" cols="30" rows="7">{{ old('message') }}</textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <input type="submit" value="{{__('Send Message')}}" class="btn btn-primary my-2">
              <span class="submitting"></span>
            </div>
          </div>
        </form>

        <div id="form-message-warning mt-4"></div> 
        {{-- <div id="form-message-success"> Your message was sent, thank you! </div> --}}
      </div>

      <x-errors/>


    {{-- <h1>Contact Page</h1>
    <p>Hello this is contact</p> --}}
    
    @can('home.secret')
        <a href="{{ route('home.secret') }}" class="mt-4">Go to special contact detail page!</a>
    @endcan
</div>
@endsection


