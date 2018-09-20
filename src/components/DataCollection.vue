<template>
  <div id="dataCollection">
    <div class="total">
      <!-- <TotalData title="总用户数" number="4,213,213"></TotalData> -->
      <div class="title">总用户数</div>
      <div class="num">
        4,213,213
        <span><i class="iconfont icon-web-icon-1"></i></span>
      </div>
    </div>
    <div class="classify">
      <TotalData class="classify-item" title="装锁师傅" number="3,213" ping></TotalData>
      <TotalData class="classify-item" title="代理商" number="413" up></TotalData>
      <TotalData class="classify-item" title="返修率" number="0.12‰" down></TotalData>
      <TotalData class="classify-item" title="平均用户数" number="2.8" up></TotalData>
      <TotalData class="classify-item" title="平均开锁次数" number="8.4" up></TotalData>
      <TotalData class="classify-item" title="核心用户" number="2%" up></TotalData>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
// import VeTop from "@/components/VeTop.vue";
// import VeBar from "@/components/VeBar.vue";
import TotalData from "./TotalData.vue";
// 引入iconfont
// import "./assets/iconfont/iconfont.css";

export default {
  name: "DataCollection",
  components: {
    TotalData
  }
};
</script>

<style lang="less">
.flex() {
  display: flex;
}
#dataCollection{
  height: 17.778vh;
  background-image: url("../assets/image/box_right1.png");
  background-size: 100% 100%;
  background-color: #000;
  display: flex;
  .total{
    flex: 48;
    text-align: left;
    margin-left: 1.563vw;
    .title{
      font-size: 1.563vw;
      margin-top: .5vh;
    }
    .num{
      font-size: 2.604vw;
      margin-top: 2.5vh
    }
  }
  .classify{
    flex: 51;
    .flex();
    flex-wrap: wrap;
    .classify-item{
      width: 33.3333%;
    }
  }
}
</style>
