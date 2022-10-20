<template>
    <div class="home-page">
        <dection class="py-5 text-center container">
            <div class="roe py-lg-5">
                <div class="col-lg-6 col-md-8 max-auto">
                    <img src="../assets/callout.svg" alt="callout" class="w-50">
                </div>
                <h2>随心写作，自由表达</h2>
                <p>
                    <a href="" class="btn btn-primary my-2">开始写文章</a>
                </p>
            </div>
            <h4 class="font-weight-bold text-center">发现精彩</h4>
            <ColumnList :list="list"></ColumnList>
        </dection>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'

const store = useStore()
const list = computed(() => store.state.columns)



</script>

<style scoped>

</style>