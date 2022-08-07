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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return view('users.show', ['user' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return view('users.edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        // $validate = $request->validate();
        $user->name = $request->name;
        $user->save();

        if ($request->hasFile('avatar')) {

            if ($user->image && !in_array(substr($user->image->path, 0, 7) , ['http://', 'https:/'])) {
                Storage::delete($user->image->path);
            }
            // $path = $request->file('avatar')->store('avatars');

            $file               = $request->file('avatar');
            $fileName           = auth()->id() . '-user.' . $file->guessExtension();
            // dump($fileName);
            $fileRelativePath   =  $file->storeAs('avatars', $fileName);
            // dump($fileRelativePath);
            // exit;



            if ($user->image) {   
                $user->image->path = $fileRelativePath;
                $user->image->save();
                
            } else {
                $avatarImage = Image::make([ 'path' => $fileRelativePath]);
                $user->image()->save($avatarImage);
            }

            
        }
        return redirect()->route('users.show', ['user' => $user->id])->withStatus('Profile was updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
