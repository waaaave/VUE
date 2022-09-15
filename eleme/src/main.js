import { createApp } from 'vue'
// css预编译器 为了写的更快 不拘泥于css语法 加快coding速度
// 可以使用变量、嵌套、mixin
import './common/stylus/index.styl'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
