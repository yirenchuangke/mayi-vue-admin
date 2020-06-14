<template>
  <div v-if="!item.hidden">
    <el-menu-item :index="path ? `${path}/${item.path}`:`${item.path}` " v-if="!item.redirect">
      <i class="el-icon-location"></i>
      <span>{{item.meta.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <side-bar-item
        v-for="children in item.children"
        :key="children.path"
        :item="children"
        :path="path ? `${path}/${item.path}`:`${item.path}` "
      ></side-bar-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String
    }
  },

  methods: {}
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