<template>
  <div id="app">
    <div class="t">
      <VeTop></VeTop>
    </div>
    <div class="b">
      <div class="l">
        <VeBar></VeBar>
        <img class="veBarGif rTop" src="./assets/image/right_01.gif" alt="">
        <img class="veBarGif lBtm" src="./assets/image/right_01.gif" alt="">
      </div>
      <div class="r">
        <div class="rt">
          <div class="rtl"><VeMap></VeMap></div>
          <div class="rtr">
            <div class="rtrt">
              <DataCollection></DataCollection>
            </div>
            <div class="rtrb">
              <div class="rtrb-item"><VePie></VePie></div>
              <div class="rtrb-item">
                <UsersPortrait></UsersPortrait>
                <img class="vePieGif" src="./assets/image/right_down.gif" alt="">
              </div>
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
import VeMap from "@/components/VeMap.vue";
import TotalData from "@/components/TotalData.vue";
import DataCollection from "@/components/DataCollection.vue";
import VePie from "@/components/VePie.vue";
import VeLine from "@/components/VeLine.vue";
import UsersPortrait from "@/components/UsersPortrait.vue"
// 引入iconfont
import "./assets/iconfont/iconfont.css";
export default {
  name: "App",
  components: {
    VeTop,
    VeBar,
    VeMap,
    DataCollection,
    VePie,
    VeLine,
    UsersPortrait
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
  background-image: url("./assets/image/bg.png");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
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
    position: relative;
    .veBarGif{
      width: 11.302vw;
      height: 15.833vh;
      position: absolute;
    }
    .rTop{
      top: 0;
      right: 0;
      transform: translate(1%, -2%);
    }
    .lBtm{
      bottom: 0;
      left: 0;
      transform: rotateZ(180deg) translate(1%, -3%);
    }
  }
  .r {
    // flex: 8;
    width: 76.667vw;
    .flexY();
    .rt{
      // flex: 55;
      height: 47.5vh;
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
          position: relative;
          .flex();
          .rtrb-item{
            flex: 1;
            .vePieGif{
              width: 6.25vw;
              height: 0.926vh;
              position: absolute;
              bottom: 0.900vh;
              right: 1.302vw;
            }
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
</style>
