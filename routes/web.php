<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route file
view()->composer('*', function ($view) {

    //Whatever logic you need to get to your $menu
    $territorios= DB::table('territorios')->get();
    return $view
            ->with('territorios', $territorios)
            ->with('id_user',1);

});


Route::get('/', function () {
    //return view('home');
    Route::get('foo', 'Photos\AdminController@method');
    
});

Route::get('/about', function () {
    return view('welcome');
});


Route::get('/contact', function () {
    return view('contact');
});

Route::get('/home', 'HomeController@index')->name('home');

//rutas login
Route::get('login', '\App\Http\Controllers\Auth\AuthController@index')->name('login');
Route::post('login', '\App\Http\Controllers\Auth\AuthController@postLogin')->name('login');
//Route::get('/registration', '\App\Http\Controllers\Auth\AuthController@registration');
// Registration Routes...

Route::get('register', '\App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', '\App\Http\Controllers\Auth\RegisterController@register');


//Auth::routes();
/*
Route::get('/login', 'AuthController@index');
Route::post('/post-login', 'AuthController@postLogin'); 
Route::get('/registration', 'AuthController@registration');
Route::post('/post-registration', 'AuthController@postRegistration'); 
Route::get('/dashboard', 'AuthController@dashboard'); 
Route::get('/logout', 'AuthController@logout');
Route::get('/reset', 'AuthController@reset');
*/
Route::get('/perfil', 'PerfilController@index')->name('perfil');
//Route::get('/alta', 'PerfilController@index')->name('perfil');
Route::get('/alertas', 'PerfilController@alertas')->name('alertas');

Route::get('/setalerta/{id_content}','AlertaController@setalerta');
Route::get('/update/{id_content}','AlertaController@update');

Route::get('logout', '\App\Http\Controllers\Auth\AuthController@logout');
