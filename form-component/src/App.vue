<template>
  <div>
    <el-form ref="myForm" :model="model" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="model.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="model.password" />
      </el-form-item>
    <el-form-item>
      <button @click="login">登录</button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ElForm from './components/form/Form.vue'
import ElFormItem from './components/form/FormItem.vue'
import ElInput from './components/form/Input.vue'

const model = reactive({
  username: '',
  password: ''
})
const myForm = ref(null)
const rules = reactive({
  username: [
    {
      require: true,
      message: '请输入用户名'
    }
  ],
  password: [
    {
      require: true,
      message: '请输入密码'
    }
  ]
})
// console.log(myForm);

const login = () => {

  // myForm validate
  myForm.value?.validate()
  
}

</script>

<style scoped>

</style>