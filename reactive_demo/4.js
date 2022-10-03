// 返回一个代理对象，对代理对象的操作会映射到对象上
let count = 1
let getDouble = n => n * 2
let double = getDouble(count)
let obj = {}

let proxy = new Proxy(obj, {
    get: function(target, prop){
        return target[prop]
    },
    set: function(target, prop, value){
        target[prop] = value // 代理多个属性
        if(prop === 'count'){
            double = getDouble(value)
        }
    },
    deleteProperty(target, prop){
        delete target[prop]
        if(prop == 'count'){
            double = NaN
        }
    }
})

proxy.count = 1
console.log(obj.count, double);
proxy.count = 3
console.log(obj.count, double);
delete proxy.count
console.log(obj.count, double);