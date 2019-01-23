<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="menuLeave">
        <dt>全部分类</dt>
        <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
          <i :class="item.type"></i> 
          {{item.title}} 
          <span class="arrow"></span>
        </dd>
      </dl>
      <div v-if="curDetail" class="detail" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <!-- template 里面不能写key值，可以把key保存在 h4标签里 
          curDetail 就是鼠标移到那就显示谁的子元素。
        -->
        <template v-for="(item, index) in curDetail.children">
          <h4 :key="index">{{item.title}}</h4>
          <span v-for="(v, i) in item.children" :key="(v + '_' + i)">{{v}}</span>
        </template>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    timer: null,
    curDetail: null,
    menuList: [
      {
      "title": "美食",
        "type": "food",
        "children": [{
            "title": "美食1",
            "children": ["日本菜", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请"]
        }]
    },
    {
      "title": "美食",
        "type": "food",
        "children": [{
            "title": "美食2",
            "children": ["日本菜", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请"]
        }]
    },
    {
      "title": "美食",
        "type": "food",
        "children": [{
            "title": "美食3",
            "children": ["日本菜", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请"]
        }]
    },
    {
      "title": "美食",
        "type": "food",
        "children": [{
            "title": "美食4",
            "children": ["日本菜", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请"]
        }]
    },
    {
      "title": "美食",
        "type": "food",
        "children": [{
            "title": "美食5",
            "children": ["日本菜", "甜点饮品", "火锅自助餐", "小吃快餐", "日韩料理", "西餐", "聚餐宴请"]
        }]
    }]
  }),
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