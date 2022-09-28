<template>
    <div class="el-form">
        <slot />
    </div>
</template>

<script lang="ts">

export default {
    name: 'ElForm'
}

</script>

<script lang="ts" setup>
import {defineExpose, ref} from 'vue'
import {emitter} from '../../emitter'

const items = ref([])

emitter.on('addFormItem', (item) =>{
    // console.log(item);
    items.value.push(item)
})

function validate() {
    // const tasks = items.value.map((item) => item.validate())
    console.log(items.value);
    
}

defineExpose({
    validate
})
</script>

<script setup lang="ts">

</script>




<style scoped>

</style>