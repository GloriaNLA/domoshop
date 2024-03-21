<template>
<div class="container">
    <div class="p-4">
        <div class="row d-flex justify-content-center bg-light rounded-3">
            <div class="col-md-6 col-sm-12 p-4 border-3">
                <div class="row rounded-5 d-flex justify-content-center border-2 h-100 p-2" id="div-img-campovisual">
                    <div id="carouselExampleIndicators" class="carousel slide home-carousel mt-0" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button v-for="(image, index) in product.images" :key="index" type="button" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : null" :aria-label="'Slide ' + (index + 1)"></button>
                        </div>

                        <div class="carousel-inner">
                            <div v-for="(image, index) in product.images" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
                                <img class="d-block w-100 imagen-carousel" :src="image.src" alt="..." data-bs-toggle="modal" data-bs-target="#lightbox" :data-bs-slide-to="index" />
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
            <div class="col-md-6 col-sm-12 p-5">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="text-product">{{product.description}} </p>
                <p class="text-product fw-bolder">{{product.price}}</p>
                <div class="mt-2">
                    <button class="btn btn-success">
                        Añadir a Carrito <i class="fas fa-cart-plus"></i>
                    </button>
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
            required: true
        }
    },
    methods: {

    },

}
</script>

<style>
.text-content {
    text-align: justify !important;
}
</style>
