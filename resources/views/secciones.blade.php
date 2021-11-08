@extends('layouts.app')
@php ($template = 'inc.contenido.')
@php ($template_out)
@section('content')
@include('inc.navbar')
    @foreach($secciones["content"] as $seccion)
        @php ($template_out = $template.$seccion->controller)
        @include($template_out,['seccion' => $seccion, 
            'images'=>$secciones["images_content"]->where('id_content', $seccion->id_content)->where('visible', 1),
            'alerta'=>$secciones["alertas"]->where('id_content', $seccion->id_content)->where('activada', 1)])
   @endforeach
@endsection