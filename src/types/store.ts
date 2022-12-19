import { User } from "@/types/user";
import { Article } from "@/types/articles";

export type StoreState = {
  modules: {
    user: UserState;
    articles: ArticlesState;
  };
  plugins: Array<never>;
};

export type ArticlesState = {
  data: Array<Article>;
  loading: boolean;
};

export type UserState = {
  loading: boolean;
  data: User | undefined;
  isAuth: boolean;
};

export type ActionTypes = {
  getUser: undefined;
  registerUser: undefined;
  logOut: undefined;
  getArticles: undefined;
};

export type ActionTypesResult = {
  getUser: Promise<void>;
  registerUser: Promise<void>;
  logOut: void;
  getArticles: Promise<void>;
};
