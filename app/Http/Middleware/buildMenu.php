<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

public function handle($request, Closure $next){
    $territorios = DB::table('territorios')->get();
    session(['territorios' => $territorios]); 
}