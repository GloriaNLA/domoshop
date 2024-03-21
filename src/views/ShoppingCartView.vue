<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 bg-light">
            <div>
                <h2>Mi carrito</h2>
            </div>
            <div class="card-custom bg-white">
                <table class="table table-borderless table-responsive">
                   <caption></caption> 
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" colspan="2">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-4 p-4 bg-light p-5">
            Resumen de compra
            <p>SubTotal</p>
            <p>Total</p>
        </div>
    </div>
    <div class="row"></div>
</div>
</template>

<script>
export default {
    name: 'componentes-Home-Product',
    components: {

    }

}
</script>

<style>
.style {
    border-radius: 2px;
    border-color: #13839c;
    padding: 5px;
}
</style>
