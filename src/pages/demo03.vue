<template>
  <div>
    <h1>hello {{title}}</h1>
    <ul>
      <li v-for="(good,index) in goods" :key="index">
        <span>{{good.text}}-----{{good.price}}</span>
        <span>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-button @click="addCart(index)">添加购物车</el-button>
      </li>
    </ul>
    <table border="1">
      <tr>
        <td>商品</td>
        <td>单价</td>
        <td>价格</td>
        <td>总量</td>
        <td>操作</td>
      </tr>
      <tr v-for="(c,index) in cart" :key="index">
        >
        <td>{{c.text}}</td>
        <td>{{c.price}}</td>
        <td>{{c.count*c.price}}</td>
        <td>{{c.count}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "kaikeba",
      goods: [
        { text: "百万年薪前端架构师", price: 16800 },
        { text: "web全栈", price: 13800 },
        { text: "js高级", price: 8880 },
        { text: "html+css", price: 8680 }
      ],
      cart: []
    };
  },
  methods: {
    addCart(i) {
      console.log("添加购物车");
      let item = this.goods[i];
      let good = this.cart.filter(e => {
        return e.text == item.text;
      });

      if (good.length>0) {
        good.count += 1;
      } else {
          item.count=1
        this.cart.push(item);
      }
      console.log(good);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>