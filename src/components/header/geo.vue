<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      {{$store.state.position.name}}
      <!-- 小常识： 可以给路由起名叫  changeCity -->
      <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
      [
      <a href="#" v-for="item in nearCity" :key="item.id">{{item.name}}</a>
      ]
    </div>

    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">立即登入</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      nearCity: [],
    }
  },
   watch: {
    "$store.state.position": function() { // 监听"$store.state.position"的 变化 让nearcity 也跟着变化
      this.nearCity = this.$store.state.position.nearCity
    }
  },
  created() {
    api.getCurPosition().then(res => {
      // console.log(res)
      this.$store.dispatch('setPosition', res.data.data)  // 进入页面初始化-切换城市
      this.nearCity = res.data.data.nearCity  
    })
  },
 
}
</script>