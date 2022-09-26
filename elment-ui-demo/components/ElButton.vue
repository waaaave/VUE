<template>
    <button class="el-button" 
    :autofocus="autofocus"
    :disabled="disabled || loading"
    :type="nativeType"
    @click="handleClick" 
    :class="[
        type?'el-button--' + type:'',
        {
            'is-disabled':disabled,
            'is-loading':loading,
            'is-plain':plain,
            'is-round':round,
            'is-circle':circle,
        }
    ]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    props: {
        nativeType:{
            type: String,
            default: 'button'
        },
        type: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
        },
        disabled:Boolean,
        loading:Boolean,
        autofocus:Boolean,
        circle:Boolean,
        round:Boolean,
        plain:Boolean
    },
    methods: {
        handleClick(e) {
            // vue 子组件调用父组件函数
            // emit 触发父组件函数
            this.$emit('click', e)
        }
    }
}
</script>

<style>

</style>