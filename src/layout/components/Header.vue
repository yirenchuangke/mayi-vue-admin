<template>
  <div class="my_header">
    <slot></slot>
     <div class="aut">
 <el-button type="success"  @click=" $router.push({name:'login'})">退出</el-button>
     </div>
   
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.my_header{
  height: 60px;

}
.aut{
text-align: right;
}
</style>