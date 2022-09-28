- form form-item input button 
    1. model
    2. rules
        - rules 自定义数组
        {
            固定的字段 Schema
        }
        - login
            ref 找到.validate
            form items 每一项 validate验证
        - prop
            rules[prop] 去验证validate
        - 要支持异步
        - async-validator

- 复杂的组件使用slot 自定义插槽
    1. Form 
        ref 绑定 Form 对象 App.vue login validate
        model 数据绑定 v-model 双向绑定一直传递下去
        rules 定义
    2. FormItem
        label
        error   v-if
        slot 插入一个inpput
    3. input 绑定@input事件 通知上级 使用emit