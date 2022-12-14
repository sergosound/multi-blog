import user, { State as UserState } from "./user";
import articles, {
  State as ArticlesState,
  InjectedArticle as Article,
} from "./articles";

export { user, articles };
export interface RootState {
  user: UserState;
  articles: ArticlesState;
}
export type { Article };
