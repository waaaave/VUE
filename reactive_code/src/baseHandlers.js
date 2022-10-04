import { isObject } from "./utils";
import { track, trigger } from './effect';

const get = createGetter(); //闭包
const set = createSetter();

function createGetter(shallow = false) { // 参数默认值
    // 深浅  
    // shallow
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver);
        // 收集依赖？ 
        track(target, "get", key)
        if (isObject(res)) {
            // 递归 
            return shallow ? res : reactive(res)
        }
        return res
    }
}

function createSetter() {
    return function(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        trigger(target, 'set', key)
        return result
    }
}
export const mutableHandlers = {
    get,
    set
}