import { isObject } from "./utils";
import { mutableHandlers } from './baseHandlers'

export const reactive = (target) => {
    // 严格性校验 入参
    // 不能为空 必须是对象

    if (!isObject(target)) {
        console.warn(`reactive ${target} 必须是一个对象, 否则使用ref`);
        return target
    }

    return new Proxy(target, mutableHandlers)

}