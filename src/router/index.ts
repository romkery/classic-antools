import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/home#*",
      redirect: "/",
    },
    {
      path: "/categories",
      name: "categories",
      component: HomeView,
    },
    {
      path: "/collections",
      name: "collections",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: HomeView,
    },
  ],
});

export default router;
