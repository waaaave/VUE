<template>
    <div>
        <!-- {{saveCount}}
        {{payCount}} -->
        <div ref="main" style="width: 100%; height: 400px"></div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import * as echarts from 'echarts'

// 获取列表数据
let store = useStore()
let payList = computed(() => (store.state.payList))
let saveList = computed(() => store.state.saveList)


let saveCount = computed(() => {

    const count = saveList.value.reduce((prev, cur) => prev + +cur.value, 0);

    return count
})
let payCount = computed(() => {

    const count = payList.value.reduce((prev, cur) => prev + +cur.value, 0);

    return count
})

// 饼图

const main = ref();

onMounted(() => {
    init()
})

function init() {
    var myChart = echarts.init(main.value);
    var datas = [payCount.value ,  saveCount.value]
    //数据
    var option = {
        title: {
            text: '收支状态',
            left: "center",
            top: "center",
            textStyle: {
                color: "#999",
                fontWeight: "normal",
                fontSize: 12,
            },
        },
        series:  [{
                type: 'pie',
                radius: [40, 60],
                height: "33.33%",
                left: "center",
                top: "center",
                width: 400,
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 2,
                },
                 data: datas,
            }]
        
    }
     // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

}


</script>

<style scoped>

</style>