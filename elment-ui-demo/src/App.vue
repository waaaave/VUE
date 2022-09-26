<template>
  <div>
    <el-button-group>
      <el-button loading @click="handlePre" type="primary" icon="el-icon-arrow-left">
        上一页
      </el-button>
      <el-button disabled type="primary">
        下一页<i class="el-icon-arrow-right"></i>
      </el-button>
    </el-button-group>
    <el-button plain>111</el-button>
    <el-button round>222</el-button>
    <el-button circle>33</el-button>
    <el-badge is-dot class="item">数据查询</el-badge>
    <el-badge is-dot class="item">
      <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
    </el-badge>

  </div>
</template>

<script>
import ElButtonGroup from '../components/ElButtonGroup.vue';
import ElButton from '../components/ElButton.vue';
import ElBadge from '../components/ElBadge.vue';
export default {

  methods: {
    handlePre(e) {
      console.log(e);
    }
  },
  components: {
    'el-button-group': ElButtonGroup,
    'el-button': ElButton,
    'el-badge': ElBadge
  }
}
</script>

<style>

</style>