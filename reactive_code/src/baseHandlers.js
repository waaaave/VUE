import { reactive } from "./reactive"
import { isObject } from "./utils"
import { track, trigger} from './effect.js'

const get = createGetter()

function createGetter(shallow = false){ // 参数默认值
    // shallow
    return function get(target, key, receiver){
        const res = Reflect.get(target, key, receiver)
        // 收集依赖
        track(target, 'get', key)
        if (isObject(res)) {
            // 递归
            return shallow? res : reactive(res)
        }
        return res
    }
}

const set = createSetter()

function createSetter(){
    return function(target, key, value, receiver){
        const result = Reflect.set(target, key, value, receiver)
        trigger(target, 'set', key)
        return result
    }
}

export const mutableHandlers = {
    get,
    set
}