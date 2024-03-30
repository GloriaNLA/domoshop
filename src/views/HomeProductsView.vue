<template>
<div class="">
    <Carousel v-if="page=='list'"></Carousel>
    <ShowProduct v-if="page=='showProduct'" :dataProducts="dataProducts" :product="product" @mtdAddCarrito="mtdAddCarrito" @mtdbackhome="mtdbackhome"></ShowProduct>
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
            opcion: 1,
            product: '',
            opcion: 1,
            dataProducts: [{
                id: 1,
                name: 'PARLANTE INTELIGENTE CON ASISTENTE DE VOZ',
                price: 129.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
                images: [{
                    id: 1,
                    url: 'https://home.ripley.com.pe/Attachment/WOP_5/2065325589768/2065325589768_2.jpg',
                }],
            }, {
                id: 2,
                name: 'PARLANTE INTELIGENTE XIAOMI SMART SPEAKER LITE NEGRO',
                price: 99.00,
                description: 'Posee un diseño compacto y exquisito con un acabado mate sofisticado en gris premium para realzar el estilo de tu hogar',
                descriptionLarger: 'Este nuevo parlante de Xiaomi, posee Alexa que es una IA de voz inteligente basada en la nube que te permite controlar el altavoz con comandos de voz.',
                images: [{
                    id: 1,
                    url: 'https://xiaomioficial.pe/media/catalog/product/M/M/MM000XIA81_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
                },{id: 2 , url:'https://xiaomioficial.pe/media/catalog/product/M/M/MM000XIA81_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549'},
                {
                    id: 3,
                    url: 'https://xiaomioficial.pe/media/catalog/product/M/M/MM000XIA81_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
                }],
            }, {
                id: 3,
                name: 'HOMEPOD MINI YELLOW',
                price: 915.00,
                description: 'PARLANTE CON ASISTENTE DE VOZ ECHO POP (1ST GEN) CHARCOAL',
                images: [{
                    id: 1,
                    url: 'https://coolboxpe.vtexassets.com/arquivos/ids/339202-800-auto?v=638418205758170000&width=800&height=auto&aspect=true',
                }, {
                    id: 2,
                    url: 'https://coolboxpe.vtexassets.com/arquivos/ids/339203-800-auto?v=638418205914270000&width=800&height=auto&aspect=true',
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
                    url: 'https://promart.vteximg.com.br/arquivos/ids/7343818-1000-1000/image-3baac2f1758a41b0ab72d1f993e7bfdf.jpg?v=638254061736130000',
                }, {
                    id: 2,
                    url: 'https://promart.vteximg.com.br/arquivos/ids/7343817-1000-1000/image-29334a78b1024371af12c6229b30a937.jpg?v=638254061735970000'
                }],
            }, {
                id: 5,
                name: 'CONTROL MOTOR INTELIGENTE SMART WIFI',
                price: 229.00,
                description: 'CONTROL INTELIGENTE PARA CORTINAS Y PERSIANAS CON CADENA TUYA-YH002',
                images: [{
                    id: 1,
                    url: 'https://promart.vteximg.com.br/arquivos/ids/6577833-1000-1000/image-09cfc332d4644a41aa02343e93c0ce8b.jpg?v=638018729258470000',
                }, {
                    id: 2,
                    url: 'https://promart.vteximg.com.br/arquivos/ids/6577834-1000-1000/image-511298c95a58436cbf680979753e0ca4.jpg?v=638018729258930000',
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
                    url: 'https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2149%2FELECTROHOGAR%2FMISmartLedBulbwarmWhite_1_163535716553_16.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=4a94203e7b04186a2534d84dcacc7b86',
                }, {
                    id: 2,
                    url: 'https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F2149%2FELECTROHOGAR%2FMISmartLedBulbwarmWhite_3_163619654080_30.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=83824b393032ff508ce40870a677d0da',
                }],
            }, {
                id: 7,
                name: 'FOCO INTELIGENTE MI BULB LED SMART ESSENTIALS',
                price: 49.00,
                description: 'Diseñada para que puedas utilizarla con tu smartphone',
                images: [{
                    id: 1,
                    url: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_123404289_3676546_1?wid=1500&hei=1500&qlt=70',
                }, {
                    id: 2,
                    url: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_123404289_3676546_4?wid=1500&hei=1500&qlt=70',
                }],
            }, {
                id: 8,
                name: 'INTERRUPTOR INTELIGENTE UNIVERSAL',
                price: 129.00,
                description: 'COM WIFI LUZ SMART BLANCO',
                images: [{
                    id: 1,
                    url: 'https://ripleype.imgix.net/https%3A%2F%2Fstatic.sellercenter.pe%2Fimages%2Fproducts%2Fjxqy4ULnn4-30.png?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=a2455f2e3119cd5cb6b6d29c32c96410',
                }, {
                    id: 2,
                    url: 'https://ripleype.imgix.net/https%3A%2F%2Fstatic.sellercenter.pe%2Fimages%2Fproducts%2FGp2zpCTjB-34.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=1ab8bf82d1178ba6ee5bdf98c941b8aa',
                }],
            }, {
                id: 9,
                name: 'INTERRUPTOR INTELIGENTE UNIVERSAL SMART NEGRO',
                price: 90.00,
                description: 'Interruptor inteligente wifi tactil para pared de 2 banda UNIVERSAL',
                images: [{
                    id: 1,
                    url: 'https://coolboxpe.vtexassets.com/arquivos/ids/208180-800-auto?v=637834975084330000&width=800&height=auto&aspect=true',
                }, {
                    id: 2,
                    url: 'https://coolboxpe.vtexassets.com/arquivos/ids/208181-800-auto?v=637834975217930000&width=800&height=auto&aspect=true'
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
                    url: 'https://www.efe.com.pe/media/catalog/product/h/m/hm000wiz02_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
                }, {
                    id: 2,
                    url: 'https://www.efe.com.pe/media/catalog/product/h/m/hm000wiz02_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
                }],
            }, {
                id: 11,
                name: 'CÁMARA SEGURIDAD FOCO 180° WIFI INTELIGENTE',
                price: 80.00,
                description: 'MICROFONO INCORPORADO, SEGUIMIENRO INTELIGENTE',
                images: [{
                    id: 1,
                    url: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_121327704_2991917_1?wid=800&hei=800&qlt=70',
                }],
            }, {
                id: 12,
                name: 'CERRADURA DIGITAL MAMPARAS',
                price: 699.00,
                description: 'CERRADURA DIGITAL MAMPARAS CORREDIZAS INTELIGENTE WIFI SML15',
                descriptionLarger: 'Huella dactilar,  Claves digitales',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 13,
                name: 'CERRADURA DE INTERIOR INTELIGENTE',
                price: 129.00,
                description: 'Posee 5 métodos diferentes de desbloqueo',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 14,
                name: 'TIMBRE INTERCOMUNICADOR INTELIGENTE EXTERIORES WIFI INALAMBRICO HD',
                price: 69.00,
                description: 'Nuevo timbre inteligente evitaras abrirle la puerta a desconocidos',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 15,
                name: 'ALARMA SENSOR INTELIGENTE EXTERIOR PIR SOLAR WIFI',
                price: 192.00,
                description: 'Sensor de detección exterior con energía solar Tuya WiFi con función de alarma de sonido y luz',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 16,
                name: 'CERRADURA INTELIGENTE TUYA-X2 LECTOR DE HUELLA DIGITAL',
                price: 399.00,
                description: '4 Metodos de bloqueo: Huella Digital, Contraseña, clave, tarjeta IC',
                descriptionLarger: 'Admite configuraciones de contraseña anti-espionaje. Método de desbloqueo de parámetros del producto Huella digital, clave, contraseña, tarjeta IC, ',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 17,
                name: 'CÁMARAS DE SEGURIDAD KIT 2',
                price: 589.00,
                description: 'Uso Ideal: Cuida a tu Bebe, Casa, Oficina, Negocio, Mascota Etc.',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 18,
                name: 'SENSOR DE MOVIMIENTO CON ALARMA/TIMBRE',
                price: 69.00,
                description: 'Sensor de movimiento infrarojo con alarma.',
                descriptionLarger: 'Ideal para acceso de tiendas, salas de venta, recepciones, etc.',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 19,
                name: 'TP-LINK - EXTENSOR DE COBERTURA TL-WA850RE',
                price: 89.00,
                description: 'Expande fácilmente la cobertura inalámbrica con sólo presionar el botón de Extensor de Rango',
                images: [{
                    id: 1,
                    url: '../assets/productos/p1/p1_1.jpg',
                }, {
                    id: 2,
                    url: '../assets/productos/p1/p1_2.jpg',
                }],
            }, {
                id: 20,
                name: 'TP-LINK - EAP110 PUNTO DE ACCESO INALAMBRICO 300MBPS',
                price: 155.00,
                description: 'TP-LINK',
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
        mtdbackhome: function(){
            this.page = "list";
            this.opcion = 1;
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
