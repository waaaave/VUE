<template>
    <div>
        <h3>PayList</h3>
        <el-table :data="payList" border style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="value" label="Value" />
        </el-table>
        <h3>SaveList</h3>
        <el-table :data="saveList" border style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="value" label="Value" />
        </el-table>
        
    </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const payList = store.state.payList
const saveList = store.state.saveList

</script>

<style scoped>

</style>