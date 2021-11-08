<!--{{$seccion->name}}-->
<div class="container">
    <div class="row  ">
        <div class="col-12" id="accordionEx{{$seccion->id_content}}" role="tablist" aria-multiselectable="false">
            <!-- Accordion card -->
            <!-- Cabecera acordeon -->
            <div class=" acordeon py-0" role="tab" id="headingOne{{$seccion->id_content}}">
                <a class="acordeon-titulo collapsed" data-toggle="collapse" data-parent="#accordionEx{{$seccion->id_content}}" href="#collapseOne{{$seccion->id_content}}" aria-expanded="false" aria-controls="collapseOne1">
                    <div class="row texto-gris-oscuro-16-f1 ">
                        <div class="col-10">{{$seccion->titulo}} </div>
                        <div class="col-2"><i class="fas fa-plus"></i></div>
                    </div>
                </a>
                <hr>
            </div>
            <!-- Cuerpo acordeon -->
            <div id="collapseOne{{$seccion->id_content}}" class="pb-3 collapse" role="tabpanel" aria-labelledby="headingOne{{$seccion->id_content}}" style="">
                <div class="col-12 card my-2">
                    <div class="card-body">
                        <div class="container ">
                            <div class="row px-0 align-items-center">
                                <div class="col texto-naranja-bold-16-f1 ">
                                    <p class="texto-naranja-bold-16-f1 my-0">{{$seccion->titulo}}</p>
                                    <p class="texto-gris-oscuro-16-f1 my-0">Type something</p>
                                </div>
                                <div class="col-2 px-0"> <img class="card-img-top" src="/img/icons/capana-naranja.png" alt="Card image cap"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>