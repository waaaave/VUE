- node 是 js 后端, 引入了一个模块化方案, commonJS require + module.exports
- es6 之后有了import + export default  ==>使用babel进行js的转译
- babel原理

- reactive 手写核心
    1. reactive
    2. 是一个函数， 返回proxy实例
        接受参数对象，对参数对象的访问代理
    3. 当函数时组件（复杂任务） {{counter.num1}}
        proxy 读 get 手机以来
    4. set 操作 组件重新运行
    5. reactive 函数只负责返回proxy实例， handler 另外处理
        get set 常规操作该有的

- 响应式手写
    1. proxy 包装对象实现数据读写等操作的拦截
        proxy实例的操作
    2. template{}{{}} 以及effect/useeffect
        嗾使手机基于响应式对象下某key的依赖
    3. 写操作时 使用triger去通过对象/key查找依赖集合