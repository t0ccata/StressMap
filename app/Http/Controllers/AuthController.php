<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request) {

        sleep(1);

        // Validate
        $fields = $request->validate([
            'email' => ['required','email', 'max:255', 'unique:users'],
            'name' => ['required', 'max:255'],
            'position' => ['required', 'max:255'],
            'institution' => ['required', 'max:255'],
            'city' => ['required', 'max:255'],
            'country' => ['required', 'max:255'],
            'password'=> ['required','confirmed'],
        ]);

        // Register
        $user = User::create($fields);
        
        // Login
        Auth::login($user);

        // Redirect
        return redirect()->route('home');
    }
}
