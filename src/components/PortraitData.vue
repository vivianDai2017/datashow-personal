<template>
  <div class="portraitData">
    <div>
      <img class="portrait" :src="item.imgUrl" alt="">
    </div>
    <div class="users">
      <div class="user">{{item.user}}</div>   
      <div class="ratio">{{item.ratio}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortraitData",
  props: {
    item: Object
  }
}
</script>

<style lang="less">
  .portraitData{
    display: flex;
    margin-left: 2.865vw;
    margin-top: 2.074vh;
    .portrait{
      width: 3.125vw;
      height: 8.333vh;
    }
    .users{
      padding-top: 4.0vh;
      font-size: 0.885vw;
      color: #59ebe8;
    }
  }
</style>

