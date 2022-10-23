const home = () => import('@/pages/home/index.vue')
const accounts = () => import('@/pages/accounts/index.vue')
const total = () => import('@/pages/total/index.vue')
const Page404 = () => import('@/pages/404/404.vue')

const routes = [
    {path:'/', redirect:'/home'},
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/accounts',
        name:'accounts',
        component: accounts
    },
    {
        path:'/total',
        name:'total',
        component: total
    },
    {
        path:'/:catchAll(.*)',
        name:'404',
        component: Page404
    }
]

export default routes