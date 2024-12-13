<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeSlider;
class SliderController extends Controller
{
    public function AllSlider(){
        $result = HomeSlider::all();
        return response()->json($result, 200, [], JSON_UNESCAPED_SLASHES);
    }
}
