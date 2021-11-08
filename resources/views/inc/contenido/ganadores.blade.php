<!--{{$seccion->name}}-->
<div class="container">
<div class="row   mx-0 my-3">
    <div class="col-12 card px-0">
        <img class="card-img-top mt-0 ajuste-borde-imagen" src="{{$seccion->imagen_principal}}" alt="Card image cap">
        <div class="card-body">
            <p><img class="/proyecto-amc/dist/img/logo-82x39 " src="{{$seccion->imagen_logo}}" alt="Thumbnail image"></p>
            <p class="texto-gris-oscuro-16-f1">{{$seccion->titulo}}</p>
            <a href="{{$seccion->url_boton}}" class="btn boton-naranja py-2 px-5 texto-blanco-16-f3 ">{{$seccion->text_boton}}</a>
        </div>
    </div>
</div>
</div>