<template>
<header class="site-header sticky-top">
    <nav class="navbar navbar-expand-md mb-0 flex-column flex-md-row d-flex justify-content-between">
        <a class="py-2" href="#" aria-label="Product">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24">
                <title>DOMOEMPIRE</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
        </a>
        <router-link class="nav-link" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/login">Iniciar Sesion</router-link>
        <router-link class="nav-link" to="/ShoppingCart">Carrito de compras <i class="fas fa-cart-plus"></i> <span class="badge text-bg-secondary">{{ cantCarrito }}</span></router-link>
        <router-link class="nav-link" to="/MyShopping">Mis compras</router-link>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
        };
    },
    props: {
        cantCarrito : {
            type: Number,
            default: 0
        }
    }
};
</script>

<style scoped>
.site-header {
    background-color: #13839c;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

router-link {
    color: #425fd2;
    transition: color .15s ease-in-out;
}

router-link:hover {
    color: #fff;
    text-decoration: none;
}
</style>
