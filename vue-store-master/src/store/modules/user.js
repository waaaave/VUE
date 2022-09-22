const state = {
    user: '',
    showLogin: false
}
const getters = {
    getUser(state) {
        return state.user
    },
    getShowLogin(state) {
        return state.showLogin
    }
}
const actions = {
    setShowLogin({ commit }, data) {
        commit('setShowLogin', data)
    }
}
const mutations = {
    setShowLogin(state, data) {
        state.showLogin = data
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}