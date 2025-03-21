<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AppRouteController extends Controller
{
    public function index(){
        return Inertia::render("Index");
    }

    public function login(Request $request): Response
    {
        return Inertia::render('Login');
    }

    public function register(Request $request): Response
    {
        return Inertia::render('Register');
    }
    public function profile(Request $request): Response
    {
        return Inertia::render('Profile');
    }

    public function products(Request $request): Response
    {
        return Inertia::render('products');
    }

    public function categories(Request $request): Response
    {
        return Inertia::render('categories');
    }

    public function aboutUs(Request $request): Response
    {
        return Inertia::render('AboutUs');
    }

    public function howWeWork(Request $request): Response
    {
        return Inertia::render('HowWeWork');
    }

    public function dashboard(Request $request): Response
    {
        return Inertia::render('Dashboard');
    }
    public function adminProfile(Request $request): Response
    {
        return Inertia::render('AdminProfile');
    }

    public function adminProducts(Request $request): Response
    {
        return Inertia::render('AdminProducts');
    }

    public function adminCategories(Request $request): Response
    {
        return Inertia::render('AdminCategories');
    }

    public function adminBanners(Request $request): Response
    {
        $banners = Banner::with(['creator', 'updater'])->orderBy('order')->get();
        return Inertia::render('AdminBanners',compact('banners'));
    }

    public function adminCoupons(Request $request): Response
    {
        return Inertia::render('AdminCoupons');
    }

    public function adminOrders(Request $request): Response
    {
        return Inertia::render('AdminOrders');
    }
    public function adminUsers(Request $request): Response
    {
        return Inertia::render('AdminUsers');
    }
}
