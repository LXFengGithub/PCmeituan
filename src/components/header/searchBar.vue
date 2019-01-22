<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt>
      </el-col>

      <el-col :span="15" class="center">
        <div class="wrapper">
          <!-- focus 获取焦点 blur 失去焦点 -->
          <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focus" @blur="blur"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <!-- 开始不让显示，需要条件。 2个下拉框显示哪一个。 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index" >
              <!-- 设定一个路由名字为goods，跳转的时候 获取url地址 替换name 字段为 item 
                      如：  https://bj.meituan.com/s/火锅/

                      params 和 query 都能获取url 只是显示形式风格不一，
                      目前用的最多的就是 params 来获取，叫 restful风格
              -->
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList"  v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a herf="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchWord: '',
    hotPlace: ["故宫博物院", "北京欢乐谷"],
    searchList: ["火锅", "火炉火", "火齐潮汕砂锅粥", "火锅自助餐"],
    suggestList: ["故宫博物院", "北京欢乐谷", "静之湖滑雪场", "尚隐·泉都市生活馆", "故宫珍宝馆", "军都山滑雪场"],
    isFocus: false
  }),
  computed: {
    isSearchList () {
      return this.isFocus && this.searchWord
    },
    isHotPlace () {
      return this.isFocus && !this.searchWord
    }
  },
  methods: {
    focus () {
      return this.isFocus = true
    },
    blur () {
      // 设置 定时器 是为了保持当前状态。正常跳转。  不然，状态会瞬间改变，不能正常跳转。
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)

    }
  },    
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/search.scss"; 
</style>