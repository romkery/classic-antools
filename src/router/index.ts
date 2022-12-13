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
      redirect: "/",
    },
    {
      path: "/collections",
      redirect: "/",
    },
    {
      path: "/blog",
      redirect: "/",
    },
  ],
});

export default router;
