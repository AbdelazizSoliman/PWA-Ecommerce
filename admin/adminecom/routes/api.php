<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::get('/getvisitor',[VisitorController::class, 'GetVisitorDetails']);
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);
Route::get('/allsiteinfo',[SiteInfoController::class, 'AllSiteinfo']);
Route::get('/allcategory',[CategoryController::class, 'Allcategory']);
