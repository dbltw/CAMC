
<style>
.activado {
    font-weight: 600 !important;
}
</style>
<div class="container">
        <div class="row align-middle">
            <img class="w-100" src="http://ltwdesarrollo.es/proyecto-amc/dist/img/svg/rainbow-line.svg">
            <table class="table-responsive tabla-submenu-movil">
                <tbody>
                    <tr>
                        <td class="{{ $slug === "perfil" ? "activado" : "" }}"><a href="/perfil">Perfil</a></td>
                        <td class="{{ $slug === "alertas" ? "activado" : "" }}"><a href="/alertas">Alertas</a></td>
                    </tr>
                </tbody>

            </table>
        </div>

    </div>

