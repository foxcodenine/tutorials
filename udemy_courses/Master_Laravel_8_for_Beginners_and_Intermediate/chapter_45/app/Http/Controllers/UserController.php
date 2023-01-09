<?php

namespace App\Http\Controllers;

use App\Contracts\CounterCountract;
use App\Facades\CounterFacade;
use App\Http\Requests\UpdateUserRequest;
use App\Models\Image;
use App\Models\User;
use App\Services\Counter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    // * NOTICE: In this controller we are using a custom Facade CounterFacade
    // *    While in PostController we are using a custom Contract CounterCountract

    // private $counter;


    public function __construct()
    {
        $this->middleware('auth');
        
        // ~~> NOTE:    $this->authorizeResource(...);
        // https://laravel.com/docs/9.x/authorization#authorizing-resource-controllers
        $this->authorizeResource(User::class, 'user');
    }
    

    /**
     * Display the specified resource.
     */

    public function show(User $user)
    {



        // ______________________________

        // --- Count how many users are on this page
        
            // ~~> CHANGED: 
            // $counter = resolve(Counter::class);

            // ~~> TO:
            // $counter = $this->counter;


        return view('users.show', [
            'user' => $user, 
            'counter' => CounterFacade::increment("user-{$user->id}", "user")
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit(User $user)
    {
        return view('users.edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateUserRequest $request, User $user)
    {
        // ----- Update user name --------------------------------------

        $user->name = $request->name;
        $user->save();

        // ----- Update user avatar ------------------------------------

        // $validate = $request->validate();

        if ($request->hasFile('avatar')) {

            if ($user->image && !in_array(substr($user->image->path, 0, 7) , ['http://', 'https:/'])) {
                Storage::delete($user->image->path);
            }

            // $path = $request->file('avatar')->store('avatars');

            $file               = $request->file('avatar');
            $fileName           = auth()->id() . '-user.' . $file->guessExtension();

            $fileRelativePath   =  $file->storeAs('avatars', $fileName);

            if ($user->image) {   
                $user->image->path = $fileRelativePath;
                $user->image->save();
                
            } else {
                $avatarImage = Image::make([ 'path' => $fileRelativePath]);
                $user->image()->save($avatarImage);
            }            
        }

        if ($user->locale !== $request->get('locale')) {
            $user->locale = $request->get('locale');
            $user->save();
        }

        

        return redirect()->route('users.show', ['user' => $user->id])->withStatus('Profile was updated');
    }
}
