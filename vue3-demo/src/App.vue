<template>
    <div>
        <Rate :value="score" @update-rate="update" />
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import Rate from './components/Rate.vue'
    let score = ref(5)
const update = (num) => {
    score.value = num
}
</script>