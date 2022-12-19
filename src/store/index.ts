import Vue from "vue";
import Vuex from "vuex";
import { user, articles } from "./modules";
import { Store } from "@/types";
import { vuexLocal } from "@/store/plugins";

Vue.use(Vuex);

export const store = new Vuex.Store<Store.StoreState>({
  modules: { user, articles },
  plugins: [vuexLocal.plugin as never],
});
