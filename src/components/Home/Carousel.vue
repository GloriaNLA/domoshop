<template>
<div>
    <div id="carouselExampleIndicators" class="carousel slide home-carousel mt-0" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active imagen-carousel">
                <img src="@/assets/banners/banner_1.png" class="d-block w-100" alt="banner principal">
            </div>
            <div class="carousel-item imagen-carousel">
                <img src="@/assets/banners/banner_2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item imagen-carousel">
                <img src="@/assets/banners/banner_3.png" class="d-block w-100" alt="...">
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
</template>
<script>

export default {
  name: 'componentes-Home-Carousel',
  components: {
    
  }
  
}
</script>
<style scoped>
.carousel-control-prev .carousel-control-next {
    right: 0;
    left: auto;
}

.imagen-carousel{
    height: 25em;
}
</style>
