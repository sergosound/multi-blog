import { ActionContext } from "vuex";
import { RootState } from "@/store/modules/index";
import { vuexLocal } from "@/store/plugins";
import { injectCategoryForArticles } from "@/utils";
import api from "@/api";

type Article = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

type InjectedArticle = Article & { category: string };

export type State = {
  articles: Array<Article>;
  loading: boolean;
};

export default {
  state: {
    articles: [],
    loading: false,
  },
  actions: {
    async getArticles({ commit }: ActionContext<State, RootState>, limit = 10) {
      commit("updateLoading", true);
      const articles = await api.fetchArticles(limit);
      commit("updateArticles", articles);
    },
  },
  mutations: {
    updateLoading(state: State, loading: boolean) {
      state.loading = loading;
    },
    updateArticles(state: State, articles: Array<Article>) {
      state.articles = articles;
      state.loading = false;
    },
    createArticle(state: State, article: Article) {
      state.articles.unshift(article);
    },
  },
  getters: {
    articles(state: State): Array<InjectedArticle> {
      return injectCategoryForArticles<Article>(state.articles);
    },
    loading(state: State): boolean {
      return state.loading;
    },
  },
  plugins: [vuexLocal.plugin],
};
