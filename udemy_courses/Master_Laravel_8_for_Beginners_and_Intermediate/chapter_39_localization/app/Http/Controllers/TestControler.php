<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TestControler extends Controller
{
    public function index() 
    {
        /*
            Mail::to($post->user)->send(
                new CommentPostedMail($comment)
            );
        */
        Mail::to('chris12aug@yahoo.com')->send( new TestMail());

        echo 'So far so good!';
    }
}
