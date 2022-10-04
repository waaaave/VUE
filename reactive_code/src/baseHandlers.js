import { reactive } from "./reactive";
import { isObject } from "./utils";
import { track, trigger } from './effect.js'

const get = createGetter();   //  闭包
const set = createSetter();
function createGetter(shallow = false) {  // 给参数赋默认值
    // shallow
    return function get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver)
        // 收集依赖
        track(target, "get", key)  //  追踪
        if (isObject(res)) {
            //  递归
            return shallow ? res : reactive(res)
        }
        return res
    }

}

function createSetter(shallow = false) {  // 给参数赋默认值
    return function get(target, key,value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        trigger(target, "get", key);
        return result;
    }

}

export const mutableHandlers = {
    get,
    set
}
