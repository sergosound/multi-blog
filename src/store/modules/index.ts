import user, { State as UserState } from "./user";
import articles, { State as ArticlesState } from "./articles";

export { user, articles };
export type RootState = UserState & ArticlesState;
