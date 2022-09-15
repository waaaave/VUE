<template>
  <div>
    <!-- <div class="item-info">
      <span>姓名</span>
      <span>{{ user.name }}</span>
    </div>
    <div class="item-info">
      <span>性别</span>
      <span>{{ user.sex }}</span>
    </div>
    <div class="item-info">
      <span>年龄</span>
      <span>{{ user.age }}</span>
    </div>
    <div class="item-info">
      <span>手机号</span>
      <span>{{ user.phone }}</span>
    </div>
    <div class="item-info">
      <span>家庭住址</span>
      <span>{{ user.home }}</span>
    </div> -->
    <div class="info-item" v-for="[label, value] in infoMap" :key="value">
      <span>{{label}}: </span>
      <span>{{ value }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '方方',
        age: 17,
        sex: '男',
        phone: 13121212121,
        home: '范家'
      },
      infoMap: new Map()
    }
  },
  mounted(){
    const mapKeys =['姓名','年龄','性别','电话','家庭地址']
    const result = new Map();
    let i = 0;
    for (const key in this.user) {
      result.set(mapKeys[i],this.user[key])
      i++
    }
    this.infoMap = result
  }
}
</script>