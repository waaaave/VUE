const targetMap = new WeakMap()
let activeEffect = null


export const track = (target, type, key) => {
    // console.log(key, type,'111111111111111');
    let depsMap = targetMap.get(target)
    if (!depsMap) { // 之前没有传概念响应对象的处理器
        // 准备做key的处理 进行初始化
        targetMap.set(target, depsMap = new Map())
    }
    let deps = depsMap.get[key]
    if (!deps) {
        deps = new Set()// 不能重复 所以初始化为set
    }
    // activeEffect effect里面还没又加入map 的回调函数
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
    console.log(depsMap, '1111111111111');
}

export const trigger = (target, type, key) => {
    const depsMap = targetMap.get(target)
    if (!depsMap) {
        return
    }
    const deps = depsMap.get(key)
    if (!deps) {
        return
    }
    deps.forEach(effectFn => {
        effectFn()
    });
}

export const effect = (fn, options = {}) => {
    activeEffect = fn
}
