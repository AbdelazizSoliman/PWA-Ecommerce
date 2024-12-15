<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;


class NotificationController extends Controller
{
    public function NotificationHistory(){

        $result = Notification::get();
        return response()->json($result, 200, [], JSON_UNESCAPED_SLASHES);


    }
}
