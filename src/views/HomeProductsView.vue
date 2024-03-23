<template>
<div class="">
    <Carousel v-if="page=='list'"></Carousel>
    <ShowProduct v-if="page=='showProduct'" :dataProducts="dataProducts" :product="product" @mtdAddCarrito="mtdAddCarrito"></ShowProduct>
    <Product v-if="page=='list'" @mtdAddCarrito="mtdAddCarrito" :dataProducts="dataProducts" @mtdShowProduct="mtdShowProduct" :opcion="opcion"></Product>

    <div style="position: fixed; top: 90%; transform: translateY(-50%); left: 10px;">
        <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="offcanvas"
         data-bs-target="#offcanvasScrolling"
         aria-controls="offcanvasScrolling" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables."
         
         >
            <i class="fas fa-user i-custom"></i> <!-- Cambia 'fas fa-user' al nombre de la clase de tu icono de asistente -->
        </button>
    </div>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header bg-main">
            <h5 class="offcanvas-title text-white" id="offcanvasScrollingLabel">Enviamos tu dudas y preguntas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
    </div>
</div>
</template>

<script>
import Carousel from '@/components/Home/Carousel.vue';
import Product from '@/components/Home/Product.vue';
import ShowProduct from '@/components/Home/ShowProduct.vue';
import {
    mapMutations
} from 'vuex';

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
                    url: '@/assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '@/assets/productos/p1/p1_2.jpg'
                }],
            }, {
                id: 2,
                name: 'PARLANTE INTELIGENTE XIAOMI SMART SPEAKER LITE NEGRO',
                price: 99.00,
                description: 'Posee un diseño compacto y exquisito con un acabado mate sofisticado en gris premium para realzar el estilo de tu hogar',
                descriptionLarger: 'Este nuevo parlante de Xiaomi, posee Alexa que es una IA de voz inteligente basada en la nube que te permite controlar el altavoz con comandos de voz.',
                images: [{
                    id: 1,
                    url: '@/assets/productos/p2/p2.jpg',
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
            carritoEdit: [], //carrito temporeano
            setItemCarrito: {
                id: 0,
                name: '',
                price: 0,
                image: '',
                quantity: 0,
            }
        };
    },
    methods: {
        ...mapMutations(['agregarAlCarrito']),

        agregarProductoAlCarrito(producto) {
            this.agregarAlCarrito(producto);
        },
        mtdShowProduct: function (product) {
            this.page = "showProduct";
            this.opcion = 2;
            this.product = product;
        },
        mtdAddCarrito: function (product) {
            this.setItemCarrito = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0].url,
                quantity: 1,
            }
            this.agregarAlCarrito(this.setItemCarrito);

        }
    }

}
</script>
<style>

.i-custom {
    font-size: 50px;
    width: 50px;
    height: 60px;
}
</style>
