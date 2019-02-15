<template>
    <!-- 小常识 标签： 如果里面没有内容我们可以用 单标签，里面要写内容用 双标签 -->
    <el-container class="layout-default">
      <!-- 设置height="100%" ： element框架自带 height="60px" -->
      <el-header height="100%">
        <my-header />
      </el-header>
      <el-main>
        <!-- <my-index /> -->
        <!-- 默认 让其渲染到此处 -->
        <router-view></router-view>
      </el-main>
      <el-footer height="100%">
        <my-footer />
      </el-footer>
    </el-container>
</template>

<script>
// 引入 header, main, footer入口 文件
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
import MyIndex from '@/page/index.vue'

export default {
  data: () => ({})
  ,
  components: {
    MyHeader,
    MyFooter,
    MyIndex
  }
};
</script>

<style lang="scss">
@import '@/assets/css/public/layout';
</style>