<template>
  <div id="VeMap" :style="{width: '100%', height: '49.5vh'}">地图组件</div>
</template>

<script>
export default {
  name: "VeMap",
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      let VeMap = echarts.init(document.getElementById("VeMap"));
      console.log(VeMap);
    }
  }
}
</script>
