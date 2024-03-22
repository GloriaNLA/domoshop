<template>
  <div id="app">
    <!--<nav>
     <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </nav>-->
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '@/components/Nav.vue';
  import Footer from '@/components/Footer.vue';
  export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      
      userName : '',
    };
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


.bg-main {
  background-color: #13839c;
}
</style>
