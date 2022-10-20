<script setup lang="ts">
import { ColumnProps } from '../testData'
const props = defineProps<{ list: ColumnProps[] }>()
</script>
<template>
    <div class="row">
        <div class="col-4 mb-4" v-for="column in list" :key="column.id">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img :src="column.avatar || `/assets/vue.svg`" alt=""
                        class="rounded-circle border border-light my-3">
                    <h5 class="card-tittle text-left">{{column.description}}</h5>
                    <router-link :to="`/column/${column.id}`">进入专栏</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
