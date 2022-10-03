let getDouble = n => n * 2
let obj = {}
let count = 1
let double = getDouble(count) // count 改变后， double会自动更新
// es5 关注的是属性
// proxy 关注的是对象 对象代理
// 不支持删除

Object.defineProperty(obj, 'count',{
get(){

    return count
},
set(val){
    count = val
    double = getDouble(val)
}
})
console.log(double);
obj.count= 5
console.log(double);
