- ElementUI Antd  按需加载组件  没有用到的组件不用打包到最后的文件
- vue-router 
    1. 模块化配置 router/ 
    2. mode  二选一
        routes 数组
    3. 延迟加载
    4. 路由配置  name  meta:{requireAuth}
    5. 跳转拦截  router.beforeResolve
        from to next 
    6. Vue.use(VueRouter)  this.$store 

- vuex 
    1. vue.use(vuex)
        this.$store.state.user.user  mapState
        this.$store.dispatch  mapAction 
    2. 每个模块由四部分组成  state getters  action  mutations 
        
- 项目
    1. 使用elemeny-ui
        表单使用 model rules 让表单开发更配置化

- 路由功能升级
    this.$router 对于整个路由对象
    1. js 跳转
        this.$router.push({path:})
    2. 如何拿到路由中的query
        通过生命周期created 得到this.$route.query.search

- keep-alive
    在单页应用中 router view 会随着 history location的值的变化去卸载之前的页面级别的组件，加载新的页面界别组件
    在首页到其他页面的频繁切换中需要优化
    比如缓存首页，不卸载

- axios 请求拦截的应用场景升级介绍
    1. requset 拦截 config header 得到jwt token 保存到localstorage之中
    2. 在响应用户数据的时候
        - 帮助解构data axios 会用data去封装
        - 使用常见状态码的解决
            - vue.prototype.notifyError
                省去应用element-UI的麻烦
            - 入口喜欢全局扩展原型链