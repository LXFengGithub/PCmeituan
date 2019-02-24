import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import Index from '@/page/index'
import GoodsList from '@/page/goodsList'
import ChangeCity from '@/page/changeCity'

Vue.use(Router)

export default new Router({
  mode: 'history', /* 开启mode="history"模式，需要服务器的支持，会去掉路由地址中的 # */
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: GoodsList
        },
        {
        path: 'index',
        name: 'index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      }]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: BlankPage
    }
    , 
    {
      path: '**', /* 错误路由，重定向。防止使用 history模式刷新报错 */
      redirect: '/index.html'
    }
  ]
})
