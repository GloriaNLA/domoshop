<template>
<div class="container">
    <div class="p-4">
        <div class="row d-flex justify-content-center bg-light rounded-3 h-customen">
            <div class="col-md-6 col-sm-12 p-3 mt-2">
                <div class="row d-flex justify-content-center h-100 p-4">
                    <div class="card-description">
                        <div id="carouselExampleIndicators" class="carousel slide home-carousel mt-0" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button v-for="(image, index) in product.images" :key="index" type="button" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : null" :aria-label="'Slide ' + (index + 1)"></button>
                            </div>

                            <div class="carousel-inner">
                                <div v-for="(image, index) in product.images" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
                                    <img class="d-block w-100 imagen-carousel" :src="image.src" :alt="'foto del producto'+index" data-bs-toggle="modal" data-bs-target="#lightbox" :data-bs-slide-to="index" />
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!--descripcion-->
            <div class="col-md-6 col-sm-12 p-4 mt-2">
                <div class="card-description p-3">
                    <div class="my-2">
                        <h5 class="card-title">{{ product.name }}</h5>
                    </div>
                    <div class="my-5">
                        <p class="text-product">{{product.description}} </p>
                        <p class="text-product fw-bolder">S/. {{product.price}}.00</p>
                    </div>
                    <div class="tarjeta my-2">
                                <p>Cantidad de productos pedidos: {{ cantidadPedidos }}</p>
                            </div>
                    <div class="mt-2">
                        <button class="btn btn-success" @click="mtdAddCarrito(product)">
                            Añadir a Carrito <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center bg-light rounded-3 mt-4">
            <div class="col-12 m-2">
                <div class="card">
                    <div class="card-header bg-main">
                        <h3>Descripcion</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li class="text-content">{{product.descriptionLarger}}</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="row mt-2">
            <h4>Tambien te podrían interesar</h4>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal" id="lightbox" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-main">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <div id="carouselLightbox" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="(image, index) in product.images" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
                                <img class="d-block w-100" :src="image.src" :alt="'slide '+index" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselLightbox" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselLightbox" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'componentes-Home-ShowProduct',
    components: {

    },
    props: {
        product: {
            type: Object,
            default: function () { // Función que devuelve el valor predeterminado
                return {}; // Valor predeterminado, en este caso, un objeto vacío
            }
        }
    },
    methods: {
        mtdAddCarrito: function (product) {
            this.$emit('mtdAddCarrito', product);
        }
    },

}
</script>

<style>
.text-content {
    text-align: justify !important;
}

.h-customen {
    height: 30em !important;
}

.card-description {
    border: 1px solid #13839c;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}

.tarjeta {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
