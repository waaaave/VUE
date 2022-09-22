<template>
    <div>
        <el-dialog title="登录" width="300px" center :visible.sync="isLogin">
            <el-form :model="LoginUser" :rules="rules" status-icon ref="ruleForm" class="ruleForm">
                <el-form-item prop="name">
                    <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="LoginUser.name" />
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input prefix-icon="el-icon-view" type="password" placeholder="请输入账号" v-model="LoginUser.pass" />
                </el-form-item>
                <el-form-item>
                    <el-button size="medium" type="primary" style="width:100%" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        const validateName = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入用户名'))
            }
            const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
            console.log(value, userNameRule.test(value), '////');
            if (userNameRule.test(value)) {
                // 所有ref 的集合
                this.$refs.ruleForm.validateField('checkPass');
                return callback();
            } else {
                return callback(
                    new Error('字母开头， 长度5-16之间，允许字母数字下划线')
                );
            }
        }

        const validatePass = (rule, value, callback) => {
            if (value === "") {
                return callback(
                    new Error('请输入密码')
                )
            }
            const passwrodRule = /^[a-zA-Z]\w{5,17}$/
            if (passwrodRule.test(value)) {
                this.$refs.ruleForm.validateField('checkPass');
                return callback()
            } else {
                return callback(
                    new Error('字母开头，长度6-18之间，允许字母数字和下划线')
                )
            }
        }
        return {
            LoginUser: {
                name: '',
                pass: ''
            },
            rules: {
                name: [{ validator: validateName, trigger: 'blur' }],
                pass: [{ validator: validatePass, trigger: 'blur' }]
            }
        }
    },
    methods: {
        ...mapActions(['setShowLogin']),
        login() {
            console.log('login');
            this.$refs.ruleForm.validate(valid => {
                console.log(valid, '-----------')
                if (valid) {
                    this.isLogin = true
                } else {
                    return false
                }
            })
        }
    },
    computed: {
        isLogin: {
            get() {
                return this.$store.getters.getShowLogin;
            },
            set(val) {
                this.setShowLogin(val)
            }
        }
    }
}
</script>
