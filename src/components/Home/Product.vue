<template>
<div>
    <div class="album py-lg-5 py-sm-0 bg-light">
        <div class="container">
            <div class="row g-3 d-flex justify-content-between my-2">
                <div class="col-md-4 col-lg-3 col-sm-6" v-for="(product, index) in dataProducts" :key="index">
                    <div class="card h-card d-flex flex-column justify-content-between">
                        <div class="text-center mt-3" @click="mtdShowProduct(product)" >
                            <!-- Para centrar la imagen -->
                            <img v-if="product.id == 1" src="@/assets/productos/p1/p1_1.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 2" src="@/assets/productos/p2/p2.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 3" src="@/assets/productos/p3/p3.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 4" src="@/assets/productos/p4/p4.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 5" src="@/assets/productos/p5/p5.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 6" src="@/assets/productos/p6/p6.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 7" src="@/assets/productos/p7/p7.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 8" src="@/assets/productos/p8/p8.png" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 9" src="@/assets/productos/p9/p9.png" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 10" src="@/assets/productos/p10/p10.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 11" src="@/assets/productos/p11/p11.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 12" src="@/assets/productos/p12/p12.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 13" src="@/assets/productos/p13/p13.png" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 14" src="@/assets/productos/p14/p14.png" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 15" src="@/assets/productos/p15/p15.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 16" src="@/assets/productos/p16/p16.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 17" src="@/assets/productos/p17/p17.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 18" src="@/assets/productos/p18/p18.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 19" src="@/assets/productos/p19/p19.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                            <img v-if="product.id == 20" src="@/assets/productos/p20/p20.jpg" class="card-img-top" :alt="'domotica '+index" style="width: 150px; height: 150px;">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" @click="mtdShowProduct(product)">{{product.name}}</h5>
                            <p class="text-product">{{product.description}} </p>
                            <p class="text-product fw-bolder">S/ {{product.price}}.00 </p>
                        </div>
                        <div class="mt-auto">
                            <!-- Para que el botón siempre esté en la parte inferior -->
                            <button class="btn btn-success w-100" @click="mtdAddCarrito(product)">
                                Añadir a Carrito <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'componentes-Home-ListProduct',
    data() {
        return {
            cant: 20
        }
    },
    components: {

    },
    props: {
        opcion: Number,
        dataProducts: {
            type: Array,
        }
    },
    computed: {
        cpNum() {
            return this.opcion == 2 ? this.cant = 6 : this.cant = 20;
        }
    },
    methods: {
        mtdShowProduct: function (product) {
            this.$emit('mtdShowProduct', product);
        },
        mtdAddCarrito: function (product) {
            this.$emit('mtdAddCarrito', product);
        }
    }

}
</script>

<style>
.text-product {
    text-align: left !important;
    color: #727b8b;
}

.h-card {
    height: 30em;
}

.card-img-top {
    justify-content: center !important;
}
</style>
