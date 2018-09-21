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
  data: function(){
    return {
      components: [
        {
                name: "标准家庭: \n\n28%",
                value: 28
              },
              {
                name: "独居: \n\n10%",
                value: 10
              },
              {
                name: "租户: \n\n48%",
                value: 48
              },
              {
                name: "夫妇: \n\n6%",
                value: 6
              },
              {
                name: "其他: \n\n3%",
                value: 3
              },
              {
                name: "三代同堂: \n\n5%",
                value: 5
              }
      ]
    }
  },
  mounted() {
    let that = this;
    let indexTmp = 0;
    that.drawPie(indexTmp);
    let time = 0;
    let timer = setInterval(function(){
      time++;
      indexTmp++;
      indexTmp > 5 && (indexTmp = 0);
      console.log("indexTmp",indexTmp);
      that.drawPie(indexTmp);
    },3000);
    
    
  },
  methods: {
    drawPie: function(index){
      let that = this;
      let VePie = echarts.init(document.getElementById("VePie"));
      let option = {
        title: {
          text: "家庭画像",
          top: "2%",
          left: "6%",
          textStyle: {
            color: "#59ebe8",
            fontFamily: "SourceHanSansCN-Normal",
            fontWeight: "normal",
            fontSize: "127%"
          }
        },
        legend: {
          orient: "vertical",
          left: "8%",
          top: "35%",
          itemGap: 5,
          textStyle: {
            color: "#59ebe8",
          },
          formatter: function(name){
            return name.split(":")[0]
          }
        },
        color: ["#ff9555", "#b289d9", "#02feff", "#2294f2", "#06d627", "#f24752"],
        series: [
          {
            name: "家庭组成",
            type: "pie",
            radius: ["45%","65%"],
            center: ["65%", "50%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "15",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: that.components
          }
        ]
      };
      index == 0 && VePie.clear();
      VePie.setOption(option);
      VePie.dispatchAction({
        type: "highlight",   
        seriesIndex: 0,
        dataIndex: index
      });
      // 鼠标指向别的图块时,展示选中数据的图块信息,隐藏默认色块高亮信息
      VePie.on("mouseover",(v) => {
        console.log("鼠标进入");
        console.log(v);
        if(v.dataIndex != 0){
          VePie.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: 0
          });
        }
      }); 
      // 鼠标离开恢复默认设置
      VePie.on("mouseout",(v) => {
        console.log("鼠标离开");
        VePie.dispatchAction({
          type: "highlight",
          seriseIndex: 0,
          dataIndex: 0
        })
      })

    }
  }
}
</script>
