<script setup lang="ts">
import { useStore } from 'vuex'
import GlobalHeader from './components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed } from 'vue';

const store = useStore()
const currentUser = computed(() => store.state.user)
</script>

<template>
  <div class="container">
    <GlobalHeader :user='currentUser' />
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style scoped>

</style>
