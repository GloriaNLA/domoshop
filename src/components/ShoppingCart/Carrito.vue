<template>
<div>
    <div class="row d-flex justify-content-between mt-4 cont-shopping" v-if="carrito.length > 0">
        <div class="col-md-9 bg-light">
            <div class="bg-main rounded-2 mb-2 mt-4 pt-2 pb-1">
                <h2>Mi carrito</h2>
            </div>
            <div class="card-custom bg-white rounded-3">
                <table class="table table-bordered table-hover table-responsive">
                    <caption></caption>
                    <thead class="table-secondary">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" colspan="1">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">SubTotal</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cpData">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.name }}</td>
                            <td>
                                <div class="quantity-control">
                                    <button type="button" class="btn btn-outline-info btn-sm" @click="mtdItemProductDelect(item.id)">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <div class="quantity-display">{{ item.quantity }}</div>
                                    <button type="button" class="btn btn-outline-info btn-sm" @click="mtdAddProduct(item)">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </td>
                            <td>S/. {{ item.subtotal}}.00</td>
                            <td>
                                <div>
                                    <button type="button" class="btn btn-outline-danger btn-sm" @click="mtdDeleteProduct(item.id)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-3 bg-light py-4">
            <div class="card-resumen p-3">
                <blockquote class="blockquote">
                    <p>Resumen de la compra</p>
                </blockquote>
                <hr>
                <p class="text-start"><b>Total: S/. {{ subtotal }}</b></p>
                <p class="text-start">Costo de Envio: S/.00.00</p>
                <hr>
                <p class="text-start"><b>Total: S/. {{ total }}</b></p>
                <div class="mt-3">
                    <button class="btn-buy" @click="mtdBuy"> Comprar Ahora!</button>
                </div>
            </div>

        </div>
    </div>
    <div v-else class="row cont-shopping mt-4">
        <div class="col-md-12 bg-light">
            <div class="card-resumen py-5 mt-5">
                <div>
                    <img src="@/assets/carrito_vacio.png" alt="Carrito Vacío" style="width: 150px; height: 150px;">
                </div>
                <blockquote class="blockquote">
                    <p>Tu carrito está vacío</p>
                </blockquote>
                <p><em>Aprovecha nuestras Ofertas</em></p>
                <p><em>Contactos con nosotros para un asesoramiento personalizado</em></p>
                <i></i>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import {
    mapMutations
} from 'vuex';
export default {
    name: 'componentes-ShoppingCart-Carrito',
    data() {
        return {
            url: '@/assets/productos/p1/p1_1.jpg',
            dataShow: [],
            itemDataShow: {
                id: '',
                name: '',
                image: '',
                price: '',
                quantity: '',
                subtotal: '',
            }
        }

    },
    computed: {
        ...mapState(['carrito']),

        cpData() {
            const productosAgrupados = {};
            this.dataShow = this.carrito;

            // Agrupamos por productos
            this.dataShow.forEach(producto => {
                if (!productosAgrupados[producto.id]) {
                    productosAgrupados[producto.id] = [];
                }
                productosAgrupados[producto.id].push(producto);
            });

            // Reiniciamos dataShow
            this.dataShow = [];

            // Colocamos en la data
            for (const productId in productosAgrupados) {
                if (productosAgrupados.hasOwnProperty(productId)) {
                    const product = productosAgrupados[productId];
                    this.setItemCarrito = {
                        id: product[0].id,
                        name: product[0].name,
                        price: product[0].price,
                        image: product[0].image,
                        quantity: product.length,
                        subtotal: product[0].price * product.length,
                    };
                    this.dataShow.push(this.setItemCarrito);
                }
            }

            return this.dataShow;
        },

        subtotal() {
            let total = 0;
            this.carrito.forEach(item => {
                total += item.price * item.quantity;
            });
            return total.toFixed(2);
        },
        total() {
            return this.subtotal ;
        }
    },
    methods: {
        ...mapMutations(['eliminarDelCarrito']),
        ...mapMutations(['eliminarItemDelCarrito']),
        ...mapMutations(['agregarAlCarrito']),

        mtdBuy: function () {
            this.$emit('mtdBuy', this.dataShow);

        },
        mtdDeleteProduct: function (id) {
            this.eliminarDelCarrito(id);
        },
        mtdItemProductDelect: function (id) {
            this.eliminarItemDelCarrito(id);
        },
        mtdAddProduct: function (product) {
            var setItemCarrito = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1,
            }
            this.agregarAlCarrito(setItemCarrito);
        }
    }

}
</script>

<style>
.card-custom {
    border-radius: 5px;
    border: 3px solid #13839c !important;
}

.cont-shopping {
    height: 40em !important;
}

.card-resumen {
    border: 3px solid #13839c;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}

/* estilos del boton de compra */
.btn-buy {
    background: #1AAB8A;
    color: #fff;
    border: none;
    position: relative;
    height: 50px;
    font-size: 1.2em;
    padding: 0 2em;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
}

.btn-buy:hover {
    background: #fff;
    color: #1AAB8A;
}

.btn-buy:before,
.btn-buy:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1AAB8A;
    transition: 400ms ease all;
}

.btn-buy:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
}

.btn-buy:hover:before,
.btn-buy:hover:after {
    width: 100%;
    transition: 800ms ease all;
}

.quantity-control {
    display: flex;
    align-items: center;
}

.quantity-display {
    margin: 0 10px;
    /* Espacio entre los botones y el número */
}
</style>
