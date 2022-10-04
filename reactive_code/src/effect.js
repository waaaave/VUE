const targetMap = new WeakMap()
let activeEffect = null

export const track = (target, type, key) => {
    //  存进去
    // console.log(key, type, '-=-=-=-=--');
    // targetMap  -> target -> key
    // 先基于target 找到对应的dep
    let depsMap = targetMap.get(target);
    if (!depsMap) {  // 之前没有创建响应对象的处理器
        // key => 初始化
        targetMap.set(target, (depsMap = new Map()))

    }
    //  有没有具体的处理函数？
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set()  // 不能重复  初始化  effect里的函数
    }
    // activeEffect  effect 里的还没有加入map的回调函数
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect);
    }
    depsMap.set(key, deps);
    console.log(depsMap, '-=---=-=-');
}

export const trigger = (target, type, key) => {
    const depsMap = targetMap.get(target);
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
    // const effectFn =() => {
    //     try {
    //         activeEffect = effectFn
    //         return fn()
    //     } finally {
    //         activeEffect = null
    //     }
    // }
    // return effectFn
    activeEffect = fn
}