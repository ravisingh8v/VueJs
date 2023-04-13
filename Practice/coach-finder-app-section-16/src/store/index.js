import { createStore } from "vuex";
import coaches from "./coaches";
import requests from "./requests";

const store = createStore({
  modules: {
    coach: coaches,
    req: requests,
  },
});

export default store;
