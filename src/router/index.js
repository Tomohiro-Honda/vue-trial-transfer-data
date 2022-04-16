import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import PropsView from "@/views/PropsView";
import ProvideView from "@/views/ProvideView";
import TelepoView from "@/views/TelepoView";

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
  },
  {
    path: "/telepo",
    name: "telepo",
    component: TelepoView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
