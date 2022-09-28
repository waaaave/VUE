<template>
    <div class="login">
        <div class="container">
            <el-form ref="formRef" :model="form" :rules="rules">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="form.userName"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"/>
                </el-form-item>
                <el-row type="flex" justify="center">
                    <el-button type="primary" @click="submit">登录</el-button>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const formRef = ref(null)
const form = reactive({
    userName:'',
    password:''
})

const rules = reactive({
    // schema
    userName: [{
        required: true,
        message: '请输入用户名',
        trigger: ['blur', 'change']
    }],
    password: [{
        required: true,
        message: '请输入密码',
        trigger: ['blur', 'change']
    }]
})

const submit = () => {
    formRef.value.validate(async valid => {
        if(!valid) return;
        await store.dispatch('EDIT_USER_INFO',form);
        router.push({
            path:'/'
        })
        
    })
}
</script>

<style scoped>

</style>