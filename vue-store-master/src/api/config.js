import axios from 'axios'
import Vue from 'vue';
// import store from '../store'

// export const baseUrl='http://101.132.181.9/';

const axiosInstance = axios.create({
    // baseURL:baseUrl
})

axiosInstance.interceptors.request.use(config => {
    return config
}, error =>{
    return Promise.reject(error)
})
axiosInstance.interceptors.response.use(
    res =>{
        // 没有权限 后端接口会带上状态码
        // 服务器端返回
        if(res.data.code === '401'){
            // store.dispatch('setShowLogin', true);
            Vue.prototype.notifyError('请登录');
        }else if (res.data.code === '500'){
            Vue.prototype.notifyError('服务器出错');
        }
        return res
    }
)

export { axiosInstance }