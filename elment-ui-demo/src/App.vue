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
</div>
</template>

<script>
  import ElButtonGroup from '../components/ElButtonGroup.vue';
  import ElButton from '../components/ElButton.vue';
export default {
  
  methods:{
    handlePre(e){
      console.log(e);
    }
  },
  components:{
    'el-button-group':ElButtonGroup,
    'ElButton': ElButton
  }
}
</script>

<style>

</style>