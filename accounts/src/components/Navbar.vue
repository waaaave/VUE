<template>
    <div>
        <el-menu 
        router
    class="el-menu-demo"
    mode="horizontal">
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/accounts">Accounts</el-menu-item>
          <el-menu-item index="/total">Total</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// import Home from '../pages/home/index.vue'
// import Accounts from '../pages/accounts/index.vue'
// import Total from '../pages/total/index.vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style scoped>

</style>