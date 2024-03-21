<template>
<div class="">
    <Carousel v-if="page=='list'"></Carousel>
    <ShowProduct v-if="page=='showProduct'" :dataProducts="dataProducts" :product="product"></ShowProduct>
    <Product v-if="page=='list' || page=='showProduct'" @mtdShowProduct="mtdShowProduct" :opcion="opcion"></Product>
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
            dataProducts: [{
                id: 1,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 2,
                name: 'PARLANTE INTELIGENTE XIAOMI SMART SPEAKER LITE NEGRO',
                price: 99.00,
                description: 'Posee un diseño compacto y exquisito con un acabado mate sofisticado en gris premium para realzar el estilo de tu hogar',
                descriptionLarger: 'Este nuevo parlante de Xiaomi, posee Alexa que es una IA de voz inteligente basada en la nube que te permite controlar el altavoz con comandos de voz.',
                images: [{
                    id: 1,
                    url: '../assets/productos/p2/p2.jpg',
                }],
            }, {
                id: 3,
                name: 'HOMEPOD MINI YELLOW',
                price: 915.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 4,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 5,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 6,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 7,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 8,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 9,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 10,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 11,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 12,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 13,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 14,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 15,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 16,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 1,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 17,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 18,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 19,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 20,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
               images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }],
            product: {}, //Producto seleccionado
        };
    },
    methods: {
        mtdShowProduct: function (data) {
            this.page = "showProduct";
            this.opcion = 2;
            this.product = data.product;
            console.log(this.product);
        }
    }

}
</script>
