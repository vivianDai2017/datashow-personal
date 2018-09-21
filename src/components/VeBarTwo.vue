<template>
  <div id="VeBar" :style="{width: '100%', height: '84.630vh'}"></div>
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
  name: "VeBarTwo",
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      let VeBar = echarts.init(document.getElementById("VeBar"));
      let paiming = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      let zongjine = [2000, 2500, 3000, 4000, 5000, 5500, 6000, 7000, 8000, 9123];
      let fenpeijine = [1110000, 20000, 30000, 40000, 50000, 60000, 70000];
      let city = ["广东", "江苏", "福建", "湖南", "河南", "河北", "天津", "新疆", "云南", "浙江"];
      VeBar.setOption({
        title: {
          text: "设备省份分布",
          left: "7.77%",
          top: "2.19%",
          textStyle: {
            color: "#59ebe8",
            fontFamily: "SourceHanSansCN-Normal",
            fontWeight: "normal"
          }
        },
        color: ["#ddd"],
        grid: [
          {
            top: 60,
            bottom: 0,
            left: "7.77%",
            right: 20,
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
          position: "right",
          type: "category",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            color: "#fff"
            // 坐标轴刻度标签
            // inside: false,
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: zongjine
        },
        series: [
          //蓝条--------------------我是分割线君------------------------------//
          {
            show: true,
            type: "bar",
            barGap: "-100%",
            barWidth: "25%", //统计条宽度
            itemStyle: {
             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        offset: 0,
                        color: '#093762'         //0%处的颜色
                    }, 
                    {
                        offset: 1,
                        color: '#00ffcc'        //100%处的颜色
                    }])
            },
            label: {
              normal: {
                show: true,
                stack: "zongjine",
                textStyle: {
                  color: "red" //百分比颜色
                },
                position: [0,"-15vh"],
                rich: {
                  //富文本
                  write: {
                    //自定义颜色
                    color: "#fff"
                  },
                  // green: {
                  //   color: "#ddd"
                  // },
                  // yellow: {
                  //   color: "#000"
                  // }
                },
                // distance: 200,  //
                //百分比格式
                formatter: function(data) {
                  // return (baifenbi[data.dataIndex] * 100).toFixed(1) + "%";
                  return "{write|" + "NO." + paiming[data.dataIndex] + "  " + city[data.dataIndex] + "}";
                }
              }
            },
            labelLine: {
              show: true
            },
            z: 20,
            data: zongjine
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
                // color: "#000",
                position: "right",
                align: "left",
                // formatter: function(data) {
                //   //富文本固定格式{colorName|这里填你想要写的内容}
                //   // return "{yellow|" + "NO." + paiming[data.dataIndex] + "  " + city[data.dataIndex] + "}";//
                //   return zongjine[data.dataIndex];
                //   // return paiming[data.dataIndex] == 1 ? '{start1|}{yellow|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|    总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}' : ' {start2|}{black|' + paiming[data.dataIndex] + '  ' + city[data.dataIndex] + '}' + '{black|总金额:}{yellow|' + zongjine[data.dataIndex] / 10000 + '}{black|万元,已分配金额:}' + '{green|' + fenpeijine[data.dataIndex] / 10000 + '万元}';
                // }
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
  #VeBar{
    background-image: url("../assets/image/box_left.png");
    background-size: 100% 100%;
  }
</style>
