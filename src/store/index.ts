import Vue from "vue";
import Vuex from "vuex";
import { user, articles, RootState } from "./modules";
// import { vuexLocal } from "@/store/plugins";

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  modules: { user, articles },
  // plugins: [vuexLocal.plugin],
});
