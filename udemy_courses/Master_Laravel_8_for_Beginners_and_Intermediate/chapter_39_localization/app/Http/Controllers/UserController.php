<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\Image;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->authorizeResource(User::class, 'user');       
        

        // ~~> NOTE:    $this->authorizeResource(...);
        // https://laravel.com/docs/9.x/authorization#authorizing-resource-controllers

    }
    

    /**
     * Display the specified resource.
     */

    public function show(User $user)
    {
        return view('users.show', ['user' => $user]);
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
