import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import goods from '../pages/Goods/Goods.vue'
import rating from '../pages/Rating/Rating.vue'
import seller from '../pages/Seller/Seller.vue'

const routes = [{
    path: '/',
    redirect: "/goods"
},{
    path: '/goods',
    component: goods
},{
    path: '/rating',
    component: rating
},{
    path: '/seller',
    component: seller
},]

const router = createRouter({
    // history:createWebHashHistory(),
    history:createWebHistory(),
    routes 
})


export default router 