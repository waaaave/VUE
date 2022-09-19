<template>
    <ul>
        <li 
            v-for="product in products"
            :key="product.id"    
        >
        {{product.title}} - {{product.price}}
        </li>
    </ul>
    </template>
    <script>
    // 数据管理后 组件 偏UI, data() 私有状态收回
    import { mapState } from 'vuex'
    export default {
        computed: mapState({
            products: state => state.products.all
        }),
        mounted(){
            this.$store.dispatch('products/getAllProducts')
        }
        // 计算属性
        // computed: {
        //     products() {
        //         return  [
        //             {
        //                 id: 1,
        //                 title: 'IPHONE 14',
        //                 price: 5999
        //             }
        //         ]
        //     }
        // }
        // data() {
        //     return {
        //         products: [
        //             {
        //                 id: 1,
        //                 title: 'IPHONE 14',
        //                 price: 5999
        //             }
        //         ]
        //     }
        // }
    }
    </script>
    