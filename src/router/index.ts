import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Article from "../views/Article.vue";
import Auth from "../views/Auth.vue";
import { guards, afterHook } from "./navigation";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "/profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/article/:id",
    name: "/article/:id",
    component: Article,
    meta: { requiresAuth: true },
  },
  {
    path: "/auth/login",
    name: "/auth/login",
    component: Auth,
  },
  {
    path: "/auth/register",
    name: "/auth/register",
    component: Auth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(guards);
router.afterEach(afterHook);

export default router;
