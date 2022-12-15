import { RouteMeta } from "vue-router";

declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

interface Route {
  meta: RouteMeta & { requiresAuth?: boolean };
}
