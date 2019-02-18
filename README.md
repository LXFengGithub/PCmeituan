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
    |__changeCity   选择城市
      |__category.vue  
      |__goodsList.vue
      |__index.vue
    |__footer   页脚
      |__index.vue
    |__header   头部
      |__geo.vue
      |__index.vue
      |__nav.vue
      |__searchBar.vue
      |__topBar.vue
    |__index    轮播图部分
      |__container.vue
      |__life.vue
      |__menu.vue
      |__slider.vue
    |__products   产品列表页
      |__category.vue   分类、区域部分，导航菜单
      |__crumb.vue    面包屑导航
      |__item.vue   
      |__list.vue   内容区-列表
      |__select.vue
  |__layout
  |__page   
    |__changeCiyu.vue
    |__goodsList.vue
    |__index.vue
  |__router   路由集合
    |__index.js
  |__app.vue    
  |__axios.js   设置请求头，拦截器
  |__main.js
  |__store.js   vuex文件


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
