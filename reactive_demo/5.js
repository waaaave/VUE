// 实现defineProperty但是比 proxy 简单一些 
let getDouble = n => n * 2
let _value = 1 // 私有变量
let double = getDouble(_value)
let count = {
    get value(){
        return _value
    },
    set value(val) {
        _value = val
        double = getDouble(_value)
    }
}

console.log(count.value, double);
count.value = 3
console.log(count.value, double);
