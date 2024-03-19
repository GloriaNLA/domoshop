<template>
<div class="container">
    <div class="p-4">
        <div class="row d-flex justify-content-center bg-light rounded-3">
            <div class="col-md-6 col-sm-12 p-4 border-3">
                <div class="row rounded-5 d-flex justify-content-center border-2 h-100 p-2" id="div-img-campovisual">
                    <div id="carouselExampleIndicators" class="carousel slide home-carousel mt-0" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active imagen-carousel">
                                <img src="../../assets/card1.png" class="d-block w-100" data-bs-toggle="modal" data-bs-target="#lightbox" data-bs-slide-to="0" alt="...">
                            </div>
                            <div class="carousel-item imagen-carousel">
                                <img src="../../assets/card1.png" class="d-block w-100" data-bs-toggle="modal" data-bs-target="#lightbox" data-bs-slide-to="1" alt="...">
                            </div>
                            <div class="carousel-item imagen-carousel">
                                <img src="../../assets/card1.png" class="d-block w-100" data-bs-toggle="modal" data-bs-target="#lightbox" data-bs-slide-to="2" alt="...">
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
                <h5 class="card-title">Producto ejemplo</h5>
                <p class="text-product">Para el hogar </p>
                <p class="text-product fw-bolder">S/. 100</p>
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
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                            <li class="text-content">Something short and leading about the collection below—its contents, the creator</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="row">
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
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="../../assets/card1.png" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../assets/card1.png" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../../assets/card1.png" alt="Third slide">
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
    methods: {

    }, 

}
</script>

<style>
.text-content {
    text-align: justify !important;
}
</style>
