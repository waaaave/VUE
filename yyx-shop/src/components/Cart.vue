<template>
    <div>
        <h2>YOUR CART</h2>
        <p v-show="!products.length">
        <i>please add some products to cart</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{product.title}} - {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>Total:{{total}}</p>
    </div>
</template>
<script>
    import { mapAction, mapGetters } from 'vuex';
    export default{
        computed:{
            ...mapGetters('cart',{
                products:'cartProducts',
                total:'cartTotalPrice'
            })
        }
    }
</script>