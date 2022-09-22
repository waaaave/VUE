import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)  // this.$store 
import user from './modules/user'

export default new Vuex.Store({
    modules:{
        user,
    }
})