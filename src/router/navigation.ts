import { Route, NavigationGuardNext } from "vue-router";

const authorizedRoutes = ["/create-article"];
const routes = [];

export const guards = (to: Route, from: Route, next: NavigationGuardNext) => {
  if (authorizedRoutes.includes(to.path))
    next({ path: "/", params: { unauthorizedRedirect: "true" } });
  else next();
};

export const afterHook = (to: Route, from: Route) => {
  routes.push({ from: from.path, to: to.path });
};
