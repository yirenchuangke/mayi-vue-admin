<template>
  <div class="d-flex flex-column">
    <!-- 头部 -->
    <my-header class="header" >
      <my-tags />
    </my-header>
    

    <div class="d-flex container">
      <!-- 侧边导航 -->
      <my-aside class="bg-primary" />
      <!-- 主体内容 -->
      <my-main class="main" />
    </div>
  </div>
</template>

<script>
import { myHeader, myAside, myMain, myTags } from "./components";
export default {
  components: {
    myHeader,
    myAside,
    myMain,
    myTags
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #253143;
  color: aliceblue;
}
.main {
  background-color: #f0f0f0;
}
</style>