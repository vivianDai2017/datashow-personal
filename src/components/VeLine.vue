<template>
  <div :style="{width: '100%', height: '40.5vh'}" class="line">
    <!-- <div v-for="(item, index) in items" :key="index"> -->
      <div v-for="(item, index) in items" :key="index" :id="item.lineId" :style="{width: '50%', height: '13.5vh'}" :title="item.title"></div>
    <!-- </div> -->
  </div> 
</template>

<script>
// 引入基本组件
let echarts = require("echarts/lib/echarts");
// 引入折线图
require("echarts/lib/chart/line");
// 引入标题组件
require("echarts/lib/component/title");
console.log(echarts);
console.log(11);
export default {
  name: "VeLine",
  // props: {
  //   title: String
  // },
  data() {
    return {
      items: [
        {
          lineId: "VeLine1",
          title: "每日服务人次",
          color: "#68d3ff",
          data: [120, 132, 178, 180, 190, 100, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        },
        {
          lineId: "VeLine2",
          title: "官网PV",
          color: "#68d3ff",
          data: [0, 832, 801, 234, 2290, 1330, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        },
        {
          lineId: "VeLine3",
          title: "每日注册用户量",
          color: "#68d3ff",
          data: [20, 932, 901, 934, 1290, 1330, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        },
        {
          lineId: "VeLine4",
          title: "设备绑定总数",
          color: "#68d3ff",
          data: [20, 932, 901, 934, 1290, 1330, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        },
        {
          lineId: "VeLine5",
          title: "每日活跃用户",
          color: "#68d3ff",
          data: [20, 932, 901, 934, 1290, 1330, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        },
        {
          lineId: "VeLine6",
          title: "每日绑定设备",
          color: "yellow",
          data: [20, 932, 901, 934, 1290, 1330, 1320, 456, 778, 1600, 230, 748, 110, 900, 800, 90, 230, 450, 667, 120, 231, 342, 893, 884, 345, 346, 787, 448, 909, 810, 711]
        }
      ]
    }
  },
  mounted() {
    this.drawLineAll();
  },
  methods: {
    drawLine(lineId, title, color, data) {
      console.log("划线");
      console.log(lineId);
      console.log(title);
      let VeLine = echarts.init(document.getElementById(lineId));
      let option = {
        title: {
          text: title,
          textStyle: {
            fontSize: 16
          }
        },
        // xAxis: {
        //   type: "time",
        //   data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
        // },
        xAxis: {
          type: "category",
          // 坐标轴留白策略
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8 , 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
        },
        grid: {
          top: "20%",
          left: "5%",
          bottom: 0,
          containLabel: true
        },
        series: [
          {
            type: "line",
            // 是否显示标记的图形
            showSymbol: false,
            smooth: true,
            // itemStyle: {
            //   color: "yellow",
            //   borderType: "dotted"
            // },
            lineStyle: {
              color: color,
              width: 1
            },
            data: data
          }
        ]
      };
      VeLine.setOption(option);
    },
    drawLineAll() {
      for(let i = 0; i < this.items.length; i++){
        this.drawLine(this.items[i].lineId, this.items[i].title, this.items[i].color, this.items[i].data);
      }
    }
  }
  
}
</script>

<style>
  .line{
    display: flex;
    flex-wrap: wrap;
  }
</style>

