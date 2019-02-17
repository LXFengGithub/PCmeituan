<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <Item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Item from "./item.vue";
export default {
  data: () => ({
    nav: [
      {
        key: "s-default",
        name: "智能排序",
        active: true
      },
      {
        key: "s-price",
        name: "价格排序",
        active: false
      },
      {
        key: "s-score",
        name: "人气最高",
        active: false
      },
      {
        key: "s-comment",
        name: "评价最高",
        active: false
      }
    ],
    productList: []
  }),
  created() {
      this.getProduct()
      // api.getProductsList().then(res => {
      //   this.productList = res.data.data;
      // });
  },
  methods: {
    
    async getProduct() {
      const { data: {data} } = await api.getProductsList()
      this.productList = data
      console.log(this.productList)
    }
  },
  components: {
    Item
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/list.scss";
</style>