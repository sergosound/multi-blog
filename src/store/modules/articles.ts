import { ActionContext } from "vuex";
import { RootState } from "@/store/modules/index";
import { injectCategoryForArticles } from "@/utils";
import api from "@/api";

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

export default {
  state: {
    data: [],
    loading: false,
  },
  actions: {
    async getArticles({ commit }: ActionContext<State, RootState>, limit = 10) {
      commit("updateLoading", true);
      const articles = await api.fetchArticles(limit);
      commit("updateArticles", injectCategoryForArticles<Article>(articles));
    },
  },
  mutations: {
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
  },
  getters: {
    articles(state: State): State["data"] {
      return state.data;
    },
    articlesLoading(state: State): boolean {
      return state.loading;
    },
  },
};
