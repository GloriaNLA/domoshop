import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: []
  },
  getters: {
  },
  mutations: {
    agregarAlCarrito(state, producto) {
      state.carrito.push(producto);
    }
  },
  actions: {
  },
  modules: {
  }
})
