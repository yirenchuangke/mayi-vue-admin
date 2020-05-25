<template>
  <div class="my_header">
    <slot></slot>
     <div class="aut">
 <i class="el-icon-switch-button mr-10 cp" @click="out"></i>
     </div>
   
  </div>
</template>

<script>
export default {
  methods: {
    out() {
        this.$confirm('此操作将会退出系统, 是否退出?', '退出', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name:'login'})
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
      }
  },
};
</script>


<style lang="scss" scoped>
.my_header{
  height: 60px;

}
.aut{
text-align: right;
}
</style>