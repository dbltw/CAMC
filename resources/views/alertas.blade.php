@extends('layouts.app')


@section('content')
@include('inc.navbar_perfil')
    <div class="container">
        <div class="row mx-0 my-4">


            <div class=" my-3 texto-azul-32-f2">Edita tus alertas</div>
            <div class="texto-gris-oscuro-16-f1">Modifica las alertas de tus contenidos favoritos.</div>
        </div>
    </div>
<div class="container">
        <div class="row   mx-0 my-3">

            <div class="texto-gris-oscuro-18-f1">Estas son tus alertas activas</div>
            
            @foreach($mis_alertas as $a)
                <div id="alerta_{{$a->id_alerta}}" class="col-12 card my-2"  draggable="true">
                    <div class="card-body">
                        <div class="container ">
                            <div class="row px-0 align-items-center">

                                <div class="col texto-naranja-bold-16-f1 ">
                                    <p class="texto-naranja-bold-16-f1 my-0">{{ \Illuminate\Support\Str::limit($a->titulo, 20, $end='...') }}</p>
                                    <p class="texto-gris-oscuro-16-f1 my-0">{{date('l j F | h:i', strtotime($a->fecha_alerta))}} </p>
                                </div>
                                  @if ($a->activada === 1)
                                    <div class="col-2 px-0"> <img class="card-img-top" data-id_alerta="{{$a->id_alerta}}" data-id_content="{{$a->id_content}}" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/capana-naranja.png" ></div>
                                  @else
                                    <div class="col-2 px-0"> <img class="card-img-top" data-id_alerta="{{$a->id_alerta}}" data-id_content="{{$a->id_content}}" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/campana-gris.png" ></div>
                                  @endif
                                
                            </div>
                        </div>
                    </div>

                </div>
            @endforeach

          
        </div>
    </div>


<script>
 $(".card-img-top").click(function(e){
      
       var current_obj = $(this);
       var id_content = current_obj.data("id_content");
       var id_alerta = current_obj.data("id_alerta");
       var dataString = 'id_content='+id_content+'&id_user=1';
       var tooltipSeg = 3000;
       $.ajax({

            type:'GET',
            url:'/update/'+id_content,
            data:dataString,
                success:function(data){
                    if(data=="1"){
                       
                        current_obj.removeAttr("title"); 
                        current_obj.attr("src","http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/capana-naranja.png");
                        current_obj.attr("data-original-title","Acabas de activar esta alerta").tooltip('toggle');
                                                 
                        setTimeout(function(){ 
                            current_obj.tooltip('toggle'); 
                            current_obj.removeAttr("data-original-title"); 
                        }, tooltipSeg);   
                        
                    }else{
                        
                        current_obj.removeAttr("title"); 
                        current_obj.attr("src","http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/campana-gris.png");
                        current_obj.attr("data-original-title","Acabas de desactivar la alerta.").tooltip('toggle');
                    
                        setTimeout(function(){ 
                             current_obj.tooltip('toggle');
                             current_obj.removeAttr("data-original-title"); 
                        }, tooltipSeg);  
                    }
                }

         });
    });
</script>
@endsection