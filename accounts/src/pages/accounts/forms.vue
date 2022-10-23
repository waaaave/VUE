<template>
    <div>
        <el-form :model="form">
            <el-form-item label="type">
                <el-select v-model="form.type" placeholder="please select actions">
                    <el-option label="pay" value="pay" />
                    <el-option label="save" value="save" />
                </el-select>
            </el-form-item>
            <el-form-item label="项目名称">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="项目金额">
                <el-input v-model="form.value" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const payList = store.state.payList
const saveList = store.state.saveList

const form = reactive({
    type: '',
    name: '',
    value: '',
})

const onSubmit = () => {
    console.log(form.type);
    const state = { name: form.name, value: form.value }

    form.type === 'pay' ? addPay(state) : addSave(state)

}

const addSave = (state) => {
    saveList.push({
        type: 'save',
        name: state.name,
        value: state.value
    })

}

const addPay = (state) => {
    payList.push({
        type: 'pay',
        name: state.name,
        value: state.value
    })
}

</script>

<style scoped>

</style>