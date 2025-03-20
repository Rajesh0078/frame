<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Create or Update User
     */
    public function createOrUpdateUser(Request $request): RedirectResponse
    {
        $userId = $request->input('id');
    
        $validated = $request->validate([
            'id' => ['nullable', 'exists:users,id'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($userId)],
            'password' => [$userId ? 'nullable' : 'required', 'string', 'min:8'],
            'role' => ['nullable', 'string', 'exists:roles,slug'],
        ]);
    
        if (!$userId) {
            $validated['password'] = bcrypt($validated['password']);
        } elseif (empty($validated['password'])) {
            unset($validated['password']);
        }
    
        $user = User::updateOrCreate(
            ['id' => $validated['id'] ?? null],
            $validated
        );
    
        if (!empty($validated['role'])) {
            $role = Role::where('slug', $validated['role'])->first();
            if ($role) {
                $user->roles()->sync([$role->id]);
            }
        }
    
        return redirect()->route('login')->with('success', $userId ? "User updated successfully!" : "User created successfully!");
    }
    
}
