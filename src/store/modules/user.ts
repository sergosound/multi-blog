import api from "@/api";
import { ActionContext } from "vuex";
import { RootState } from "@/store/modules";

type User = {
  id: number;
  name: string;
  interests: string[];
};

export type State = {
  loading: boolean;
  data: User | undefined;
  isAuth: boolean;
};

export default {
  actions: {
    async getUser(
      { commit }: ActionContext<State, RootState>,
      isAuth?: boolean
    ) {
      commit("updateLoading", true);
      try {
        const user = await api.fetchUser(isAuth);
        commit("updateUser", user);
      } catch (err) {
        commit("updateUser", undefined);
      }
    },
    async registerUser(
      { commit }: ActionContext<State, RootState>,
      { email, password }: { email: string; password: string }
    ) {
      commit("updateLoading", true);
      const user = await api.createUser({ email, password });
      commit("updateUser", user);
    },
    logOut({ commit }: ActionContext<State, RootState>) {
      commit("logOut");
    },
  },
  mutations: {
    updateLoading(state: State, loading: boolean) {
      state.loading = loading;
    },
    updateUser(state: State, user: User) {
      state.data = user;
      state.isAuth = true;
    },
    logOut(state: State) {
      state.data = undefined;
      state.isAuth = false;
    },
  },
  state: {
    loading: false,
    user: undefined,
    isAuth: false,
  },
  getters: {
    user(state: State) {
      return state.data;
    },
    interests(state: State) {
      return state.data?.interests;
    },
    isAuth(state: State) {
      return state.isAuth;
    },
  },
};
