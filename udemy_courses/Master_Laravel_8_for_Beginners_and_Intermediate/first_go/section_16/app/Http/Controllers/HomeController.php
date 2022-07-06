<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller {
    
    public function contacts () {

        $myContacts = [
            'Dorothy Cassar' => 99887744,
            'Danine Bartolo' => 88774455,
            'Hanna Demicoli' => 77665544,
            'Steph Abela'    => 66554433
        ];

        return view('home.contacts', ['myContacts' => $myContacts]);
    }
}
