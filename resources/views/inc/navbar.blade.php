<div class="container">
    <div class="row align-middle">
        <img class="w-100" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/svg/rainbow-line.svg">
        <table class="table-responsive tabla-submenu-movil">
            <tbody>
                <tr>
                @foreach($territorios as $t)
                    <td>{{$t->nombre}}</td>
                @endforeach
                </tr>
            </tbody>

        </table>
    </div>
</div>

