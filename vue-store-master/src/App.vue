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
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#409eff"
          router>
          <div class="logo">
            <router-link to="/">
              <img src="./assets/imgs/logo.png" alt="">
            </router-link>
          </div>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/goods">全部商品</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <div class="so">
            <el-input placeholder="请输入搜索内容" v-model="search">
              <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
            </el-input>
          </div>
        </el-menu>
      </el-header>
      <MyLogin />
      <el-main>
        <keep-alive>
          <router-view>

          </router-view>
        </keep-alive>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="ng-promise-box">
            <div class="ng-promise">
              <p class="text">
                <a href="javascript:" class="icon1">7天无理由退换货</a>
                <a href="javascript:" class="icon2">满99全场包邮</a>
                <a href="javascript:" class="icon3">100%品质保证</a>
              </p>
            </div>
          </div>
          <div class="mod_help">
            <p>
              <router-link to="/">首页</router-link>
              <span>|</span>
              <router-link to="/goods">全部商品</router-link>
              <span>|</span>
              <router-link to="/about">关于我们</router-link>
            </p>
            <p class="coty">商城板块所有&copy;2012-2021</p>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
// import { Button } from 'element-ui'
import MyLogin from './components/MyLogin.vue'
import { mapActions } from 'vuex'
export default {
  beforeUpdate() {
    this.activeIndex = this.$route.path
  },
  data() {
    return {
      visible: false,
      activeIndex: '',
      search: ''
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
    logout() {

    },
    searchClick() {
      if (this.search !== '') {
        this.$router.push({ path: '/goods', query: { search: this.search } });
        this.search = ''
      }
    }
  },
  components: {
    MyLogin
  }
}
</script>
<style>
/* 全局CSS */

* {

padding: 0;

margin: 0;

border: 0;

list-style: none;

}

#app .el-header {

padding: 0;

}

#app .el-main {

min-height: 300px;

padding: 20px 0;

}

#app .el-footer {

padding: 0;

}

a,

a:hover {

text-decoration: none;

}

/* 全局CSS END */



/* 顶部导航栏CSS */

.topbar {

height: 40px;

background-color: #3d3d3d;

margin-bottom: 20px;

}

.topbar .nav {

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

.topbar .nav .shopCart {

width: 120px;

background: #424242;

}

.topbar .nav .shopCart:hover {

background: #fff;

}

.topbar .nav .shopCart:hover a {

color: #ff6700;

}

.topbar .nav .shopCart-full {

width: 120px;

background: #ff6700;

}

.topbar .nav .shopCart-full a {

color: white;

}

/* 顶部导航栏CSS END */



/* 顶栏容器CSS */

.el-header .el-menu {

max-width: 1225px;

margin: 0 auto;

}

.el-header .logo {

height: 60px;

width: 189px;

float: left;

margin-right: 100px;

}

.el-header .so {

margin-top: 10px;

width: 300px;

float: right;

}

/* 顶栏容器CSS END */



/* 底栏容器CSS */

.footer {

width: 100%;

text-align: center;

background: #2f2f2f;

padding-bottom: 20px;

}

.footer .ng-promise-box {

border-bottom: 1px solid #3d3d3d;


line-height: 145px;

}

.footer .ng-promise-box {

margin: 0 auto;

border-bottom: 1px solid #3d3d3d;

line-height: 145px;

}

.footer .ng-promise-box .ng-promise p a {

color: #fff;

font-size: 20px;

margin-right: 210px;

padding-left: 44px;

height: 40px;

display: inline-block;

line-height: 40px;

text-decoration: none;

background: url("./assets/imgs/us-icon.png") no-repeat left 0;

}

.footer .github {

height: 50px;

line-height: 50px;

margin-top: 20px;

}

.footer .github .github-but {

width: 50px;

height: 50px;

margin: 0 auto;

background: url("./assets/imgs/github.png") no-repeat;

}

.footer .mod_help {

text-align: center;

color: #888888;

}

.footer .mod_help p {

margin: 20px 0 16px 0;

}



.footer .mod_help p a {

color: #888888;

text-decoration: none;

}

.footer .mod_help p a:hover {

color: #fff;

}

.footer .mod_help p span {

padding: 0 22px;

}

/* 底栏容器CSS END */
</style>