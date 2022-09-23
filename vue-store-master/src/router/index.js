/**
 * @路由配置
 * @author xifang
 * @date  20-02-07
 */
// 懒加载
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) // this.$router this.$store

const routes = [
    {
        path: '/',
        name: 'Home',//? 
        component: () => import ('../pages/Home.vue')
    },
    {
        path: '/goods',
        name: 'Goods',//? 
        component: () => import ('../pages/Goods.vue')
    },
    {
        path: '/order',
        name: 'Order',
        // 路由守卫
        meta: {
            requireAuth: true
        },
        component: () => import ('../pages/Order.vue')
    },
    {
        path: '/collect',
        name: 'Collect',
        // 路由守卫
        meta: {
            requireAuth: true
        },
        component: () => import ('../pages/Collect.vue')
    }
]

const router = new Router({
    mode:'history',
    routes
})

export default router