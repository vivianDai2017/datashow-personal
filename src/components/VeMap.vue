<template>
  <div id="VeMap" :style="{width: '100%', height: '49.5vh'}"></div>
</template>

<script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入地图组件
require("echarts/lib/chart/map/");
export default {
  name: "VeMap",
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      let VeMap = echarts.init(document.getElementById("VeMap"));
      console.log(VeMap);
      VeMap.setOption({
        title: {
          text: "七大区域",
          left: "center",
          top: 5,
          textStyle: {
            color: "#1a1b4e",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 20
          }
        },
        visualMap: {
          min: 0,
          max: 1000,
          // left: "left",
          // top: "bottom",
          text: ["高", "低"],
          calculable: true,
          orient: "horizontal",
          inRange: {
            color: ["#e0ffff", "#006edd"]
            // symbolSize: [30, 100]
          }
        },
        geo: {
          map: "china",
          label: {
            normal: {
              show: true,
              color: "#333"
            },
            emphasis: {
              show: true,
              color: "#fff"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#fbfbfb",
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "#3574c8"
            }
          }
        },
        series: [
          {
            type: "map",
            mapType: "china",
            geoIndex: 10,
            data: [
              {
                name: "北京",
                value: 231
              },
              {
                name: "天津",
                value: 999
              },
              {
                name: "上海",
                value: 10
              },
              {
                name: "重庆",
                value: 100
              },
              {
                name: "河北",
                value: 520
              },
              {
                name: "河南",
                value: 90
              },
              {
                name: "云南",
                value: 800
              },
              {
                name: "辽宁",
                value: 10
              },
              {
                name: "黑龙江",
                value: 10
              },
              {
                name: "湖南",
                value: 10
              },
              {
                name: "安徽",
                value: 10
              },
              {
                name: "山东",
                value: 10
              },
              {
                name: "新疆",
                value: 0
              },
              {
                name: "江苏",
                value: 600
              },
              {
                name: "浙江",
                value: 200
              },
              {
                name: "江西",
                value: 10
              },
              {
                name: "湖北",
                value: 10
              },
              {
                name: "广西",
                value: 10
              },
              {
                name: "甘肃",
                value: 180
              },
              {
                name: "山西",
                value: 900
              },
              {
                name: "内蒙古",
                value: 10
              },
              {
                name: "陕西",
                value: 10
              },
              {
                name: "吉林",
                value: 10
              },
              {
                name: "福建",
                value: 10
              },
              {
                name: "贵州",
                value: 700
              },
              {
                name: "广东",
                value: 999
              },
              {
                name: "青海",
                value: 10
              },
              {
                name: "西藏",
                value: 10
              },
              {
                name: "四川",
                value: 300
              },
              {
                name: "宁夏",
                value: 100
              },
              {
                name: "海南",
                value: 900
              },
              {
                name: "台湾",
                value: 10
              },
              {
                name: "香港",
                value: 10
              },
              {
                name: "澳门",
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
