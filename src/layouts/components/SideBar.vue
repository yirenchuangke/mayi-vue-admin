<template>
  <div>
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
      :background-color="variables['menu-background']"
      :text-color="variables['menu-color']"
      :active-text-color="variables['menu-color-active']"
    >
      <side-bar-item v-for="route in routes" :key="route.path" :item="route" />
    </el-menu>
  </div>
</template>

<script>
import variables from "../../styles/variables.scss";
import SideBarItem from "./SideBarItem";
import routes from "@/router/routers";
export default {
  components: {
    SideBarItem
  },
  data() {
    return {
      routes
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    variables() {
      return variables;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: $base-color-white !important;
    background-color: $base-menu-background-active !important;
  }

  &.is-active {
    color: $base-color-white !important;
    background-color: $base-menu-background-active !important;
  }
}
.el-menu-item {
  height: 46px !important;
  overflow: hidden;
  line-height: 46px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  @include active;
}
.el-menu {
  border-right: 0;
}
</style>