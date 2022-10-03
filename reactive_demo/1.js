let count = 1
let double = count * 2
console.log(double);
count = 2
console.log(double);
// double 没有响应式
// 如果有响应式会有double 的自动改变， 聚焦业务开发
// 1. 把double封装成函数
// 