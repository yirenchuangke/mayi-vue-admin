<template>
  <div class="my_box index">
    <div class="bg">
      <p>
        开发初衷:
        现有的框架太繁重，很多用不到的附加功能，本项目给予vue-cli4搭建的轻量级通用后台管理项目
      </p>
      <p>介绍：本项目是码蚁工匠(刘双龙)开发，主要组件以MY为前缀命名，欢迎大家的提意见，本人电话：13522002566（微信同步）</p>
      <p>码蚁Vue+element+admin后台管理框架</p>
      <p>作者：刘双龙</p>
      <p>网名：一人创客 / 码蚁工</p>
      <p>A模块的name: {{ name }}</p>
      <p>{{ anameLength }}</p>

      <button @click="hello">点我调用 hello</button>
      <button @click="world">点我调用 world</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    // ...mapState(['a']),
    ...mapState("moduleA", ["name"]),
    ...mapGetters("moduleA", ["anameLength"])
    // ...mapGetters(['anameLength', 'bnameLength'])
    // name () {
    //   return this.$store.state.a.name
    // }
  },
  methods: {
    
    // ...mapMutations("b", ["hello"]), //要记得将自己是哪个模块带上不让找不到
    ...mapActions("moduleB", ["world"]),
    // world () {
    //   this.$store.dispatch('b/world')
    // }
    // ...mapActions(['world'])
    hello () {
      this.$store.commit('moduleA/hello')
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg {
  background-color: #6c757d;
  padding: 15px 15px 300px 15px;
  width: 100%;
  height: 100%;
  color: aliceblue;
  border-radius: 5px;
}
p {
  line-height: 30px;
}
</style>