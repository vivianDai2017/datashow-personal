<template>
  <div class="userPortait">
    <PortraitData v-for="i in userList" :key="i.id" :item="i"></PortraitData>
  </div>
</template>

<script>
import PortraitData from "./PortraitData.vue";
export default {
  name: "UsersPortrait",
  components: {
    PortraitData
  },
  data() {
    return {
      userList: [
        {
          imgUrl: require("../assets/image/women.png"),
          user: "女性",
          ratio: "48%"
        },
        {
          imgUrl: require("../assets/image/man.png"),
          user: "男性",
          ratio: "52%"
        },
        {
          imgUrl: require("../assets/image/child.png"),
          user: "小孩",
          ratio: "24%"
        },
        {
          imgUrl: require("../assets/image/oldman.png"),
          user: "老人",
          ratio: "6%"
        }
      ]
    }
  }
}
</script>

<style>
  .userPortait{
    display: flex;
    flex-wrap: wrap;
    margin-top: 2vh;
  }
</style>
