@extends('layouts.app')
@section('content')

@if(Auth::user())
    @include('inc.navbar_perfil')
    <div class="container">
        <div class="row mx-0 my-4">
            <div class=" my-3 texto-azul-32-f2">Edita tu perfil</div>
            <div class="texto-gris-oscuro-16-f1">Modifica o cambia tus datos personales.</div>
        </div>
    </div>
@else
    @include('inc.line')
    <div class="container">
        <div class="row mx-0 my-4">
            <div class=" my-3 texto-azul-32-f2">¡Apúntate ya!</div>
            <div class="texto-gris-oscuro-16-f1">Un solo registro, muchos regalos y ventajas exclusivas todos los meses.</div>
        </div>
    </div>
   
@endif
                       
    <div class="container">
        @include('auth.register')  
    </div>
@endsection
