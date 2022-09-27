<script setup>
  import { computed } from 'vue'
  // 怎么和数据仓库联系起来？ v3使用hooks
  // 怎么拿到state，怎么commit修改方法
  import { useStore } from 'vuex'
  import TodiList from './components/TodoList.vue'

  let store = useStore() //链接store
  let count = computed(() => store.state.count)

  function add (){
    store.commit('add')
  }

</script>

<template>
  <div>
    <TodiList/>
    <div @click="add">
    {{count}}
  </div>
  <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
