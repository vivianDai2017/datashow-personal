<template>
  <div id="VeMap" :style="{width: '100%', height: '49.5vh'}"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入地图组件
require("echarts/lib/chart/map");
// 引入中国地图数据
require("echarts/map/js/china");
export default {
  name: "VeMapOne",
  data: function(){
    return {
      geoCoordMap: [
        {
          // name: "沈海",
          value: [123.476404,41.811854]
        },
        {
          // name: "磴口",
          value: [107.012225,40.337792]
        },
        {
          // name: "盘锦",
          value: [122.150954,41.146597]
        }
      ],
      num: 1000
    }
  },
  mounted() {
    let that = this;
    this.drawMap();
    let len = 3;
    let data3 =  [
      {
        // name: "沈海",
        value: [123.476404,41.811854]
      },
      {
        // name: "磴口",
        value: [107.012225,40.337792]
      },
      {
        // name: "盘锦",
        value: [122.150954,41.146597]
      }
    ];
    let data2 =  [
      {
        // name: "磴口",
        value: [107.012225,40.337792]
      },
      {
        // name: "盘锦",
        value: [122.150954,41.146597]
      }
    ];
    let data1 =  [
      {
        // name: "盘锦",
        value: [122.150954,41.146597]
      }
    ];
    let tmp = [data1, data2, data3];
    setInterval(function(){
        len --;
        len == 0 && (len = 3);
        that.geoCoordMap = tmp[len];
        that.num = len + 1000;
        // console.log(len);
        that.drawMap();
      },2000);
  },
  methods: {
    drawMap() {
      let that = this;
      let provinces =  [
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
          value: 900
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
        },
        {
          name: "南海诸岛",
          value: 0
        }
      ];
      let VeMap = echarts.init(document.getElementById("VeMap"));
      // console.log(VeMap);
      VeMap.setOption({
        // backgroundColor: "#000",
        title: {
          // text: "服务人次\n\n124,213,213\n",
          text: "{a|服务人次\n}" + "{b|124,213,213}",
          subtext: "{c|环比增长\n}{d|+20%}",
          left: "left",
          top: 5,
          textStyle: {
            rich: {
              a: {
                color: "#59ebe8",
                fontSize: 18
              },
              b: {
                color: "#fff",
                // fontSize: "4.63vh",
                fontSize: 24,
                fontFamily: "SourceHanSansCN-Medium",
                lineHeight: 28
              }
            }
          },
          subtextStyle: {
            lineHeight: 16,
            rich: {
              c: {
                color:"#fff",
              },
              d: {
                color: "#f00202",
              }
            }
          }
        },
        visualMap: {
          type: "continuous",
          min: 0,
          max: 1000,
          left: "left",
          bottom: "10%",
          text: ["高", "低"],
          itemWidth: 12,
          // 是否显示拖拽用的手柄，默认false
          // calculable: false,
          inverse: true,
          orient: "horizontal",
          inRange: {
            color: ["#32a6ff", "#21697b"]
          }
        },
        geo: {
          map: "china",
          roam: true,  
          label: {
            normal: {
              // show: true,
              // show: false,
              color: "#000"
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
            // 鼠标悬停后的配置项
            emphasis: {
              areaColor: "#daa520"
            }
          }
        },
        series: [
          {
            type: "map",
            mapType: "china",
            geoIndex: 0,
            data: provinces,
            zlevel: 1
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            rippleEffect: {
                // period:15,
                // scale: 4,
                brushType: 'fill'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: "green",
                    shadowBlur: 5,
                    shadowColor: "red"
                }
            },
             zlevel: 12,
            // data: handleEvents.initSeriesData(opt.data)
            data: that.geoCoordMap           
          }
        ] 
      })
    }
  }
}
</script>

<style>
  #VeMap{
    background-color: #000;
  }
</style>

