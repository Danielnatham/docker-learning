<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/users', function () {
    $i = 0;
    $users = [];

    while ($i != 10) {
        $users[] = [
            'id' => $i,
            'name' => fake()->name,
        ];

        $i++;
    }

    return $users;
});
