<template>
  <div>
    <div>{{title}}</div>
    <div>
      {{number}}
      <span><i class="iconfont icon-web-icon-1"></i></span>      
    </div>
  </div>
</template>

<script>
export default {
  name: "TotalData",
  props: {
    title: String,
    number: String
  }
}
</script>

<style>

</style>

