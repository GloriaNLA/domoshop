<template>
<div class="">
    <div class="album py-lg-5 py-sm-0 bg-light">
        <div class="container">
            <div class="row g-3 d-flex justify-content-between my-2">
                <div class="col-md-4 col-lg-3 col-sm-6" v-for="(product, index) in dataProducts" :key="index">
                    <div class="card">
                        <img :src="product.images[0]" class="card-img-top" :alt="'domotica'+index" @click="mtdShowProduct(product)">
                        <div class="card-body">
                            <h5 class="card-title" @click="mtdShowProduct(product)">{{product.name}}</h5>
                            <p class="text-product">{{product.description}} </p>
                            <p class="text-product fw-bolder">S/ {{product.price}}.00 </p>
                            <div class="mt-2">
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
            this.$emit('mtdShowProduct',product);
        },
        mtdAddCarrito: function (product) {
            this.$emit('mtdAddCarrito',product);
        }
    }

}
</script>

<style>
.text-product {
    text-align: left !important;
    color: #727b8b;
}
</style>
