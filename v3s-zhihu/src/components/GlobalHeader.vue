<template>
    <div>
        <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
            <router-link
                class="navbar-brand"
                to="/"
            >
            狮子座专栏
            </router-link>
            <ul
                v-if="!user.isLogin"
                class="list-inline mb-0"
            >
                <li class="list-inline-item">
                    <router-link
                        to="/login"
                        class="btn btn-outline-light my-2"
                    >
                        登录
                    </router-link>
                </li>
                <li class="list-inline-item">
                    <router-link
                        to="/login"
                        class="btn btn-outline-light my-2"
                    >
                        注册
                    </router-link>
                </li>
            </ul>
            <ul 
                v-else
                class="list-inline mb-0"
            >
                <li class="list-inline-item">
                    你好
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { UserProps } from '../store/store'
const props = defineProps<{user: UserProps}>()
</script>

<style scoped>

</style>