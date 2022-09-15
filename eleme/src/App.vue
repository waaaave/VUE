<template>
  <div>
    <v-header :seller="seller" />
    <router-view/>
  </div>
</template>
<script>
  import { getSellerRequest } from './api/request'
  import header from './components/Header/Header.vue'
  export default{
    data(){
      return{
        seller:{}
      }
      
    },
    mounted(){
      const getSellerData = async () => {
        const { data } = await getSellerRequest()
        this.seller = data
        console.log(this.seller); 
      }
      getSellerData()
    },
    components:{
      'v-header':header
    }
  }
</script>
<style scoped>

</style>