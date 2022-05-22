<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class HomeController extends Controller {


    public function home() {

        // dd(Auth::id());
        // dd(Auth::check());
        // dd(Auth::user());
        
        return view('home.index');
    }

    // ___________________________________________
    
    public function contacts () {

        $myContacts = [
            'Dorothy Cassar' => 99887744,
            'Danine Bartolo' => 88774455,
            'Hanna Demicoli' => 77665544,
            'Steph Abela'    => 66554433
        ];

        return view('home.contacts', ['myContacts' => $myContacts]);
    }

    // ___________________________________________


    public function secret() {

        return view('secret');
    }
}
