// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from 'vue-router'

const children: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/dashboard.vue'),
    },
    {
        path: '/source/:page?',
        name: 'source',
        component: () => import('@/views/source.vue'),
    },
    {
        path: '/category/:page?',
        name: 'category',
        component: () => import('@/views/category.vue'),
    },
    {
        path: '/movies/:page?',
        name: 'movies',
        component: () => import('@/views/movies.vue'),
    },
    {
        path: '/source/:id/class/:page?',
        name: 'source-class',
        component: () => import('@/views/class.vue'),
    },
    {
        path: '/source/:id/movies/:page?',
        name: 'source-movies',
        component: () => import('@/views/movies.vue'),
    },
    {
        // 当前该路由用不上
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/setting.vue'),
    },
]

// 使用路由项目类型声明一个路由数组
const routes: Array<RouteRecordRaw> = [
    // ...
    {
        path: '/',
        name: 'container',
        component: () => import('@/application/provider.vue'),
        children: children,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/application/login.vue'),
    },
]

// 将路由数组导出给其他模块使用
export default routes
