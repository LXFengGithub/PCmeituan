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
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
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

export default {
  data: () => ({
    provinceList: {
      0: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州"
      ],
      1: [
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东"
      ],
      2: [
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙",
        "西藏",
        "广西"
      ]
    },
    province: "省份",
    provinceActive: false,
    cityList: {
      0: [
        "青岛",
        "淄博",
        "济南",
        "烟台",
        "枣庄",
        "东营",
        "潍坊",
        "济宁",
        "泰安",
        "威海",
        "日照",
        "莱芜"
      ]
    },
    city: "城市",
    cityActive: false,
    restaurants: [],
    state4: "",

    timeout: null
  }),
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
      this.province = item
    },
    changeCity(item) {
      this.city = item
    },

    loadAll() {  /* 请求后台接口数据放这里 */
      return [
          { "value": "青岛" },
          { "value": "淄博"},
          { "value": "济南"},
          { "value": "南京"}
      ];
    },
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













