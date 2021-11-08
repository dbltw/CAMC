@extends('layouts.app')

@section('content')
@include('inc.navbar_perfil')
<div class="container">
    <div class="row mx-0 my-4">
        <div class=" my-3 texto-azul-32-f2">Edita tu perfil</div>
        <div class="texto-gris-oscuro-16-f1">Modifica o cambia tus datos personales.</div>
    </div>
</div>
<div class="container">

            <div class="row texto-gris-oscuro-14-f1">
            <div class="col-12">
                <form method="POST" action="{{ route('register') }}">
                        @csrf

                   <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                    </div>
                    
                     <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                    </div>
                    
                    <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Repetir password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                    <div class="form-group ">
                        <label for="">Apellidos</label>
                        <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="">
                    </div>
                    
                    <div class="row ">

                        <div class="form-group col-7 pr-0 ">
                            <label for="">Fecha de nacimiento</label>
                            <input type="text" class="form-control" id="f_nacimiento" name="f_nacimiento" placeholder="">

                        </div>
                        <div class="form-group col">
                            <label for="">Género</label>
                            <input type="text" class="form-control" id="gender" name="gender" placeholder="">
                        </div>
                    </div>

                    <div class="row">

                        <div class="form-group col-8 pr-0">
                            <label for="">Movil</label>
                            <input type="text" class="form-control" id="movil" name="movil" placeholder="">

                        </div>
                        <div class="form-group col">
                            <label for="">CP</label>
                            <input type="text" class="form-control" id="cp" name="cp" placeholder="">
                        </div>
                    </div>



                    <div class="form-group mb-4">
                        <label for="">Dónde nos ves</label>
                        <select class="form-control" id="">
                            <option>Movistar+</option>
                            <option>Vodafone</option>
                            <option>Orange</option>
                            <option>Euskaltel</option>
                            <option>Telecable</option>
                            <option>R</option>
                            <option>Otros</option>
                            <option>Ninguno</option>
                        </select>
                    </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="my-3 btn boton-naranja py-2 px-5 texto-blanco-16-f3">
                                    Guardar
                                </button>
                            </div>
                        </div>
                       
                    </form>

            </div>
        </div>
</div>
@endsection
