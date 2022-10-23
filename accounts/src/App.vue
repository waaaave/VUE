<script setup>
import Navbar from './components/Navbar.vue'
import { provide } from 'vue'
// import * as echarts from 'echarts'

// provide("echarts", echarts)
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style scoped>

</style>
