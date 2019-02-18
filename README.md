# pcmeituan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

_src
  |__api    api接口文件集
    |__index.js
  |__assets
    |__css    scss文件集
  |__components   组件集
    |__changeCity   切换城市
      |__category.vue   首字母选择，瞄点跳转
      |__hot.vue    热门城市，最近访问；共用组件
      |__province.vue   按省份选择，二级下拉组件
      |__select.vue   分装的下拉组件
    |__footer   页脚
      |__index.vue
    |__header   头部
      |__geo.vue    左侧nav
      |__index.vue    
      |__nav.vue    右侧nav
      |__searchBar.vue    搜索栏
      |__topBar.vue   最顶部nav
    |__index
      |__container.vue    选项卡，列表部分
      |__life.vue   右边，个人信息等
      |__menu.vue   左边，二级导航
      |__slider.vue   轮播图
    |__products   产品列表页
      |__category.vue   分类、区域部分，导航菜单
      |__crumb.vue    面包屑导航
      |__item.vue   
      |__list.vue   内容区-列表
      |__select.vue
  |__layout
    |__default.vue    默认页面，首页
  |__page   
    |__changeCiyu.vue   切换城市页
    |__goodsList.vue    列表页
    |__index.vue    首页内容区
  |__router   路由集合
    |__index.js
  |__app.vue    
  |__axios.js   设置请求头，拦截器
  |__main.js
  |__store.js   vuex文件


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
