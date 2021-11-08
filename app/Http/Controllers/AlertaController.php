<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Alerta;

class AlertaController extends Controller
{
    function setalerta($id_content){
        
       if (!Auth::user()){
             return -1;
       }
       $id_user = Auth::id();
       $mi_alerta = DB::table('alertas')->where('id_user', $id_user)
               ->where('id_content', $id_content)->get();
        
       //dd($mi_alerta->count());
        
       
       $alerta = new Alerta;
       
       if($mi_alerta->count() >0){
           $alerta->where('id_content', $id_content)->where('id_user', $id_user)
            ->delete();
           
            return 0;
       }else{
            $alerta->id_content = $id_content;
            $alerta->id_user = $id_user;
            $alerta->activada = true;
            $alerta->save();
            
             return 1;
       }
       
    }
    
    function update($id_content){
        
       if (!Auth::user()){
             return -1;
       }
       
       $id_user = Auth::id();
       
       $mi_alerta = DB::table('alertas')->where('id_user', $id_user)
               ->where('id_content', $id_content)
               ->where('activada', 1)->get();
        
     
       $alerta = new Alerta;
       
       if($mi_alerta->count() >0){
           $alerta->where('id_content', $id_content)->where('id_user', $id_user)
            ->update(['activada' => 0]);
           
            return 0;
       }else{
             $alerta->where('id_content', $id_content)->where('id_user', $id_user)
            ->update(['activada' => 1]);
            
             return 1;
       }
       
    }
    
    function delete($id_alerta){
        
       if (!Auth::user()){
             return -1;
       }
       
       $alerta = new Alerta;
       
       $alerta->id_content = $id_content;
       $alerta->name = "movida";
       $alerta->activada = true;
       $alerta->save();
        
       return $id_content;
    }
}
