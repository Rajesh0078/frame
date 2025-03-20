<?php

use App\Http\Controllers\AppRouteController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/',[AppRouteController::class,'index'])->name('index');

Route::middleware('guest')->group(function () {
    Route::get('/login', [AppRouteController::class, 'login'])->name('login');
    Route::get('/register', [AppRouteController::class, 'register'])->name('register');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [AppRouteController::class, 'profile'])->name('profile');
    Route::get('/products', [AppRouteController::class, 'products'])->name('products');
    Route::get('/categories', [AppRouteController::class, 'categories'])->name('categories');

    Route::middleware([ 'roles:admin,super-admin'])->group(function () {
        Route::prefix('admin')->group(function () {
            Route::get('/dashboard', [AppRouteController::class, 'dashboard'])->name('admin.dashboard');
            Route::get('/profile', [AppRouteController::class, 'adminProfile'])->name('admin.profile');
            Route::get('/products', [AppRouteController::class, 'adminProducts'])->name('admin.products');
            Route::get('/categories', [AppRouteController::class, 'adminCategories'])->name('admin.categories');
            Route::get('/banners', [AppRouteController::class, 'adminBanners'])->name('admin.banners');
            Route::get('/coupons', [AppRouteController::class, 'adminCoupons'])->name('admin.coupons');
            Route::get('/orders', [AppRouteController::class, 'adminOrders'])->name('admin.orders');
            Route::get('/users', [AppRouteController::class, 'adminUsers'])->name('admin.users');
        });
    });
});

Route::prefix('api')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->name('api.login');
    Route::post('/logout', [AuthController::class, 'logout'])->name('api.logout');
    Route::post('/users/register', [UserController::class, 'createOrUpdateUser'])->name('users.createOrUpdate');
});