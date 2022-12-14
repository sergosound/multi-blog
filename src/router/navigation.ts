import { Route, NavigationGuardNext } from "vue-router";
import { store } from "@/store";

const routes = [];

export const guards = async (
  to: Route,
  from: Route,
  next: NavigationGuardNext
) => {
  if (to.meta?.requiresAuth && !store.getters.isAuth) {
    next({ name: "/auth/login" });
  } else {
    next();
  }
};

export const afterHook = (to: Route, from: Route) => {
  routes.push({ from: from.path, to: to.path });
};
