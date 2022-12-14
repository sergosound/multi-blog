import { RouteMeta } from "vue-router";

interface Route {
  meta: RouteMeta & { requiresAuth?: boolean };
}
