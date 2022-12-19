import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { injectCategoryForArticles } from "@/utils";
import api from "@/api";
import { Store } from "@/types";

type Article = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type InjectedArticle = Article & { category: string };

export type State = {
  data: Array<InjectedArticle>;
  loading: boolean;
};

const state: Store.ArticlesState = {
  data: [],
  loading: false,
};

const actions: ActionTree<Store.ArticlesState, Store.StoreState> = {
  async getArticles(
    { commit }: ActionContext<Store.ArticlesState, Store.StoreState>,
    limit = 10
  ): Store.ActionTypesResult["getArticles"] {
    commit("updateLoading", true);
    const articles = await api.fetchArticles(limit);
    commit("updateArticles", injectCategoryForArticles<Article>(articles));
  },
};

const mutations: MutationTree<Store.ArticlesState> = {
  updateLoading(state: State, loading: boolean) {
    state.loading = loading;
  },
  updateArticles(state: State, articles: State["data"]) {
    state.loading = false;
    state.data = articles;
  },
  createArticle(state: State, article: InjectedArticle) {
    state.data.unshift(article);
  },
};

const getters: GetterTree<any, Store.StoreState> = {
  articles(state: State): State["data"] {
    return state.data;
  },
  articlesLoading(state: State): boolean {
    return state.loading;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
