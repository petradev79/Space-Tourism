import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:slug",
    name: "destination",
    props: true,
    component: () =>
      import(/* webpackChunkName: "destination" */ "../views/Destination.vue"),
  },
  {
    path: "/crew/:slug",
    name: "crew",
    props: true,
    component: () => import(/* webpackChunkName: "crew" */ "../views/Crew.vue"),
  },
  {
    path: "/technology/:slug",
    name: "technology",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (Technology.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "technology" */ "../views/Technology.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
