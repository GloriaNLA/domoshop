<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 bg-light">
            <div>Mi Carrito</div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="index in 2" :key="index">
                        producto {{ index }}
                    </li>
                </ul>
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
