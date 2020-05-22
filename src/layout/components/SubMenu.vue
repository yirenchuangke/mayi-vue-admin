<template>
  <div  v-if="!item.hidden">
    <el-menu-item :index="path ? `${path}/${item.path}`:`${item.path}` " v-if="!item.redirect">
      <i class="el-icon-location"></i>
      <span>{{item.meta.title}}</span>
    </el-menu-item>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <my-sub-menu
        v-for="child in item.children"
        :key="child.paht"
        :item="child"
        :path="path ? `${path}/${item.path}`:`${item.path}` "
      ></my-sub-menu>
    </el-submenu>
  </div>
</template>
dd
<script>
export default {
  name: "MySubMenu",
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
</style>