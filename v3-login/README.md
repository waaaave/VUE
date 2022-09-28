- 全局思维
    - 路由
        1. 路由守卫
        - localStorage token user 
            有 / -> /login  redirect /
            无 /login 
            退出功能  localStorage清空掉
        2. 路由配置
            /login 
            /home 
    - 表单组件
        models  rules 
        elment3  表单容器组件
        Form  reactive(model) FromItem  Input(v-model model.username)
        v-model
    - 状态树
        登录的状态和mutation actions 

- v3 vuex
    1. vuex createStore 提供单一状态树 单例 
    2. 由4个单元构成 state getters(修饰) actions(async dispatch -> commit) nutations(改)
    3. module 重复四个单元
    4. action
        {commit} 