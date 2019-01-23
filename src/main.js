// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入公共css样式 main.css
import '@/assets/css/main'

Vue.use(ElementUI)
Vue.config.productionTip = false


/* 自定义指令 钩子函数 bind，inserted 是用的最多的*/
Vue.directive('documentClick', { /* 点击该 dom元素，以外的位置就转换状态为false */
  bind(el, binding, vnode ) { /* 进入就会触发 */
    document.addEventListener('click', binding.value, false)
    // console.log('--------bind',el, binding, vnode)
  },
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

