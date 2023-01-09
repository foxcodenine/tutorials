@extends('layout.app')

@section('title', 'Contacts')

@section('article')
    <h3>CONTACTS</h3> 
	<p>Alan Casha</p>					
	<p>Analise Apap</p>					
	<p>Andrea Marino</p>					
	<p>Anna Marie Mercieca</p>					
	<p>Annabelle Muscat</p>					
	<p>Caroline Mercieca</p>					
	<p>Charles Cardona</p>					
	<p>Charlot Cauchi</p>					
	<p>Cris Darmanin</p>				
    <p>Dad</p>		
@endsection

@section('aside')
	<h4>Contacts</h4>
	<ul>
		@each('includes.contact_item', $myContacts, 'number', 'includes.empty')
	</ul>
@endsection

@section('footer') 
    @include('includes.footer', ['author'=>'Christopher Farugia', 'email'=>'chris12aug@yahoo.com'])
@endsection