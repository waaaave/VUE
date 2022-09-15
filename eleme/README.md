- 项目介绍
    1. 使用stylus css 预编译完成项目样式开发
        - 项目入口文件引入 common/stylus/index.stylus
            @import 先后引入 reset.styl font.styl mixin.style
            全局解决 css reset 自定义字体 mixin 混合能力
        - 使用mixin 复用背景图片代码，解决移动端适配问题
        - 组件样式模块化， 不污染全局，也不受外界影响

    2. Map 代替JSON 优化用户信息模板输出 Map可以for of