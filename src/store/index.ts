import Vue from "vue";
import Vuex from "vuex";
import { user, articles, RootState } from "./modules";

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  modules: { user, articles },
});

// store.commit("changeName");
