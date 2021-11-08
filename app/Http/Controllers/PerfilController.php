<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class PerfilController extends Controller
{
    function index(){
        $slug = "perfil";
        return view("perfil")->with('slug', $slug);
    }
    
    function alertas(){
        $id_user = Auth::id();
        $slug = "alertas";
        
        $mis_alertas = DB::table('alertas')
                ->join('content', 'alertas.id_content', '=', 'content.id_content')
                ->where('id_user', $id_user)->get();
        
        return view("alertas")
                    ->with('slug', $slug)
                    ->with('mis_alertas', $mis_alertas);
    }
    
    function alta(){
        $slug = "perfil";
        return view("alta")->with('slug', $slug);
    }
}
