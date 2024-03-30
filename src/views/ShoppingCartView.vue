<template>
<div class="container">
    <viewCarrito v-if="page == 'viewCarrito'" @mtdBuy="mtdBuy"></viewCarrito>
    <Comprar v-if="page == 'Buy'" :dataShow="dataShow"></Comprar>
</div>
</template>

<script>
import viewCarrito from '@/components/ShoppingCart/Carrito.vue'
import Comprar from '@/components/ShoppingCart/Comprar.vue'
export default {
    name: 'componentes-Home-ShoppingCartView',
    components: {
        viewCarrito,
        Comprar
    },
    data() {
        return {
            url: '@/assets/productos/p1/p1_1.jpg',
            page: 'viewCarrito',
            dataShow: [],
        }

    },
    methods: {
        mtdBuy : function(resumenCompra){
            this.page = 'Buy';
            this.dataShow = resumenCompra;
        }
    }

}
</script>

<style>

</style>
