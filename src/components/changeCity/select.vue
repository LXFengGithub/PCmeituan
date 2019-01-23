<template>
<!-- 下拉组件 -->
  <div class="choose-wrap">
    <div class="choose" @click="showWrapper" v-document-click="documentClick">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content' : true, 'active' : showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col" v-for="(item, index) in list" :key="index">
            <span 
            v-for="(items, index) in list[index]" 
            :key="index" 
            :class="{'mt-item': true, 'active': items == value}"  
            @click="changeValue(items)">{{items}}</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    // showWrapperActive: false
  }),
  props: ["list", "title", "value", "showWrapperActive", "change"],
  methods: {
    showWrapper(e) {
      e.stopPropagation()  // 取消冒泡行为
      // this.showWrapperActive = true
      this.$emit('change_active', true)
    },
    documentClick() {
      // this.showWrapperActive = false      
      this.$emit('change_active', false)
      // console.log('------documentClick')
    },
    changeValue(items) {
      this.$emit('change', items)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>