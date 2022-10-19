import { createStore } from "vuex";
import { testData, ColumnProps, PostProps, testPosts } from '../testData'

export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: string
}

export interface GlobalDataProps {
    user: UserProps;
    columns: ColumnProps[];
    posts: PostProps[]
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        user: {
            isLogin: true,
            name: 'lion'
        },
        posts: testPosts,

    },
    // vuex 的读操作， 基于state的优化
    getters: {
        getColumnById: (state) =>  (id:number) => {
            return state.columns.find(c => c.id === id)
        },
        getPostsByCid: (state) => (cid: number) => {
            return state.posts.filter(post => post.columnId === cid)
        }
    },
    mutations: {
        login(state){
            state.user = {
                ...state.user,
                isLogin: false
            }
        }
    }
})

export default store