import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    // koa 洋葱模型也有next
    const { userInfo } = store.getters
    if(Object.keys(userInfo).length){ //已经登录
        if (to.name === 'Login') {
            next({
                name:'Home'
            })
        }
    }else{
        if(to.name === 'Login') next();
        next({
            name:'Login'
        })
    }
    next();
})