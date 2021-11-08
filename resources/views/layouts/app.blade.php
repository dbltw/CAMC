<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!--title>{{ config('app.name', 'Laravel') }}</title-->

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
        <!-- Bootstrap CSS -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Open+Sans+Condensed:300,700|Raleway&display=swap" rel="stylesheet">
    

    <title>LO MEJOR DE LA TV EN UN SOLO CLUB</title>
    
    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{ asset('css/all.css') }}" rel="stylesheet" type="text/css" >
    <!-- Styles -->
    <!--link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet"-->

</head>
<body>
    @include('inc.header')
   
    @yield('content')
    @include('inc.redes')
    @include('inc.footer')
</body>
</html>