<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\NotificationController;




// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::get('/getvisitor',[VisitorController::class, 'GetVisitorDetails']);
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);
Route::post('/postcontact',[ContactController::class, 'PostContactDetails']);
Route::get('/allsiteinfo',[SiteInfoController::class, 'AllSiteinfo']);
Route::get('/allcategory',[CategoryController::class, 'Allcategory']);
Route::get('/productlistbyremark/{remark}',[ProductListController::class, 'ProductListByRemark']);
Route::get('/productlistbycategory/{category}',[ProductListController::class, 'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}',[ProductListController::class, 'ProductListBySubCategory']);
Route::get('/allslider',[SliderController::class, 'AllSlider']);
Route::get('/productdetails/{id}',[ProductDetailsController::class, 'ProductDetails']);
Route::get('/notification',[NotificationController::class, 'NotificationHistory']);
Route::get('/search/{key}',[ProductListController::class, 'ProductBySearch']);



