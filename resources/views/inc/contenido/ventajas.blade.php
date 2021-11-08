<!--{{$seccion->name}}-->
<div class="container">
    <div class="row   mx-0 my-3">
        <div class="col-12 card px-0">
            <div class="card-body p-0">
                <div id="carouselExampleIndicators{{$seccion->id_content}}" class="carousel slide pointer-event" data-ride="carousel">

                <div class="carousel-inner">
                      @foreach($images as $img)
                    <div class="carousel-item {{ $img->active === 1 ? "active" : "" }}">
                        <img class="d-block w-100 radio-borde-imagen-card" src="{{$img->url_image}}" alt="First slide">
                        <div class="carousel-caption  d-md-block">
                            <p class="texto-blanco-20-bold-f2">{{$img->text1}}</p>
                            <a href="#" class="btn boton-naranja py-2 px-5 texto-blanco-16-f3 ">{{$img->text2}}</a>
                        </div>
                    </div>
                      @endforeach

                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators{{$seccion->id_content}}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators{{$seccion->id_content}}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</div>
</div>