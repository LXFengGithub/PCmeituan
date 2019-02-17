<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />

    <span>直接搜索：
      <el-autocomplete
        v-model="state4"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入城市中文或拼音"
        @select="handleSelect"
      ></el-autocomplete>
    </span>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'

export default {
  data: () => ({
    provinceList: [],
    province: "省份",
    provinceActive: false,
    cityList: [],
    city: "城市",
    cityActive: false,
    restaurants: [],
    state4: "",
    timeout: null,
    cityDisabled: true
  }),
  created() {
     api.getProvince().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName 
        return item
      })
    })
  },
  components: {
    MSelect
  },
  methods: {
    /* 利用自定义事件 建立父子组件通信 */
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        /* 为true 时，cityActive就为false */
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name
      this.cityDisabled = false 
      this.cityList = item.cityInfoList
    },
    changeCity(item) {
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})  // 切换城市完成后跳转路由
    },

    loadAll() {  /* 请求后台接口数据放这里 */
      return [
          { "value": "青岛" },
          { "value": "淄博"},
          { "value": "济南"},
          { "value": "南京"}
      ];
    },
    // 直接搜索框样式 
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>













