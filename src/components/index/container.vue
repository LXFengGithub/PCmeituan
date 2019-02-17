<template>
  <div class="m-istyle">
    <!-- 可以把这个头 dl 也动态获取数据 -->
    <dl @mousemove="mouseMove" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
      v-for="(item, index) in nav.list" 
      :key="index" 
      :class="{active: kind == item.tab}" 
      :data-type="item.tab"
      >{{item.text}}</dd>
      <!-- <dd :class="{active: kind == 'eat'}" data-type="eat">约会聚餐</dd>
      <dd :class="{active: kind == 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: kind == 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active: kind == 'travel'}" data-type="travel">品质出游</dd> -->
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index" >
        <!-- shadow="never" 组件提供的：有3 个值，这个是让阴影永远不出现-->
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.address">{{item.address}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <!-- if else 判断 rentNum 的值，进行相应显示的样式 可以添加v-if到 class=price-info的标签里 v-if="item.rentNum" -->
            <div class="price-info" >
                 <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price}}</span>
                    <!-- <span class="units">/人均</span> -->
                </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
             <!-- <div class="price-info"  v-else-if="!item.rentNum">
              <span class="current-price-wrapper" >
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont" >抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.title}}</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data: () => ({
    kind: "all",
    resultsData:{},
  }),
  props: [
    'nav'
  ],
  created() {
    api.getContainer().then(res => {
      // console.log(res)
      this.resultsData = res.data.data
    })
  },
  methods: {
    mouseMove(e) {
      // console.log(e)
      let dom = e.target;
      let tagName = dom.localName;
      if (tagName != "dd") {  // 如果不是dd 这个元素 就没有比较之下下去了
        return;
      }
      // console.log(dom.dataset.type)  // 拿到 data-type 值
      // console.log(dom.getAttribute('data-type'));  // 这个也能拿到
      this.kind = dom.getAttribute("data-type");

      // 这里写 动态获取数据发送ajax请求。
    }
  }
};
</script>

<style  lang="scss">
@import "@/assets/css/index/artistic";
</style>