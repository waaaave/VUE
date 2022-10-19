import { createRouter, createWebHistory} from 'vue-router'

const routerHistory =createWebHistory()
const router = createRouter({
    history : routerHistory,
    routes: [
        {
            path:'/',
            name :'home',
            component : () => import('../views/Home.vue')
        },
        {
            path:'/login',
            name :'Login',
            component : () => import('../views/Login.vue')
        },
        {
            path:'/createPost',
            name :'CreatePost',
            component : () => import('../views/CreatePost.vue')
        },
        {
            path:'/columnDetail',
            name :'ColumnDetail',
            component : () => import('../views/ColumnDetail.vue')
        },
    ]
})

export default router