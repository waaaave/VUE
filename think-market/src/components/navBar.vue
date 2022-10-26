<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link class="iconfont nav-list-item active" to="home">
        <i class="icon-dibutubiaodaochu-01"></i>
        <span>首页</span>
      </router-link>
      <router-link class="iconfont nav-list-item" to="category">
        <i class="icon-dibutubiaodaochu-11"></i>
        <span>分类</span>
      </router-link>
      <router-link class="iconfont nav-list-item" to="cart">
        <i class="icon-dibutubiaodaochu-11"></i>
        <span>购物车</span>
      </router-link>
      <router-link class="iconfont nav-list-item" to="my">
        <i class="icon-dibutubiaodaochu-04"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const store = useStore()





</script>

<style scoped >
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.nav-bar .nav-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0;
}

.nav-bar .nav-list .nav-list-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  color: #666;
  text-decoration: none;
}

.nav-bar .nav-list .nav-list-item.router-link-active {
  color: red;
}

.nav-bar .nav-list .nav-list-item i {
  text-align: center;
  font-size: 22px;
}

.nav-bar .nav-list .nav-list-item span {
  font-size: 12px;
}
</style>
