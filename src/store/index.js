import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    user: '',
  },
  getters: {},
  mutations: {
    agregarAlCarrito(state, producto) {
      state.carrito.push(producto);
    },
    loging (state, userName){
      state.user = userName;
    },
    eliminarItemDelCarrito(state, id) {
      for (let i = 0; i < state.carrito.length; i++) {
        if (state.carrito[i].id === id) {
          state.carrito.splice(i, 1);
          break;
        }
      }
    },

    eliminarDelCarrito(state, id) {
      state.carrito.forEach((element) => {
        if (element.id === id) {
          state.carrito.splice(state.carrito.indexOf(element), 1);
        }
      });
    },
  },
  actions: {},
  modules: {},
});
