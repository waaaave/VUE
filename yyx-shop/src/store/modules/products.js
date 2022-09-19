import shop from '../../api/shop'
//reducer 一份为二
// 初始化的状态
const state = () => ({
    all: []
})  

const actions = {
    getAllProducts({commit}){
        shop.getProducts((products) => {
            commit('setProducts', products)
        })
    }
}
// 状态所有的修改函数
const mutations = {
    setProducts(state, products){
        state.all = products // 只有这个写
    }
}

export default {
    namespaced: true, // 模块化 
    state ,
    actions,
    mutations
}