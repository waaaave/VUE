import { reactive } from './reactive'
import { effect } from './effect'
// reactive()
let dummy
// vue3 composition api
const counter = reactive({ // 返回proxy实例
    num1: 1,
    num2: 2
})

effect(() => {
    dummy = counter.num1 + counter.num2
    console.log(dummy);

})

counter.num1++
