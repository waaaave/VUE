const home = () => import('@/views/home/index.vue')
const category = () => import('@/views/category/index.vue')
const cart = () => import('@/views/cart/index.vue')
const my = () => import('@/views/my/index.vue')
const Page404 = () => import('@/views/404/404.vue')

const routes = [
    {path:'/', redirect:'/home'},
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/category',
        name:'category',
        component: category
    },
    {
        path:'/cart',
        name:'cart',
        component: cart
    },
    {
        path:'/my',
        name:'my',
        component: my
    },
    {
        path:'/:catchAll(.*)',
        name:'404',
        component: Page404
    }
]

export default routes