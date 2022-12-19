import api from "@/api";
import { ActionContext, ActionTree, MutationTree, GetterTree } from "vuex";
import { Store } from "@/types";

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

const state: Store.UserState = {
  loading: false,
  data: undefined,
  isAuth: false,
};

const actions: ActionTree<Store.UserState, Store.StoreState> = {
  async getUser(
    { commit }: ActionContext<Store.UserState, Store.StoreState>,
    isAuth?: boolean
  ): Store.ActionTypesResult["getUser"] {
    commit("updateLoading", true);
    try {
      const user = await api.fetchUser(isAuth);
      commit("updateUser", user);
    } catch (err) {
      commit("updateUser", undefined);
      throw new Error();
    }
  },
  async registerUser(
    { commit }: ActionContext<Store.UserState, Store.StoreState>,
    { email, password }: { email: string; password: string }
  ): Store.ActionTypesResult["registerUser"] {
    commit("updateLoading", true);
    const user = await api.createUser({ email, password });
    commit("updateUser", user);
  },
  logOut({
    commit,
  }: ActionContext<
    Store.UserState,
    Store.StoreState
  >): Store.ActionTypesResult["logOut"] {
    commit("logOut");
  },
};

const mutations: MutationTree<Store.UserState> = {
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
};

const getters: GetterTree<any, Store.StoreState> = {
  user(state: State) {
    return state.data;
  },
  interests(state: State) {
    return state.data?.interests;
  },
  isAuth(state: State) {
    return state.isAuth;
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
