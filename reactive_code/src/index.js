import {reactive} from  './reactive.js'
// reactive()
let dummy
// vue3 composition api
const counter = reactive({ // 返回proxy实例
    num1:1,
    num2:2
})

// counter.num1
// counter.num1++

effect(() => {
    dummy = counter.num1 + counter.num2
})

counter.num1++
