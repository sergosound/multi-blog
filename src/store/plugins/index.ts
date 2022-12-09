import VuexPersistence from "vuex-persist";
import { RootState } from "@/store/modules";

export const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
  reducer: (state) => ({ articles: state.articles }),
});
