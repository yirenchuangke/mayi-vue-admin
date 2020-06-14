<template>
  <div class="my-wrapper">
    <div class="layout-container">
      <!-- siderbar侧边导航 -->
      <div class="siderbar">
        <el-scrollbar style="height:100%;">
          <my-side-bar />
        </el-scrollbar>
      </div>
      <div class="my-content">
        <!-- 头部 -->
        <div class="header">
          <my-header />
          <my-tags v-show="false" />
        </div>
        <!-- main内容区域 -->

        <my-main class="main" />
      </div>
    </div>
      <my-to-top transition-name="fade"></my-to-top>
  </div>
</template>

<script>
import { myHeader, mySideBar, myMain, myTags, myToTop } from "./components";
export default {
  components: {
    myHeader,
    mySideBar,
    myMain,
    myTags,
    myToTop
  },
  data() {
    return {};
  },
  created() {
    window.scrollTo(0, 0); // todo 每次刷新滚动条回到顶部
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.my-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.layout-container {
  padding-top: 50px;
  position: relative;
  box-sizing: border-box;
  display: flex;
}
.siderbar {
  color: #f6f8f9;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 220px;
  height: 100vh;
  overflow: hidden;
  background: $base-menu-background;
  box-shadow: $base-box-shadow;
  transition: all 0.2s ease-in-out;
}
.my-content {
  width: 100%;
  position: relative;
  min-height: 100%;
  margin-left: 220px;
  background: #f6f8f9;
  transition: all 0.2s ease-in-out;

  .header {
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 997;
    width: 100%;
    overflow: hidden;
    left: 220px;
    width: calc(100% - 220px);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    transition: all 0.2s ease-in-out;
    background-color: $base-color-header;
  }
  .main {
    width: calc(100% - 30px);
    min-height: calc(100vh - 95px);
    margin: 15px auto;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
}
</style>