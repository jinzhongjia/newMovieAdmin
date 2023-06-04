// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from "vue-router";

const children: RouteRecordRaw[] = [
	{
		path: "/",
		name: "dashboard",
		component: () => import("@/views/dashboard.vue"),
	},
	{
		path: "source",
		name: "source",
		component: () => import("@/views/source.vue"),
	},
	// {
	// 	path: "dashboard",
	// 	name: "dashboard",
	// 	component: () => import("../views/dashboard.vue"),
	// },
];

// 使用路由项目类型声明一个路由数组
const routes: Array<RouteRecordRaw> = [
	// ...
	{
		path: "/",
		name: "container",
		component: () => import("@/application/provider.vue"),
		children: children,
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/application/login.vue"),
	},
];

// 将路由数组导出给其他模块使用
export default routes;
