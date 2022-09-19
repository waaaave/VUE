- 老版本项目如何工程化？
  1. package.json 确认工程化入口
    npm run dev
      webpack 配置
      webpack-dev-server --inline --progress --config build/webpack.dev.conf.js
      webpack-dev-server v2.9.1
    npm run build
  2. 商业项目工程化架构
    - 孤单的webpack.config.js 肯定是不够的 
    - 有一个build 文件夹放置 webpack配置
    - .dev.js .product.js 开发配置和产品配置 .test.js
    - webpack-merge 合并 webpack.config.js 

- 购物车vuex
  - state 
    读
      1. 单一状态树
      2. 分模块
      3. 状态节点
      store(单一状态树) <- combineReducers(合并模块) <- reducer(模块) <- 状态对象(节点)
    写
      1. 不能直接进行写操作
      2. 要使得数据统一 关注修改
      3. 消灭不一致
      dispatch action
      reducer case 新的状态 mvvm

      vuex
      dispatch action 异步中间件
      vuex 没有reducer函数
      commit mutations 函数 类似reducer
      mutations 函数可以直接修改状态
      