import routes from '@/router/route'
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    strict: true,
})

export default router
