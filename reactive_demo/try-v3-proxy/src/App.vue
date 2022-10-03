<template>
  <div>

  </div>
</template>

<script setup>
  import { reactive, computed, watchEffect } from 'vue'

  // reactive 包装了一个对象 返回proxy
  let obj = reactive({
    count: 1
  })
  console.log(obj);
  let double = computed(() => obj.count * 2)
  console.log(double.value);
  watchEffect(() => {
    console.log('数据改变了', obj.count, double.value);

  })
  obj.count = 5


</script>

<style scoped>

</style>