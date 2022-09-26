<template>
  <div>
    <h1>{{x}},{{y}}</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script setup>
import useMouse from '../mouse';

defineProps = {
  msg: String
}
let { x, y } = useMouse()
</script>

<style>

</style>