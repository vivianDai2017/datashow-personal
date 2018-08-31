<template>
  <div id="app">
    <div class="t">云巢数据</div>
    <div class="b">
      <div class="l">
        <VeBar></VeBar>
      </div>
      <div class="r">
        <div class="rt">
          <div class="rtl"><VeMap></VeMap></div>
          <div class="rtr"></div>
        </div>
        <div class="rb"></div>
      </div>
    </div>
    <!-- <DemoMap></DemoMap> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VeBar from "@/components/VeBar.vue";
import VeMap from "@/components/VeMap.vue";
import DemoMap from "@/components/Demo.vue";
export default {
  name: "App",
  components: {
    VeBar,
    VeMap,
    DemoMap
  }
};
</script>

<style lang="less">
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.t {
  flex: 1;
  font-size: 6vh;
}
.b {
  flex: 9;
  display: flex;
  .l {
    flex: 2;
  }
  .r {
    flex: 8;
    display: flex;
    flex-direction: column;
    .rt{
      flex: 55;
      display: flex;
      .rtl{
        flex: 40;
        // background-color: yellow;
      }
      .rtr{
        flex: 60;
        background-color: blue;
      }
    }
    .rb{
      flex: 45;
      background-color: green;
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
