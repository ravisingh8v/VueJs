import { createStore } from "vuex";
import coaches from "./coaches";
import requests from "./requests";

const store = createStore({
  modules: {
    coach: coaches,
    req: requests,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
