<template>
  <div class="my_aside" :style="`height:${height}`">
    <el-scrollbar style="height:100% width:200px">
      <el-menu
        router
        :style="`height:${height}`"
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
      >
        <my-sub-menu v-for="(i,index) in menuList" :key="index" :item="i"></my-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuList from "../../router/router.config";
import MySubMenu from "./SubMenu";
export default {
  components: {
    MySubMenu
  },
  data() {
    return {
      height: "",
      menuList
     
    };
  },
  methods: {
    getHeight() {
      this.height = window.innerHeight - 60 + "px";
      console.log(this.height);
    }
  },
  created() {
     
    
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },

  destroyed() {
    window.removeEventListener("resize", this.getHeight);
  }
};
</script>

<style lang="scss" scoped>
.my_aside {
  width: 240px;
}
.el-menu {
  border-right: none;
}
</style>