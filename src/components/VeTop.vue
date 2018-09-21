<template>
  <div class="top">
    <div class="lineImg">
      <div class="topLine">
        <div class="longLine"></div>
        <div class="shortLine"></div>
      </div>
      <div class="btmLine"></div>
    </div>
    <div class="title">
      云巢智能综合大数据平台
      <div><img class="topImg" src="../assets/image/top_01.gif"/></div>
    </div>
    <div><span class="time">{{nowTime}}</span></div>     
  </div>
</template>

<script>
export default {
  name: "VeTop",
  data: function(){
    return {
      nowTime: ""
    }
  },
  mounted() {
    var that = this;
    that.run();
  },
  methods: {
    now() {
      let that = this;
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let date = time.getDate();
      let day = time.getDay();
      let weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
      let week = weeks[day];
      let hour = time.getHours();
      let minutes = time.getMinutes();
      month < 10 && (month = "0" + month);
      date < 10 && (date = "0" + date);
      hour < 10 && (hour = "0" + hour);
      minutes < 10 && (minutes = "0" + minutes);
      that.nowTime = year + "/" + month + "/" + date + "  " + week + "  " + hour + ":" + minutes;
      console.log("当前时间");
      console.log(that.nowTime);
    },
    run() {
      this.now();
      setInterval(this.run, 30000);
    }
  }
}
</script>

<style lang="less">
  .top{
    display: flex;
    justify-content: space-around;
    .lineImg{
      margin-top: 4.63vh;
      .topLine{
        display: flex;
        margin-bottom: 1vh;
        div{
          height: 0.1vh;
          opacity: 0.6;
          background-color: #59ebe8;
        }
        .longLine{
          width: 15.938vw;
        }
        .shortLine{
          width: 1.094vw;
          margin-left: 0.5vw;
        }
      }
      .btmLine{
        width: 22vw;
        height: 0.1vh;
        background-color: rgba(88,235,232,0.3);
      }
    }
    .title{
    flex: 1;
    margin-top: 1vh;
    color: #fff;
    font-size: 2.593vh;
    font-family: SourceHanSansCN-Medium;
      .topImg{
        flex: 1;
        width: 16.719vw;
        height:1.760vh;
      }
    }
    
    .time{
      flex: 1;
      display: inline-block;
      width: 14vw;
      line-height: 3.704vh;
      border-bottom: 0.1vh solid rgba(88,235,232,0.51);
      font-size: 0.938vw;
      color: #59ebe8;
      font-family: SourceHanSansCN-Normal;
      text-align: right;
      margin-top: 4vh;
    }
  }
 
  
</style>

