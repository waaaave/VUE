<template >
  <div>
    <h1 @click="add">{{num}}</h1>
    <!-- <div>{{x}},{{y}}</div> -->
    <HelloWorld msg='nihao'/>
  </div>
</template>

<script setup>
// import useMouse from './mouse'
// import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// let { x, y } = useMouse()
// let num = ref(1)
// let add = () => {
//   num.value++
// }
</script>

<style>

</style>