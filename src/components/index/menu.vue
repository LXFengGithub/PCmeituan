<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
          <i :class="item.type"></i> 
          {{item.name}} 
          <span class="arrow"></span>
        </dd>
      </dl>
      <div v-if="curDetail" class="detail" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <!-- template 里面不能写key值，可以把key保存在 h4标签里 
          curDetail 就是鼠标移到那就显示谁的子元素。
        -->
        <template v-for="(item, index) in curDetail.items">
          <h4 :key="index">{{item.title}}</h4>
          <span v-for="(v, i) in item.items" :key="(v + '_' + i)">{{v}}</span>
        </template>
      </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data: () => ({
    timer: null,
    curDetail: null,
    menuList: []
  }),
  created() {
    api.getMunuList().then(res => {
      console.log(res)
      this.menuList = res.data.data
    })
  },
  methods: {
    // musemove mouseout  冒泡  mouseenter mouseleven   不冒泡
    // 处理二级导航 显示/隐藏
    menuEnter (item) {
      // console.log(item)
      this.curDetail = item
    },
    menuLeave () {
      let self = this
      this.timer = setTimeout(() => {
        self.curDetail = null
      }, 200)
    },
    mouseEnter () {
      clearTimeout(this.timer)
    },
    mouseLeave () {
      this.curDetail = null
    }
  }
};
</script>