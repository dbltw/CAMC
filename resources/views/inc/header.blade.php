 <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"  crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<nav class=" d-sm-none navbar navbar-expand-lg navbar-dark bg-dark" accesskey="">
        <a class="navbar-brand texto-blanco-16-f3" href="/home">LO MEJOR DE LA TV EN UN SOLO CLUB</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarSupportedContent" style="">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item p-0">
                    <a class="nav-link" href="/perfil">Area Privada
                    <i class=" fas fa-angle-right flecha-item-menu pr-5"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ventajas
                    <i class=" fas fa-angle-right flecha-item-menu pr-5"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Ganadores
                    <i class=" fas fa-angle-right flecha-item-menu pr-5"></i></a>
                </li>
                @if(Auth::user())
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Cerrar sesisón
                    <i class=" fas fa-angle-right flecha-item-menu pr-5"></i></a>
                </li>
                @endif
            </ul>

        </div>
    </nav>
    