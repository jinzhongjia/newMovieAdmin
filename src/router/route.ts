// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from "vue-router";
import Login from "../views/login.vue";

// 使用路由项目类型声明一个路由数组
const routes: Array<RouteRecordRaw> = [
  // ...
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

// 将路由数组导出给其他模块使用
export default routes;
