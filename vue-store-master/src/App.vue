<template>
  <div>
    <!-- 页面布局 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <div class="topbar">
        <nav class="nav">
          <ul>
            <li v-if="!this.$store.getters.getUser">
              <el-button type="text" @click="login">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text">注册</el-button>
            </li>
            <li v-else>
              欢迎
              <el-popover placement="top" width="180" v-model="visible">
                <p>确定退出码？</p>
                <div style="text-align:right;margin:10pz 0 0">
                  <el-button size="mini" type="text" @click="visible=false">取消</el-button>
                  <el-button size="mini" type="primary" @click="logout">退出</el-button>
                </div>
                <el-button slot="reference" type="text">{{this.$store.getters.getUser.userName}}</el-button>
              </el-popover>
            </li>
            <li>
              <router-link to="/order">我的订单</router-link>
            </li>
            <li>
              <router-link to="/collect">我的收藏</router-link>
            </li>
            <li class="shopCart">
              <router-link to="/shoppingCart">
                <i class="el-icon-shopping-cart-full"></i>购物车
                <span class="num">0</span>
              </router-link>

            </li>
          </ul>
        </nav>
      </div>
      <MyLogin />
    </el-container>
  </div>
</template>
<script>
// import { Button } from 'element-ui'
import MyLogin from './components/MyLogin.vue'
import { mapActions } from 'vuex'
export default {
  data() {
    return{
      visible: false
    }
  },
  mounted() {
    console.log(this.$store.state.user)
  },
  methods: {
    ...mapActions(['setShowLogin']),
    login() {
      this.setShowLogin(true)
    },
    logout(){

    }
  },
  components: {
    MyLogin
  }
}
</script>
<style>
  * {
  padding: 0;
  margin: 0;
  border: 0;
  list-style:none;
}
a,
a:hover {
  text-decoration: none;
}
.topbar {
  height: 40px;
  background-color: #3d3d3d;
  margin-bottom: 20px;
  width: 1225px;
  margin: 0 auto;
}
.topbar .nav ul {
  float: right;
}
.topbar .nav li {
  float: left;
  height: 40px;
  color: #b0b0b0;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  margin-left: 20px;
}
.topbar .nav .sep {
  color: #b0b0b0;
  font-size: 12px;
  margin: 0 5px;
}
.topbar .nav li .el-button {
  color: #b0b0b0;
}
.topbar .nav .el-button:hover {
  color: #fff;
}
.topbar .nav li a {
  color: #b0b0b0;
}
.topbar .nav a:hover {
  color: #fff;
}
</style>