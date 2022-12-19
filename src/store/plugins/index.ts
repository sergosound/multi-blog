import VuexPersistence from "vuex-persist";
import { Store } from "@/types";

export const vuexLocal = new VuexPersistence<Store.StoreState["modules"]>({
  storage: window.localStorage,
  reducer: (state) => ({ articles: state.articles, user: state.user }),
});
