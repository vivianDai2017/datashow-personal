<template>
  <div id="VeLine" :style="{width: '100%', height: '13.5vh'}"></div>
</template>

<script>
// 引入基本组件
let echarts = require("echarts/lib/echarts");
// 引入折线图
require("echarts/lib/chart/line");
export default {
  name: "VeLine",
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let VeLine = echarts.init(document.getElementById("VeLine"));
      let option = [
        {
          title: {
            text: '月销量'
          },
          xAxis: {
            type: "catagory",
            data: []
          }
        }
      ];
      VeLine.setOption(option);
    }
  }
  
}
</script>
