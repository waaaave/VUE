const state = {
    items:[
    ]
}

const getters = {
    cartProducts:(state, getters, rootState) =>{
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return{
                title:product.title,
                price:product.price,
                quantity,
                id
            }
        })
    },
    cartTotalPrice:(state, getters) => {
        return getters.cartProducts.reduce((total, product) =>{
            return total + product.price * product.quantity
        },0)
    }
}

const actions = {
    // action 可以得到vuex给提交的mutations 和状态
    addProductToCart({state, commit}, product){
        // console.log(product);
        if (product.inventory>0) {
            const cartItem = state.items.find(item => item.id == product.id)
            if (!cartItem) {
                commit('pushProductToCart',{id:product.id})
            }else{
                // 增加数量
                commit('increamentItemQuantity', cartItem)
            }
        }

    }
}

const mutations = {
    pushProductToCart(state,{id}){
        state.items.push({
            id,
            quantity:1
        })
    },
    increamentItemQuantity(state,{id}){
        const cartItem = state.items.find(item => item.id == id);
        cartItem.quantity++
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}