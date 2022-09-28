import { createStore } from 'vuex'

export default createStore({
    state: {
        userInfo: JSON.parse(sessionStorage.getItem('userInfo') || '{}')
    },
    getters: { // 读取状态
        userInfo: state => state.userInfo
    },
    actions: { // 修改状态  dispatch commit -> mutation -> state 
        EDIT_USER_INFO({ commit }, payload) {
            return new Promise((res, rej) => {
                commit('changeUserInfo', payload || {})
                sessionStorage.setItem('userInfo', JSON.stringify(payload))
                res();
            })
        }
    },
    mutations: { // 修改状态
        changeUserInfo(state, payload) {
            state.userInfo = payload
        }
    },
    modules:{

    }
})