<template>
<!-- 下拉组件 -->
  <div :class="['choose-wrap', disabled ? 'disabled' : '']">
    <div class="choose" @click="showWrapper" v-document-click="documentClick">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content' : true, 'active' : showWrapperActive}">
        <h2>{{title}}</h2>
        <div :class="['wrapper', className]">
          <div class="col" v-for="(item, index) in renderList" :key="index">
            <span 
            v-for="(items, index) in renderList[index]" :key="index" :class="{'mt-item': true, 'active': items == value}"  @click="changeValue(items)">{{items.name}}</span>
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
  props: ["list", "title", "value", "showWrapperActive", "change", "disabled", "className"],
  computed:{
    renderList: function() {
      let col = Math.ceil(this.list.length / 12)
      let resultList = []
      for(var i = 0; i < col; i++){
        let data = this.list.slice(i * 12, i * 12 + 12)
        resultList.push(data)
      }
      return resultList
    }
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation()  // 取消冒泡行为
      // this.showWrapperActive = true
      if(!this.disabled) {
        this.$emit('change_active', true)
      }
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