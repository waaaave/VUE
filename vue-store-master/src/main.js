/*
 * 入口文件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-04 23:38:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)  // Vue React 核心的MVVM 周边生态 vue-router vuex ui 
// use 插件  其他功能加入vue   ElementUI  组件全局可引用
Vue.use(ElementUI)

// 路由拦截器 
router.beforeResolve((to,from,next)=>{
  if(to.meta.requireAuth){
    if(!store.state.user.user){
      store.dispatch('setShowLogin', true)
      next(false)
      return
    }
  }
  // console.log(to,from,next);
  next()
  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
