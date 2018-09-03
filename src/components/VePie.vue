<template>
  <div id="VePie" :style="{width: '100%', height: '29.7vh'}"></div>
</template>

<script>
// 引入基本组件
let echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/pie");
export default {
  name: "VePie",
  mounted() {
    this.drawPie();
  },
  methods: {
    drawPie() {
      let VePie = echarts.init(document.getElementById("VePie"));
      VePie.setOption({
        title: {
          text: "家庭画像"
        },
        legend: {
          // type: "scroll",
          orient: "vertical",
          // zlevel: 10
          itemWidth: 0,
          left: "right",
          data: [
            "三代同堂",
            "标准家庭",
            "夫妇",
            "其他"
          ]
        },
        series: [
          {
            name: "家庭组成",
            type: "pie",
            radius: "50%",
            center: ["40%", "50%"],
            data: [
              {
                name: "三代同堂: 30%",
                value: 30
              },
              {
                name: "标准家庭: 40%",
                value: 40
              },
              {
                name: "夫妇: 20%",
                value: 20
              },
              {
                name: "其他 10%",
                value: 10
              }
            ]
          }
        ]
      })
    }
  }
}
</script>
