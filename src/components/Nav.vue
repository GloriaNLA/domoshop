<template>
<header class="site-header sticky-top">
    <nav class="navbar navbar-expand-md px-5 mb-0 flex-column flex-md-row d-flex justify-content-between">
        <a class="py-2" href="#" aria-label="Product">
            <div>
                    <img src="@/assets/logoempire.png" alt="Carrito Vacío" style="width: 60px; height: 60px;">
                </div>
        </a>
        <router-link class="nav-link" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/ShoppingCart">
            <div class="cart-icon-container">
                <i class="fas fa-cart-plus cart-icon"></i>
                <span class="badge text-bg-info">{{ carrito.length }}</span>
            </div>
        </router-link>
        <router-link class="nav-link" to="/login">Iniciar Sesion</router-link>
        <router-link class="nav-link" to="/login">Asesoría</router-link>
    </nav>
</header>
</template>

<script>
import {
    mapState
} from 'vuex';
export default {
    name: 'Navbar',
    data() {
        return {
            total: 0,
        };
    },
    computed: {
        ...mapState(['carrito'])
    },
};
</script>

<style scoped>
.site-header {
    background-color: #878b8b;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
}

nav {
    padding: 12px;
}

nav a {
    font-weight: bold;
    font-size: 18px !important;
    color: #e4f5f5;
}

nav a.router-link-exact-active {
    color: #265b67;
}

router-link {
    color: #425fd2;
    transition: color .15s ease-in-out;

}

router-link:hover {
    color: #fff;
    text-decoration: none;
}

.cart-icon-container {
    position: relative;
    display: inline-block;
}

.cart-icon {
    font-size: 26px;
}

.badge {
    position: absolute;
    top: -8px;
    /* Ajusta la posición vertical según tus necesidades */
    right: -8px;
    /* Ajusta la posición horizontal según tus necesidades */
    color: white;
    /* Color del texto de la insignia */
    border-radius: 50%;
    /* Para hacer la insignia redonda */
    padding: 4px 7px;
    /* Espaciado dentro de la insignia */
    font-size: 11px;
    /* Tamaño de fuente de la insignia */
    line-height: 1;
    /* Alineación vertical del texto de la insignia */
}
</style>
