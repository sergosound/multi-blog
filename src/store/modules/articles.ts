import { ActionContext } from "vuex";
import { RootState } from "@/store/modules/index";

type Article = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type State = {
  articles: Array<Article>;
};

export default {
  actions: {
    async fetchArticles(
      { commit }: ActionContext<State, RootState>,
      limit = 10
    ) {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const articles = await result.json();
      commit("updateArticles", articles);
    },
  },
  mutations: {
    updateArticles(state: State, articles: Array<Article>) {
      state.articles = articles;
    },
    createArticle(state: State, article: Article) {
      state.articles.unshift(article);
    },
  },
  state: {
    articles: [],
  },
  getters: {
    articles(state: State) {
      return state.articles;
    },
  },
};
