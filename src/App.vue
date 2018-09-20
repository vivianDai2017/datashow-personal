<template>
  <div id="app">
    <div class="t">
      <VeTop></VeTop>
    </div>
    <div class="b">
      <div class="l">
        <!-- <VeBar></VeBar> -->
        <!-- <VeBarOne></VeBarOne> -->
        <VeBarTwo></VeBarTwo>
        <img class="VeBarGif" src="./assets/image/right_01.gif" alt="">
      </div>
      <div class="r">
        <div class="rt">
          <!-- <div class="rtl"><VeMap></VeMap></div> -->
          <div class="rtl"><VeMapOne></VeMapOne></div>
          <div class="rtr">
            <div class="rtrt">
              <DataCollection></DataCollection>
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
import VeTop from "@/components/VeTop.vue";
import VeBar from "@/components/VeBar.vue";
// import VeMap from "@/components/VeMap.vue";
import TotalData from "@/components/TotalData.vue";
import DataCollection from "@/components/DataCollection.vue";
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
    VeTop,
    VeBar,
    // TotalData,
    DataCollection,
    VePie,
    VeLine,
    VeBarOne,
    VeBarTwo,
    VeMapOne
  }
};
</script>

<style lang="less">
@baseColor: #59ebe8;
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
  .flexY();
  padding: 2.78vh 2.604vw 3.241vh 2.40vw;
}
.t {
  flex: 88;
  font-size: 3vh;
}
.b {
  flex: 912;
  .flex();
  justify-content: space-between;
  .l {
    // flex: 2;
    width: 16.094vw;
    height: 84.630vh;
    background-color: #000;
    position: relative;
    .VeBarGif{
      width: 11.302vw;
      height: 15.833vh;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .r {
    // flex: 8;
    width: 76.667vw;
    .flexY();
    .rt{
      // flex: 55;
      height: 47.5vh;
      background-color: #000;
      .flex();
      .rtl{
        // flex: 40;
        width: 38.480vw;
      }
      .rtr{
        // flex: 60;
        width: 38.177vw;
        .flexY();
        .rtrt{
          // flex: 40;
          height: 17.778vh;
          margin-bottom: 1.481vh;
        }
        .rtrb{
          // flex: 60;
          height: 26.852vh;
          background-image: url("./assets/image/box_right2.png");
          background-size: 100% 100%;
          margin-bottom: 1.667vh;
          .flex();
          .rtrb-item{
            flex: 1;
            border-right: 1px solid red;
          }
        }
      }
    }
    .rb{
      // flex: 45;
      height: 37.963vh;
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
