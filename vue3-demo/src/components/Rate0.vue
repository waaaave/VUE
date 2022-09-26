<script setup>
import { defineProps, computed } from 'vue'

let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
const themObj = {
    'black': '#000',
    'white': '#fff',
    'orange': '#fadb14',
    'red':'#f5222d'
}

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
let fontStyle = computed(() => {
    return `color:${themObj[props.theme]}`
})

</script>
<template>
    <div :style="fontStyle">
        {{rate}}
    </div>
</template>



