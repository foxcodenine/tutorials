<?php

namespace App\Http\Controllers;

use App\Http\Requests\contactSendEmailRequest;
use App\Jobs\ThrottleMailJob;
use App\Mail\HomeContactSendMarkdownMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

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

    public function send(contactSendEmailRequest $request) 
    {
        $validated = $request->validated();

        $name = $validated['name'];
        $email = $validated['email'];
        $message = $validated['message'];

        


        // -------------------------------------------------------------
        // ----- Sending an Email to user - someone comment  on his post     


        Mail::to(User::find(1))->queue(
            new HomeContactSendMarkdownMail($name, $email, $message),
        );

        // -------------------------------------------------------------


        session()->flash('status', 'Your message was sent, thank you!');
        return redirect()->back();
    }
}
