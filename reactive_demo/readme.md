- 为什么要引入响应式 
    聚焦于业务开发
    1. 函数化 分割开发业务模块 -> 组件
    2. 自动化？
        proxy (get set delelteProxy...)
        在读写等操作的同时，再次通知业务更新

- 响应式
    - es5 defineProperty
    - es6 代理
    - {}直接使用对象本身使用 get set 方法
- vue 的响应式
    1. 简单的(浅响应) ref

- defineProperty, 基于对象属性
- 缺点
    1. 基于属性，如果有多个属性的响应式
    2. 读操作，写操作，没有删除操作，不支持map set

- proxy 
    1. ie11 之前不支持(不可降级)