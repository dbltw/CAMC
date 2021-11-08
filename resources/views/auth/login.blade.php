@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row mx-0 my-4">
        <div class=" my-3 texto-azul-32-f2">Registrate</div>
        <div class="texto-gris-oscuro-16-f1">Para acceder participar en promociones y acceder a tu area privada, debes registrarte.</div>
    </div>
</div>
<div class="container">
    <div class="row texto-gris-oscuro-14-f1">
        <div class="col-12">
                <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group">
                        <label for="email" class="">Email </label>

                      
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                        
                    </div>

                    <div class="form-group">
                        <label for="password" class="">{{ __('Password') }}</label>

                        
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password"  autocomplete="current-password">

                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror
                       
                    </div>

                    <div class="form-group">
                        
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                <label class="form-check-label" for="remember">
                                    No cerrar sesión
                                </label>
                            </div>
                       
                    </div>

                    <div class="">
                        
                            <button type="submit" class="my-3 btn boton-naranja py-2 px-5 texto-blanco-16-f3 ">
                                Enviar
                            </button>

                            @if (Route::has('password.request'))
                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            @endif
                        </div>
                     <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <a href="/perfil" type="submit" class="my-3 btn boton-naranja py-2 px-5 texto-blanco-16-f3"> Date de alta</a>
                            </div>
                        </div>
                  
                </form>
        </div>
    </div>
</div>
@endsection
