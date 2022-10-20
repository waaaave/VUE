<template>
    <div class="login-page">
        <ValidateForm @form-submt="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">邮箱地址</label>
                <ValidateInput :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址" type="text" ref="inputRef">
                </ValidateInput>
            </div>
            <div class="mb-3">
                <label class="form-label">密 码</label>
            </div>
        </ValidateForm>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
 import ValidataForm from '../components/ValidateForm.vue'
 import ValidateInput from '../components/validateInput.vue'

const onFormSubmit = () => {

}

const emailVal = ref('')
const passwordVal = ref('')
const emailRules = [
    {
        type:'required',
        message:'电子邮件不能为空'
    },
    {
      type:'email',
      message:'请输入正确的电子邮箱格式'  
    }
]

const passwordRules = [
    {
        type:'required',
        message:'密码不能为空'
    }
]

</script>

<style scoped>

</style>