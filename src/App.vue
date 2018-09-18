<template>
  <div id="app">
    <div class="t">云巢智能综合大数据平台</div>
    <div class="b">
      <div class="l">
        <!-- <VeBar></VeBar> -->
        <!-- <VeBarOne></VeBarOne> -->
        <VeBarTwo></VeBarTwo>
      </div>
      <div class="r">
        <div class="rt">
          <!-- <div class="rtl"><VeMap></VeMap></div> -->
          <div class="rtl"><VeMapOne></VeMapOne></div>
          <div class="rtr">
            <div class="rtrt">
              <div class="total">
                <TotalData title="总用户数" number="4,213,213"></TotalData>
              </div>
              <div class="classify">
                <TotalData class="classify-item" title="装锁师傅" number="3,213"></TotalData>
                <TotalData class="classify-item" title="代理商" number="413"></TotalData>
                <TotalData class="classify-item" title="返修率" number="0.12‰"></TotalData>
                <TotalData class="classify-item" title="平均用户数" number="2.8"></TotalData>
                <TotalData class="classify-item" title="平均开锁次数" number="8.4"></TotalData>
                <TotalData class="classify-item" title="核心用户" number="2%"></TotalData>
              </div>
            </div>
            <div class="rtrb">
              <div class="rtrb-item"><VePie></VePie></div>
              <div class="rtrb-item"></div>
            </div>
          </div>
        </div>
        <div class="rb">          
          <VeLine></VeLine>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VeBar from "@/components/VeBar.vue";
// import VeMap from "@/components/VeMap.vue";
import TotalData from "@/components/TotalData.vue";
import VePie from "@/components/VePie.vue";
import VeLine from "@/components/VeLine.vue";
import VeBarOne from "@/components/VeBarOne.vue";
import VeBarTwo from "@/components/VeBarTwo.vue";
import VeMapOne from "@/components/VeMapOne.vue";
// 引入iconfont
import "./assets/iconfont/iconfont.css";
export default {
  name: "App",
  components: {
    VeBar,
    // VeMap,
    TotalData,
    VePie,
    VeLine,
    VeBarOne,
    VeBarTwo,
    VeMapOne
  }
};
</script>

<style lang="less">
* {
  margin: 0;
}
.flexY() {
  display: flex;
  flex-direction: column;
}
.flex() {
  display: flex;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  .flexY();
}
.t {
  flex: 1;
  font-size: 6vh;
}
.b {
  flex: 9;
  .flex();
  .l {
    flex: 2;
    border-right: 1px solid red;
  }
  .r {
    flex: 8;
    .flexY();
    .rt{
      flex: 55;
      .flex();
      .rtl{
        flex: 40;
        border-right: 1px solid red;
      }
      .rtr{
        flex: 60;
        .flexY();
        .rtrt{
          flex: 40;
          // background-color: red;
          .flex();
          .total{
            flex: 45;
            text-align: left;
          }
          .classify{
            flex: 55;
            .flex();
            flex-wrap: wrap;
            .classify-item{
              width: 33.3333%;
            }
          }
        }
        .rtrb{
          flex: 60;
          // background-color: yellow;
          .flex();
          .rtrb-item{
            flex: 1;
            border-right: 1px solid red;
          }
        }
      }
    }
    .rb{
      flex: 45;
      // background-color: green;
      .flex();
      flex-wrap: wrap;
      .test{
        width: 50%;
      }
    }
  }
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
