<template>
    <div class="common-layout">
    <el-container>
      <el-header style="font-size: 24px; text-align: center; margin-top: 40px">欢迎来到wave手记</el-header>
      <el-main style="margin:0 auto;">
        <el-button type="primary" round style="margin:30px ;"><router-link to="/accounts/?form.type=save" style="color:white; text-decoration:none">save</router-link></el-button>
        <el-button type="danger" round style="margin:30px ;"><router-link to="/accounts/?type=pay" style="color:white; text-decoration:none">pay</router-link></el-button>
      </el-main>
    </el-container>
    <Charts/>
  </div>
</template>

<script setup>
import Charts from './charts.vue'



</script>

<style scoped>

</style>