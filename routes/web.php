<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('app');
});

Route::get('/{name}', function () {
    return view('app');
})->where('name', '([-a-z0-9_\s]+)');

Route::get('/{name}/{name2}', function () {
    return view('app');
})->where('name', '([-a-z0-9_\s]+)')->where('name2', '([-a-z0-9_\s]+)');

Route::get('/{name}/{name2}/{name3}', function () {
    return view('app');
})->where('name', '([-a-z0-9_\s]+)')->where('name2', '([-a-z0-9_\s]+)')->where('name3', '([-a-z0-9_\s]+)');

Route::get('/{name}/{name2}/{name3}/{name4}', function () {
    return view('app');
})->where('name', '([-a-z0-9_\s]+)')->where('name2', '([-a-z0-9_\s]+)')->where('name3', '([-a-z0-9_\s]+)')->where('name4', '([-a-z0-9_\s]+)');
