<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\StudentController;
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

Route::prefix('auth')->middleware('guest')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'authenticate']);
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::post('auth/refresh', [AuthController::class, 'refresh']);
// courses
Route::prefix('course')->middleware('api')->group(function () {
    Route::get('/', [CoursesController::class, 'index']);
    Route::get('/{id}', [CoursesController::class, 'show']);
    Route::post('/', [CoursesController::class, 'create']);
    Route::put('/{id}', [CoursesController::class, 'update']);
    Route::delete('/{id}', [CoursesController::class, 'destroy']);
});


// students
Route::prefix('student')->middleware('api')->group(function () {
    Route::get('/', [StudentController::class, 'index']);
    Route::get('/{id}', [StudentController::class, 'show']);
    Route::post('/', [StudentController::class, 'create']);
    Route::put('/{id}', [StudentController::class, 'update']);
    Route::delete('/{id}', [StudentController::class, 'destroy']);
});
