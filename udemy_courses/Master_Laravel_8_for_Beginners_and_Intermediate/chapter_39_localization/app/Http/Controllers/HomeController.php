<?php

namespace App\Http\Controllers;


class HomeController extends Controller
{
    public function home () {

        return view('home.index');
    }

    public function contact () {
        return view('home.contact');
    }

    public function secret () {
        return view('home.secret');
    }
}
