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
                name: "标准家庭: 28%",
                value: 28
              },
              {
                name: "独居: 10%",
                value: 10
              },
              {
                name: "租户: 48%",
                value: 48
              },
              {
                name: "夫妇: 6%",
                value: 6
              },
              {
                name: "三代同堂: 5%",
                value: 5
              },
              {
                name: "其他: 3%",
                value: 3
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
      // time === 5 && clearInterval(timer);
    },3000);
    
    
  },
  methods: {
    drawPie: function(index){
      let that = this;
      console.log("画饼");
      console.log(index);
      let VePie = echarts.init(document.getElementById("VePie"));
      let option = {
        title: {
          text: "家庭画像"
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: "35%",
          itemGap: 5,
          formatter: function(name){
            return name.split(":")[0]
          }
        },
        series: [
          {
            name: "家庭组成",
            type: "pie",
            radius: ["55%","75%"],
            center: ["55%", "50%"],
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
