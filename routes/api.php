<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Book;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/books', function () {
//     return Book::all();
// });

// Route::get('/books/{id}' , function(Request $request , $id){
//     return Book::find($id);
// });


// products api Process

Route::get('/books', [BookController::class, 'index']);
Route::get('/books/{id}' , [BookController::class, 'show']);


// routes for Auth Process

Route::prefix('auth')->group(function(){
    Route::post('/register' , [AuthController::class, 'register']);
    Route::post('/login' , [AuthController::class, 'login']);
    Route::get('/logout' , [AuthController::class, 'logout']);
});

// routes for Categories api

Route::get('/categories',[CategoryController::class,'index']);

