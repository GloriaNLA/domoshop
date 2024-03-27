<template>
<div class="">
    <Carousel v-if="page=='list'"></Carousel>
    <ShowProduct v-if="page=='showProduct'" :dataProducts="dataProducts" :product="product" @mtdAddCarrito="mtdAddCarrito"></ShowProduct>
    <Product v-if="page=='list'" @mtdAddCarrito="mtdAddCarrito" :dataProducts="dataProducts" @mtdShowProduct="mtdShowProduct" :opcion="opcion"></Product>

    <div style="position: fixed; top: 90%; transform: translateY(-50%); left: 10px;">
        <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="offcanvas" 
         data-bs-target="#offcanvasScrolling"
         aria-controls="offcanvasScrolling" data-bs-placement="top"
         >
            <i class="fas fa-user i-custom"></i> <!-- Cambia 'fas fa-user' al nombre de la clase de tu icono de asistente -->
        </button>
    </div>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header bg-main">
            <h3 class="offcanvas-title text-white" id="offcanvasScrollingLabel">Te asesoramos</h3>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body bg-light">
            <BodyOffCanvas @mtdHidden="mtdHidden"></BodyOffCanvas>
        </div>
    </div>
</div>
</template>

<script>
import Carousel from '@/components/Home/Carousel.vue';
import Product from '@/components/Home/Product.vue';
import ShowProduct from '@/components/Home/ShowProduct.vue';
import BodyOffCanvas from '@/components/Home/BodyOffCanvas.vue';
import {
    mapMutations
} from 'vuex';


export default {
    name: 'HomeProductsView',
    components: {
        Carousel,
        Product,
        ShowProduct,
        BodyOffCanvas

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
                name: 'SENSOR DE INUNDACIÓN TUYA',
                price: 49.00,
                description: 'Detector inalámbrico de fugas de agua',
                descriptionLarger: 'Cuando se detecta agua notifica a través de la aplicación móvil, Control desde cualquier lugar donde Internet esté disponible'+
                'Compatible con iOS y Android',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 5,
                name: 'CONTROL MOTOR INTELIGENTE SMART WIFI',
                price: 229.00,
                description: 'CONTROL INTELIGENTE PARA CORTINAS Y PERSIANAS CON CADENA TUYA-YH002',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 6,
                name: 'FOCO INTELIGENTE XIAOMI MI SMART LED BULB WARM',
                price: 29.00,
                description: 'La bombilla LED Mi Smart (blanco cálido) utiliza perlas de 2700K',
                descriptionLarger:' El resultado es una iluminación suave que lo ayuda a relajarse y hace que su hogar se sienta más cálido.'
                +'El brillo alcanza los 810 lm y se puede ajustar en cualquier momento.',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 7,
                name: 'FOCO INTELIGENTE MI BULB LED SMART ESSENTIALS',
                price: 49.00,
                description: 'Diseñada para que puedas utilizarla con tu smartphone',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 8,
                name: 'INTERRUPTOR INTELIGENTE UNIVERSAL',
                price: 129.00,
                description: 'COM WIFI LUZ SMART BLANCO',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 9,
                name: 'INTERRUPTOR INTELIGENTE UNIVERSAL SMART NEGRO',
                price: 90.00,
                description: 'Interruptor inteligente wifi tactil para pared de 2 banda UNIVERSAL',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 10,
                name: 'FOCO LED INTELIGENTE',
                price: 62.00,
                description: 'FOCO LED INTELIGENTE WIFI WIZ FILAMENTO GLOBO 6.9W E27',
                descriptionLarger:'Con WiZ tienes una solución para ambientar con diferentes tonos de luz todos los espacios del hogar'+
                'negocio o lugar de trabajo con nuestra amplia familia de productos! Los puedes conectar con vía Wi-Fi',
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
                price: product.price.toFixed(2),
                image: product.images[0].url,
                quantity: 1,
            }
            this.agregarAlCarrito(this.setItemCarrito);

        },
        mtdHidden: function () {
            let myOffcanvas = document.getElementById('offcanvasScrolling');
            var offcanvas = bootstrap.Offcanvas.getInstance(myOffcanvas);
            offcanvas.hide();
        },
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
