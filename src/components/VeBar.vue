<template>
  <div id="VeBar" :style="{width: '100%', height: '90vh'}"></div>
</template>

<script>
// 按需引入
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入title组件
require("echarts/lib/component/title");
export default {
  name: "VeBar",
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      let VeBar = echarts.init(document.getElementById("VeBar"));
      let baifenbi = [0.111, 0.333, 0.444, 0.555, 0.777, 0.888, 0.922];
      let grayBar = [1, 1, 1, 1, 1, 1, 1];
      let paiming = [7, 6, 5, 4, 3, 2, 1];
      let zongjine = [2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 9123000];
      let fenpeijine = [
        1110000,
        20000,
        30000,
        40000,
        50000,
        60000,
        70000
      ];
      let city = [
        "广东",
        "江苏",
        "福建",
        "湖南",
        "河南",
        "河北",
        "天津"
      ];
      VeBar.setOption({
        title: {
          text: "销售额省份分布",
          // left: "center",
          x: "15%",
          // textAlign: "center"
        },
        color: ["#ddd"],
        grid: [
          {
            top: 50,
            // width: "100%",
            bottom: 0,
            left: 10,
            containLabel: true
          }
        ],
        xAxis: {
          //是否显示坐标轴
          show: false,
          type: "value",
          splitLine: {
            show: false
          },
          //x轴刻度线
          axisTick: {
            show: false
          }
        },
        yAxis: {
          // show: true,
          type: "category",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            interval: 0,
            rotate: 0
            // 坐标轴刻度标签
            // inside: false,
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: city
        },
        series: [
          //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: "bar",
            barGap: "-100%",
            barWidth: "35%", //统计条宽度
            itemStyle: {
              normal: {
                barBorderRadius: 20 //统计条弧度
              }
            },
            max: 1,
            label: {
              normal: {
                show: true,
                stack: "zongjine",
                textStyle: {
                  color: "#000" //百分比颜色
                },
                position: ["255vw","15%"],
                // distance: 200,
                //百分比格式
                formatter: function(data) {
                  // return (baifenbi[data.dataIndex] * 100).toFixed(1) + "%";
                  return zongjine[data.dataIndex];
                }
              }
            },
            labelLine: {
              show: false
            },
            z: 20,
            data: baifenbi
          },
          //数据条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: "bar",
            // xAxisIndex: 1, 
            barGap: "-100%",
            barWidth: "25%", //统计条宽度
            // itemStyle: {
            //   normal: {
            //     barBorderRadius: 20,
            //     color: "rgba(22,203,115,0.05)"
            //   }
            // },
            label: {
              normal: {
                show: true,
                //label 的position位置可以是top bottom left,right,也可以是固定值
                //在这里需要上下统一对齐,所以用固定值
                position: [0, "-100%"],
                rich: {
                  //富文本
                  black: {
                    //自定义颜色
                    color: "#000"
                  },
                  green: {
                    color: "#ddd"
                  },
                  yellow: {
                    color: "#000"
                  }
                },
                formatter: function(data) {
                  //富文本固定格式{colorName|这里填你想要写的内容}
                  return "{yellow|" + "NO." + paiming[data.dataIndex] + "  " + city[data.dataIndex] + "}";
                  // return paiming[data.dataIndex] == 1 ? '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';
                }
              }
            },
            data: zongjine
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
