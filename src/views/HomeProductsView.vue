<template>
<div class="">
    <Carousel v-if="page=='list'"></Carousel>
    <ShowProduct v-if="page=='showProduct'"></ShowProduct>
    <Product v-if="page=='list' || page=='showProduct'" @mtdShowProduct="mtdShowProduct" :opcion="opcion"></Product>
    <Footer></Footer>
</div>
</template>

<script>
import Carousel from '@/components/Home/Carousel.vue';
import Product from '@/components/Home/Product.vue';
import ShowProduct from '@/components/Home/ShowProduct.vue';

export default {
    name: 'HomeProductsView',
    components: {
        Carousel,
        Product,
        ShowProduct

    },
    data() {
        return {
            page: 'list',
            product: '',
            opcion: 1,
        };
    },
    methods: {
        mtdShowProduct: function () {
          this.page = "showProduct";
          this.opcion = 2;
        }
    }

}
</script>
