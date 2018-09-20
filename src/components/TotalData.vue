<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="num">
      {{number}}
      <span class="ping" v-if="ping"></span>
      <span v-if="up"><i class="iconfont icon-web-icon-1"></i></span>
      <span v-if="down"><i class="iconfont icon-web-icon-"></i></span>      
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalData",
  props: {
    title: String,
    number: String,
    up: Boolean,
    down: Boolean,
    ping: Boolean
  }
}
</script>

<style lang="less">
  .title{
    color: #59ebe8;
    font-size: 0.833vw;
  }
  .num{
    color: #fff;
    font-weight: 500;
    font-family: SourceHanSansCN-Medium;
  }
  .ping{
    display: inline-block;
    background-color: yellow;
    width: 0.35vw;
    height: 0.30vh;
    margin-bottom: 1vh;
  }
</style>

