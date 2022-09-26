<template>
    <div :style="fontStyle">
        <!-- 打分功能 this.$emit -->
        <div class="rate" @mouseout="mouseOut">
            <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
            <span class="hollow" :style="fontwidth">
                <span v-for="num in 5" @click="onRate(num)" :key="num" @mouseover="mouseOver(num)">★</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, computed, ref } from 'vue'

let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: 'orange'
    }
})
let width = ref(props.value)
function mouseOver(i){
    width.value = i
}
function mouseOut(){
    width.value = props.value
}
const themObj = {
    'black': '#000',
    'white': '#fff',
    'orange': '#fadb14',
    'red':'#f5222d'
}
const emits = defineEmits(['update-rate'])
function onRate (num){
    emits('update-rate', num)
}

let fontwidth = computed(() => `width:${width.value}em`)

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
let fontStyle = computed(() => {
    return `color:${themObj[props.theme]}`
})

</script>

<style scoped>
.rate{
    position: relative;
    display: inline-block;
}

.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
}
</style>