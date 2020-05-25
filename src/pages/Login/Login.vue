<template>
  <div class="login-wrap">

    <el-form class="login-form" label-position="right"  label-width="80px" :model="userData">
      <h2 class="login_title">用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="userData.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="userData.password" clearable show-password></el-input>
      </el-form-item>
      <el-button @click="login" class="login-button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      this.$router.push({name:'home'})
    }
     
  }
}
</script>

<style lang="scss" scoped>
.login_title{
  text-align: center;
  color: #555353;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 15px;
}
.login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrap .login-form {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-wrap .login-form .login-button {
  width: 100%;
}
</style>
