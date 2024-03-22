<template>
<div class="container">
    <div class="row d-flex justify-content-between mt-4 cont-shopping" v-if="carrito.length>0">
        <div class="col-md-8 bg-light">
            <div class="bg-main rounded-2 mb-2 mt-4 pt-2 pb-1">
                <h2>Mi carrito</h2>
            </div>
            <div class="card-custom bg-white rounded-3">
                <table class="table table-borderless table-hover table-responsive">
                    <caption></caption>
                    <thead class="table-secondary">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" colspan="2">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in carrito">
                            <th scope="row">1</th>
                            <td>{{item}}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity}}</td>
                            <td>
                                <div>
                                    <button type="button" class="btn btn-outline-danger btn-sm">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-4 bg-light py-4">
            <div class="card-resumen p-3">
                <blockquote class="blockquote">
                    <p>Resumen de la compra</p>
                </blockquote>
                <hr>
                <p class="text-start"><b>SubTotal: {{ subtotal }} </b></p>
                <p class="text-start"><b>Total: {{ total }}</b></p>
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
export default {
    name: 'componentes-Home-ShoppingCartView',
    data() {
        return {
            url: '../assets/productos/p1/p1_1.jpg',

        }

    },
    components: {

    },
    props: {
        carrito: {
            type: Array,
            default: function () { // Función que devuelve el valor predeterminado
                return []; // Valor predeterminado, en este caso, un objeto vacío
            }
        }
    },
    mounted() {
        console.log(this.carrito);
    },
    computed: {
        subtotal() {
            let total = 0;
            this.carrito.forEach(item => {
                total += item.price * item.quantity;
            });
            return total;
        },
        total() {
            return this.subtotal + 10;
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
</style>
