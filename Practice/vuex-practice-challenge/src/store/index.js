import { createStore } from "vuex";
import product from "./product";
import cart from "./cart";

const store = createStore({
  modules: {
    prods: product,
    cart: cart,
  },
  state() {
    return {
      isLogin: false,
    };
  },
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
  actions: {
    login(context) {
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLogin;
    },
  },
});

export default store;
