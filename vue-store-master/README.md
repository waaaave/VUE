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