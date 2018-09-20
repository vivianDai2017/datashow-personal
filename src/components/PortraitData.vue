<template>
  <div class="portraitData">
    <div class="portrait">
      <img src="portraitUrl" alt="">
    </div>
    <div class="users">
      <div class="user">{{user}}</div>   
      <div class="ratio">{{tatio}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortraitData",
  props: {
    portraitUrl: String,
    user: String,
    ratio: String
  }
}
</script>

<style lang="less">
  .portraitData{
    display: flex;
    
  }
</style>

