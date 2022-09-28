import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
//路由首位
import './permission.js'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

createApp(App)
    .use(router)
    .use(store)
    .use(Element3)
    .mount('#app')
