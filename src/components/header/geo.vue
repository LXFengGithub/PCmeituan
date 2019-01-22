<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"/>
      北京
      <!-- 小常识： 可以给路由起名叫  changeCity -->
      <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
      [
      <a href="#">大厂回族自治县</a>
      <a href="#">廊坊</a>
      <a href="#">固安县</a>
      ]
    </div>

    <div class="m-user">
      <router-link class="login" :to="{name: 'login'}">立即登入</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>
