<template>
    <div class="validate-input-container pb-3">
        <input type="text" :class="{'is-invalid': inputRef.error}" class="form-control" :value="inputRef.val"
            @input="updateValue" @blur="updateInput">
    </div>
</template>

<script  lang="ts">
import { HtmlAttributes } from 'csstype';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    props: {
        modelValue: String
    },
    setup(props, context) {

        const inputRef = reactive({
            val: props.modelValue || '',
            error: false,
            messafe: ''
        })

        const updateValue = (e: KeyboardEvent) => {
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelValue', targetValue)
        }

        const updateInput = () => {

        }

        return {
            inputRef,
            updateValue,
            updateInput
        }
    }
})
</script>

<style scoped>

</style>