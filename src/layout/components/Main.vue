<template>
  <div class="wb-100 my_main content" :style="`height:${height}`">
    <el-backtop target=".content"></el-backtop>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: ""
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
.my_main {
  overflow: hidden;
  overflow-y: auto;
}
</style>