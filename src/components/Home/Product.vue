<template>
<div class="">
    <div class="album py-lg-5 py-sm-0 bg-light">
        <div class="container">
            <div class="row g-3 d-flex justify-content-between my-2">
                <div class="col-md-4 col-lg-3 col-sm-6" v-for="index in cpNum" :key="index">
                    <div class="card">
                        <img src="../../assets/card1.png" class="card-img-top" alt="domotica" @click="mtdShowProduct">
                        <div class="card-body">
                            <h5 class="card-title" @click="mtdShowProduct">Producto {{ index }}</h5>
                            <p class="text-product">Para el hogar </p>
                            <p class="text-product fw-bolder">S/. 100</p>
                            <div class="mt-2">
  <button class="btn btn-success w-100">
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
    name: 'componentes-Home-Product',
    data(){
        return{
            cant: 20
        }
    },
    components: {

    },
    props:{
        opcion:Number,
    },
    computed: {
        cpNum() {
    return this.opcion == 2 ? this.cant=6 : this.cant =20;
  }
    },
    methods:{
        mtdShowProduct: function(){
            this.$emit('mtdShowProduct');
        }
    }

}
</script>
<style>
.text-product{
    text-align: left !important;
    color: #727b8b;
}
</style>
