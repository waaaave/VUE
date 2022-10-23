import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store';
import router from './router'


let app = createApp(App)

app
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
