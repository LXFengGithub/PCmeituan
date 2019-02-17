<template>
  <div class="page-changeCity">
    <el-row>
      <Province/>
    </el-row>
    <el-row>
      <Hot title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
      <Hot title="最近访问：" :list="recentList"/>
    </el-row>
    <el-row>
      <Category title="按拼音首字母选择："/>
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province";
import Hot from "@/components/changeCity/hot";
import Category from "@/components/changeCity/category";
import api from  '@/api/index.js'
export default {
  data: () => ({
    hotList: [
      // "青岛",
      // "淄博",
      // "济南",
      // "烟台",
      // "枣庄",
      // "东营",
      // "潍坊",
      // "济宁",
      // "泰安",
      // "威海",
      // "日照",
      // "莱芜"
    ],
    recentList: [
      "青岛",
      "淄博",
      "济南",
      "烟台",
      "枣庄",
      "东营",
      "潍坊",
      "济宁",
      "泰安",
      "威海",
      "日照",
      "莱芜"
    ]
  }),
  created() {
    // api.getHotCity().then(res => {
    //   this.hotList = res.data.data.map(item => item.name)
    // })
    api.getRecentCity().then(res => {
      // 返回的数据结构是 json 所以用过 map() 方发转一下
      this.recentList = res.data.data.map(item => item.name)
    })
    this.hotcity()
  },
  methods: {
    async hotcity() {
      let { data: { data } } = await api.getHotCity()
      this.hotList = data.map(item => item.name)
    },
  },
  components: {
    Province,
    Hot,
    Category
  }
};
</script>

<style >
</style>