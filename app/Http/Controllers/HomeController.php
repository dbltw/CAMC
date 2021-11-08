<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    function index(){
        
        
        
        $id_user = Auth::id();
        $secciones["content"] = DB::table('content')->join('content_type', 'content.id_content_type', '=', 'content_type.id_content_type')
                ->orderBy('order', 'asc')->get()->where('visible',1);
        $secciones["images_content"] = DB::table('images_content')->orderBy('order', 'asc')->get();
        $secciones["alertas"] = DB::table('alertas')->where('id_user', $id_user)->get();
        
        return view("secciones")->with('secciones', $secciones);
    }
}
