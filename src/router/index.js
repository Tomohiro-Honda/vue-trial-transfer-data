import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PropsView from "../views/PropsView.vue";
import ProvideView from "../views/ProvideView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/props",
    name: "props",
    component: PropsView
  },
  {
    path: "/provide",
    name: "provide",
    component: ProvideView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
