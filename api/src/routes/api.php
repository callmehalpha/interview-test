<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::post('/register',[\App\Http\Controllers\AuthController::class,'register']);
Route::post('/login',[\App\Http\Controllers\AuthController::class,'authenticate']);
Route::post('/logout',[\App\Http\Controllers\AuthController::class,'logout']);
Route::get('/show-user/{id}',[\App\Http\Controllers\UsersController::class,'show']);
Route::get('/delete-user/{id}',[\App\Http\Controllers\UsersController::class,'destroy']);
Route::get('/users',[\App\Http\Controllers\UsersController::class,'index']);
Route::post('/update-user/{id}',[\App\Http\Controllers\UsersController::class,'update']);
