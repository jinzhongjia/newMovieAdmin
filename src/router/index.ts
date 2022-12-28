import { createRouter, createWebHistory } from "vue-router";
import routes from "./route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
