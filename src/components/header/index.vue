<template>
  <div class="m-header">
    <!-- 在elmz 中 el-row 表示一行一个模块 -->
    <el-row> <top-bar /> </el-row>
    <el-row> <search-bar /> </el-row>
  </div>
</template>

<script>
import TopBar from './topBar.vue'
import SearchBar from './searchBar.vue'

export default {
  data: () => ({
    
  }),
  components: {
    TopBar,
    SearchBar
  }
};
</script>

<style  lang="scss">
@import '@/assets/css/public/header/index.scss'

</style>