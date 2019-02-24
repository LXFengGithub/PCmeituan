<template>
  <div class="page-product">
    <div>
      <el-row class="m-crumbs">
        <Crumb />
      </el-row>
      <el-row>
        <el-col :span="19">
          <el-row>  
            <Categroy />
          </el-row>
          <el-row>
            <List />
          </el-row>
        </el-col>
        <el-col :span="5">map + fav</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Crumb from '@/components/products/crumb'
import Categroy from '@/components/products/category'
import List from '@/components/products/list'

export default {
  data: () => ({}),
  components:{
    Crumb,
    Categroy,
    List
  }
}
</script>

<style  lang="scss">
@import '@/assets/css/products/index.scss';
</style>