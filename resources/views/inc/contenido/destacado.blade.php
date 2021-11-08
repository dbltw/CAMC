<!--{{$seccion->name}}-->
@php($dia = date('l j F | h:i', strtotime($seccion->fecha_alerta)))
<style>
.tooltip-inner {
  max-width: 236px !important;
  font-size: 14px;
  padding: 10px 15px 10px 20px;
  background: rgba(0, 0, 0);
  font-family: Montserrat;
  text-align: left;
}
</style>
<div class="container">
<div class="row   mx-0 my-3">
    <div class="col-12 card px-0">
        <img class="card-img-top ajuste-borde-imagen" src="{{$seccion->imagen_principal}}" alt="Card image cap">
        <div class="card-body">
            <p class="texto-azul-32-f2">{{$seccion->titulo}}</p>
            <p class="texto-gris-oscuro-16-f1">{{$seccion->descripcion}}</p>
            <div class="container ">
                <div class="row align-items-center">
                    <div class="col-2 px-0">

                        @if (count($alerta) === 1)
                        <img class="card-img-top" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/capana-naranja.png" alt="Card image cap">
                        @else
                        <img class="card-img-top" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/campana-gris.png" alt="Card image cap">
                        @endif
                    </div>
                    <div class="col texto-naranja-bold-16-f1 ">{{$dia}}</div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
<script type="text/javascript">

    
    
    $(".card-img-top").click(function(e){
       var dia = '{{$dia}}';
       var current_obj = $(this);
       var id_content = {{$seccion->id_content}};
       var dataString = 'id_content={{$seccion->id_content}}&id_user=1';
       var tooltipSeg = 3000;
       $.ajax({
            type:'GET',
            url:'/setalerta/'+id_content,
            data:dataString,
                success:function(data){
                    if(data=="1"){
                        
                        current_obj.removeAttr("title"); 
                        current_obj.attr("src","http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/capana-naranja.png");
                        current_obj.attr("data-original-title","Acabas de activar la alerta. Recibirás un SMS recordatorio el " + dia).tooltip('toggle');
                                                 
                        setTimeout(function(){ 
                            current_obj.tooltip('toggle'); 
                        }, tooltipSeg);   
                        
                        
                    }else if(data=="0"){
                        current_obj.removeAttr("title"); 
                        current_obj.attr("src","http://ltwdesarrollo.es/proyecto-amc/dist/img/icons/campana-gris.png");
                        current_obj.attr("data-original-title","Acabas de desactivar la alerta.").tooltip('toggle');
                    
                        setTimeout(function(){ 
                             current_obj.tooltip('toggle'); 
                        }, tooltipSeg);  
                    }else if(data=="-1"){
                        location.href = "/login"
                    }
                }

         });
    });
    
    

    
    
       

</script>
