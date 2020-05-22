<template>
  <div class="my_login">
    <div class="btn">
      <p>码蚁Vue+element+admin后台管理框架</p>
      <p>作者：刘双龙</p>
      <p>网名：一人创客 / 码蚁工匠</p>
      <p>代码惯用前缀：my</p>

      <el-button type="success" @click=" $router.push({name:'home'})">点我登录</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my_login {
  background-color: #595959;
  height: 100%;
}
.btn {
  text-align: center;
  padding-top: 100px;
}
p {
  color: #fff;
  margin-bottom: 20px;
}
</style>