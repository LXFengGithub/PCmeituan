<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>{{title}}</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
        <!-- a 标签实现锚点 -->
      </dd>
    </dl>

    <dl
      class="m-categroy-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-'+ index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
 
<script>
import api from "@/api/index.js";
export default {
  data: () => ({
    list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") /* 小技巧 */,
    cityGroup: [],
    data: []
  }),
  props: ["title"],
  created() {
    api.getCityList().then(res => {
      var obj = {};
      res.data.data.forEach(item => {
        if (!obj[item.firstChar.toUpperCase()]) {
          /* 判断数组里有没有这个数据，没有创建一个空数组储存 */
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      });
      // console.log(obj);
      this.cityGroup = obj;
    });
    // var data = [
    //   // {
    //   //   id: 588,
    //   //   name: "安丘",
    //   //   pinyin: "anqiu",
    //   //   acronym: "aq",
    //   //   rank: "E",
    //   //   firstChar: "A"
    //   // },
    //   // {
    //   //   id: 363,
    //   //   name: "白银",
    //   //   pinyin: "baiyin",
    //   //   acronym: "by",
    //   //   rank: "E",
    //   //   firstChar: "B"
    //   // },
    //   // {
    //   //   id: 952,
    //   //   name: "博山",
    //   //   pinyin: "boshan",
    //   //   acronym: "boshan",
    //   //   rank: "F",
    //   //   firstChar: "B"
    //   // },
    //   // {
    //   //   id: 852,
    //   //   name: "博兴",
    //   //   pinyin: "boxing",
    //   //   acronym: "boxing",
    //   //   rank: "F",
    //   //   firstChar: "B"
    //   // },
    //   // {
    //   //   id: 233,
    //   //   name: "滨州",
    //   //   pinyin: "binzhou",
    //   //   acronym: "bz",
    //   //   rank: "D",
    //   //   firstChar: "B"
    //   // },
    //   // {
    //   //   id: 527,
    //   //   name: "昌邑",
    //   //   pinyin: "changyi",
    //   //   acronym: "changyi",
    //   //   rank: "E",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 1201,
    //   //   name: "成武县",
    //   //   pinyin: "chengwuxian",
    //   //   acronym: "chengwuxian",
    //   //   rank: "F",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 1157,
    //   //   name: "长清区",
    //   //   pinyin: "changqingqu",
    //   //   acronym: "changqingqu",
    //   //   rank: "F",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 883,
    //   //   name: "曹县",
    //   //   pinyin: "caoxian",
    //   //   acronym: "caoxian",
    //   //   rank: "F",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 877,
    //   //   name: "茌平",
    //   //   pinyin: "chiping",
    //   //   acronym: "chiping",
    //   //   rank: "F",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 737,
    //   //   name: "昌乐",
    //   //   pinyin: "changlecl",
    //   //   acronym: "changlecl",
    //   //   rank: "F",
    //   //   firstChar: "C"
    //   // },
    //   // {
    //   //   id: 370,
    //   //   name: "定西",
    //   //   pinyin: "dingxi",
    //   //   acronym: "dx",
    //   //   rank: "E",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 434,
    //   //   name: "敦煌",
    //   //   pinyin: "dunhuang",
    //   //   acronym: "dunhuang",
    //   //   rank: "Z",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 223,
    //   //   name: "东营",
    //   //   pinyin: "dongying",
    //   //   acronym: "dy",
    //   //   rank: "D",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 231,
    //   //   name: "德州",
    //   //   pinyin: "dezhou",
    //   //   acronym: "dz",
    //   //   rank: "D",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 738,
    //   //   name: "东平",
    //   //   pinyin: "dongping",
    //   //   acronym: "dongping",
    //   //   rank: "F",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 1203,
    //   //   name: "东明县",
    //   //   pinyin: "dongmingxian",
    //   //   acronym: "dongmingxian",
    //   //   rank: "F",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 1204,
    //   //   name: "定陶区",
    //   //   pinyin: "dingtaoqu",
    //   //   acronym: "dingtaoqu",
    //   //   rank: "F",
    //   //   firstChar: "D"
    //   // },
    //   // {
    //   //   id: 545,
    //   //   name: "肥城",
    //   //   pinyin: "feicheng",
    //   //   acronym: "fc",
    //   //   rank: "E",
    //   //   firstChar: "F"
    //   // },
    //   // {
    //   //   id: 541,
    //   //   name: "广饶",
    //   //   pinyin: "guangrao",
    //   //   acronym: "gr",
    //   //   rank: "F",
    //   //   firstChar: "G"
    //   // },
    //   // {
    //   //   id: 856,
    //   //   name: "华亭",
    //   //   pinyin: "huating",
    //   //   acronym: "huating",
    //   //   rank: "F",
    //   //   firstChar: "H"
    //   // },
    //   // {
    //   //   id: 362,
    //   //   name: "金昌",
    //   //   pinyin: "jinchang",
    //   //   acronym: "jinchang",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 1227,
    //   //   name: "康县",
    //   //   pinyin: "kangxian",
    //   //   acronym: "kangxian",
    //   //   rank: "F",
    //   //   firstChar: "K"
    //   // },
    //   // {
    //   //   id: 371,
    //   //   name: "陇南",
    //   //   pinyin: "longnan",
    //   //   acronym: "ln",
    //   //   rank: "Z",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 372,
    //   //   name: "临夏",
    //   //   pinyin: "linxia",
    //   //   acronym: "linxia",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 846,
    //   //   name: "牟平",
    //   //   pinyin: "muping",
    //   //   acronym: "muping",
    //   //   rank: "F",
    //   //   firstChar: "M"
    //   // },
    //   // {
    //   //   id: 944,
    //   //   name: "蒙阴",
    //   //   pinyin: "mengyin",
    //   //   acronym: "mengyin",
    //   //   rank: "F",
    //   //   firstChar: "M"
    //   // },
    //   // {
    //   //   id: 779,
    //   //   name: "宁阳",
    //   //   pinyin: "ningyang",
    //   //   acronym: "ningyang",
    //   //   rank: "F",
    //   //   firstChar: "N"
    //   // },
    //   // {
    //   //   id: 820,
    //   //   name: "宁津",
    //   //   pinyin: "ningjinnj",
    //   //   acronym: "ningjinnj",
    //   //   rank: "F",
    //   //   firstChar: "N"
    //   // },
    //   // {
    //   //   id: 367,
    //   //   name: "平凉",
    //   //   pinyin: "pingliang",
    //   //   acronym: "pl",
    //   //   rank: "E",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 369,
    //   //   name: "庆阳",
    //   //   pinyin: "qingyang",
    //   //   acronym: "qingyang",
    //   //   rank: "E",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 228,
    //   //   name: "日照",
    //   //   pinyin: "rizhao",
    //   //   acronym: "rizhao",
    //   //   rank: "D",
    //   //   firstChar: "R"
    //   // },
    //   // {
    //   //   id: 495,
    //   //   name: "寿光",
    //   //   pinyin: "shouguang",
    //   //   acronym: "shouguang",
    //   //   rank: "E",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 549,
    //   //   name: "滕州",
    //   //   pinyin: "tengzhou",
    //   //   acronym: "tengzhou",
    //   //   rank: "E",
    //   //   firstChar: "T"
    //   // },
    //   // {
    //   //   id: 897,
    //   //   name: "微山",
    //   //   pinyin: "weishan",
    //   //   acronym: "weishan",
    //   //   rank: "F",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 523,
    //   //   name: "新泰",
    //   //   pinyin: "xintai",
    //   //   acronym: "xintai",
    //   //   rank: "E",
    //   //   firstChar: "X"
    //   // },
    //   // {
    //   //   id: 608,
    //   //   name: "禹城",
    //   //   pinyin: "yucheng",
    //   //   acronym: "yucheng",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 834,
    //   //   name: "邹城",
    //   //   pinyin: "zoucheng",
    //   //   acronym: "zoucheng",
    //   //   rank: "E",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 364,
    //   //   name: "天水",
    //   //   pinyin: "tianshui",
    //   //   acronym: "tianshui",
    //   //   rank: "E",
    //   //   firstChar: "T"
    //   // },
    //   // {
    //   //   id: 365,
    //   //   name: "武威",
    //   //   pinyin: "wuwei",
    //   //   acronym: "wuwei",
    //   //   rank: "E",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 366,
    //   //   name: "张掖",
    //   //   pinyin: "zhangye",
    //   //   acronym: "zhangye",
    //   //   rank: "E",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 368,
    //   //   name: "酒泉",
    //   //   pinyin: "jiuquan",
    //   //   acronym: "jq",
    //   //   rank: "E",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 373,
    //   //   name: "甘南",
    //   //   pinyin: "gannan",
    //   //   acronym: "gn",
    //   //   rank: "Z",
    //   //   firstChar: "G"
    //   // },
    //   // {
    //   //   id: 409,
    //   //   name: "嘉峪关",
    //   //   pinyin: "jiayuguan",
    //   //   acronym: "jyg",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 1169,
    //   //   name: "永登县",
    //   //   pinyin: "yongdengxian",
    //   //   acronym: "yongdengxian",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 1185,
    //   //   name: "环县",
    //   //   pinyin: "huanxian",
    //   //   acronym: "huanxian",
    //   //   rank: "F",
    //   //   firstChar: "H"
    //   // },
    //   // {
    //   //   id: 1228,
    //   //   name: "山丹县",
    //   //   pinyin: "shandanxian",
    //   //   acronym: "shandanxian",
    //   //   rank: "F",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 60,
    //   //   name: "青岛",
    //   //   pinyin: "qingdao",
    //   //   acronym: "qd",
    //   //   rank: "B",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 81,
    //   //   name: "淄博",
    //   //   pinyin: "zibo",
    //   //   acronym: "zb",
    //   //   rank: "C",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 96,
    //   //   name: "济南",
    //   //   pinyin: "jinan",
    //   //   acronym: "jn",
    //   //   rank: "B",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 104,
    //   //   name: "烟台",
    //   //   pinyin: "yantai",
    //   //   acronym: "yt",
    //   //   rank: "C",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 222,
    //   //   name: "枣庄",
    //   //   pinyin: "zaozhuang",
    //   //   acronym: "zaozhuang",
    //   //   rank: "D",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 224,
    //   //   name: "潍坊",
    //   //   pinyin: "weifang",
    //   //   acronym: "wf",
    //   //   rank: "C",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 225,
    //   //   name: "济宁",
    //   //   pinyin: "jining",
    //   //   acronym: "jining",
    //   //   rank: "C",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 226,
    //   //   name: "泰安",
    //   //   pinyin: "taian",
    //   //   acronym: "ta",
    //   //   rank: "D",
    //   //   firstChar: "T"
    //   // },
    //   // {
    //   //   id: 227,
    //   //   name: "威海",
    //   //   pinyin: "weihai",
    //   //   acronym: "weihai",
    //   //   rank: "C",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 229,
    //   //   name: "莱芜",
    //   //   pinyin: "laiwu",
    //   //   acronym: "lw",
    //   //   rank: "E",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 230,
    //   //   name: "临沂",
    //   //   pinyin: "linyi",
    //   //   acronym: "linyi",
    //   //   rank: "C",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 232,
    //   //   name: "聊城",
    //   //   pinyin: "liaocheng",
    //   //   acronym: "lc",
    //   //   rank: "D",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 234,
    //   //   name: "菏泽",
    //   //   pinyin: "heze",
    //   //   acronym: "heze",
    //   //   rank: "D",
    //   //   firstChar: "H"
    //   // },
    //   // {
    //   //   id: 453,
    //   //   name: "兖州",
    //   //   pinyin: "yanzhou",
    //   //   acronym: "yanzhou",
    //   //   rank: "E",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 465,
    //   //   name: "章丘区",
    //   //   pinyin: "zhangqiuqu",
    //   //   acronym: "zhangqiu",
    //   //   rank: "E",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 492,
    //   //   name: "龙口",
    //   //   pinyin: "longkou",
    //   //   acronym: "lk",
    //   //   rank: "E",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 496,
    //   //   name: "青州",
    //   //   pinyin: "qingzhou",
    //   //   acronym: "qingzhou",
    //   //   rank: "E",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 497,
    //   //   name: "荣成",
    //   //   pinyin: "rongcheng",
    //   //   acronym: "rc",
    //   //   rank: "E",
    //   //   firstChar: "R"
    //   // },
    //   // {
    //   //   id: 498,
    //   //   name: "文登",
    //   //   pinyin: "wendeng",
    //   //   acronym: "wd",
    //   //   rank: "E",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 499,
    //   //   name: "乳山",
    //   //   pinyin: "rushan",
    //   //   acronym: "rs",
    //   //   rank: "E",
    //   //   firstChar: "R"
    //   // },
    //   // {
    //   //   id: 508,
    //   //   name: "邹平",
    //   //   pinyin: "zouping",
    //   //   acronym: "zp",
    //   //   rank: "F",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 526,
    //   //   name: "诸城",
    //   //   pinyin: "zhucheng",
    //   //   acronym: "zhucheng",
    //   //   rank: "E",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 529,
    //   //   name: "莱州",
    //   //   pinyin: "laizhou",
    //   //   acronym: "laizhou",
    //   //   rank: "E",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 537,
    //   //   name: "临清",
    //   //   pinyin: "linqing",
    //   //   acronym: "lq",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 561,
    //   //   name: "莱阳",
    //   //   pinyin: "laiyang",
    //   //   acronym: "laiyang",
    //   //   rank: "E",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 573,
    //   //   name: "海阳",
    //   //   pinyin: "haiyang",
    //   //   acronym: "haiyang",
    //   //   rank: "E",
    //   //   firstChar: "H"
    //   // },
    //   // {
    //   //   id: 582,
    //   //   name: "平度",
    //   //   pinyin: "pingdu",
    //   //   acronym: "pd",
    //   //   rank: "E",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 583,
    //   //   name: "胶州",
    //   //   pinyin: "jiaozhou",
    //   //   acronym: "jiaozhou",
    //   //   rank: "E",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 586,
    //   //   name: "招远",
    //   //   pinyin: "zhaoyuan",
    //   //   acronym: "zhaoyuan",
    //   //   rank: "E",
    //   //   firstChar: "Z"
    //   // },
    //   // {
    //   //   id: 587,
    //   //   name: "蓬莱",
    //   //   pinyin: "penglai",
    //   //   acronym: "penglai",
    //   //   rank: "E",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 589,
    //   //   name: "高密",
    //   //   pinyin: "gaomi",
    //   //   acronym: "gm",
    //   //   rank: "E",
    //   //   firstChar: "G"
    //   // },
    //   // {
    //   //   id: 611,
    //   //   name: "乐陵",
    //   //   pinyin: "laoling",
    //   //   acronym: "ll",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 620,
    //   //   name: "莱西",
    //   //   pinyin: "laixi",
    //   //   acronym: "laixi",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 664,
    //   //   name: "即墨",
    //   //   pinyin: "jimo",
    //   //   acronym: "jimo",
    //   //   rank: "E",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 727,
    //   //   name: "齐河",
    //   //   pinyin: "qihe",
    //   //   acronym: "qihe",
    //   //   rank: "F",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 728,
    //   //   name: "夏津",
    //   //   pinyin: "xiajin",
    //   //   acronym: "xiajin",
    //   //   rank: "F",
    //   //   firstChar: "X"
    //   // },
    //   // {
    //   //   id: 739,
    //   //   name: "临朐",
    //   //   pinyin: "linqu",
    //   //   acronym: "linqu",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 777,
    //   //   name: "平原",
    //   //   pinyin: "pingyuan",
    //   //   acronym: "pingyuan",
    //   //   rank: "F",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 830,
    //   //   name: "单县",
    //   //   pinyin: "shanxian",
    //   //   acronym: "shanxian",
    //   //   rank: "F",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 878,
    //   //   name: "阳谷",
    //   //   pinyin: "yanggu",
    //   //   acronym: "yanggu",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 880,
    //   //   name: "垦利",
    //   //   pinyin: "kenli",
    //   //   acronym: "kenli",
    //   //   rank: "F",
    //   //   firstChar: "K"
    //   // },
    //   // {
    //   //   id: 881,
    //   //   name: "河口",
    //   //   pinyin: "hekou",
    //   //   acronym: "hekou",
    //   //   rank: "F",
    //   //   firstChar: "H"
    //   // },
    //   // {
    //   //   id: 882,
    //   //   name: "巨野",
    //   //   pinyin: "juye",
    //   //   acronym: "juye",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 884,
    //   //   name: "郓城",
    //   //   pinyin: "yunchengxian",
    //   //   acronym: "yunchengxian",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 896,
    //   //   name: "梁山",
    //   //   pinyin: "liangshanxian",
    //   //   acronym: "liangshanxian",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 898,
    //   //   name: "汶上",
    //   //   pinyin: "wenshang",
    //   //   acronym: "wenshang",
    //   //   rank: "F",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 899,
    //   //   name: "嘉祥",
    //   //   pinyin: "jiaxiang",
    //   //   acronym: "jiaxiang",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 900,
    //   //   name: "金乡",
    //   //   pinyin: "jinxiang",
    //   //   acronym: "jinxiang",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 902,
    //   //   name: "利津",
    //   //   pinyin: "lijin",
    //   //   acronym: "lijin",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 904,
    //   //   name: "武城",
    //   //   pinyin: "wucheng",
    //   //   acronym: "wucheng",
    //   //   rank: "F",
    //   //   firstChar: "W"
    //   // },
    //   // {
    //   //   id: 905,
    //   //   name: "临邑",
    //   //   pinyin: "linyily",
    //   //   acronym: "linyily",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 907,
    //   //   name: "石岛",
    //   //   pinyin: "shidao",
    //   //   acronym: "shidao",
    //   //   rank: "F",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 914,
    //   //   name: "栖霞",
    //   //   pinyin: "qixia",
    //   //   acronym: "qixia",
    //   //   rank: "F",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 916,
    //   //   name: "费县",
    //   //   pinyin: "feixian",
    //   //   acronym: "feixian",
    //   //   rank: "F",
    //   //   firstChar: "F"
    //   // },
    //   // {
    //   //   id: 920,
    //   //   name: "薛城",
    //   //   pinyin: "xuecheng",
    //   //   acronym: "xuecheng",
    //   //   rank: "F",
    //   //   firstChar: "X"
    //   // },
    //   // {
    //   //   id: 939,
    //   //   name: "兰陵",
    //   //   pinyin: "lanling",
    //   //   acronym: "lanling",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 940,
    //   //   name: "沂水",
    //   //   pinyin: "yishui",
    //   //   acronym: "yishui",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 941,
    //   //   name: "莒南",
    //   //   pinyin: "junan",
    //   //   acronym: "junan",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 942,
    //   //   name: "郯城",
    //   //   pinyin: "tancheng",
    //   //   acronym: "tancheng",
    //   //   rank: "F",
    //   //   firstChar: "T"
    //   // },
    //   // {
    //   //   id: 943,
    //   //   name: "沂南",
    //   //   pinyin: "yinan",
    //   //   acronym: "yinan",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // },
    //   // {
    //   //   id: 950,
    //   //   name: "平邑",
    //   //   pinyin: "pingyi",
    //   //   acronym: "pingyi",
    //   //   rank: "F",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 951,
    //   //   name: "临沭",
    //   //   pinyin: "linshu",
    //   //   acronym: "linshu",
    //   //   rank: "F",
    //   //   firstChar: "L"
    //   // },
    //   // {
    //   //   id: 998,
    //   //   name: "庆云",
    //   //   pinyin: "qingyun",
    //   //   acronym: "qingyun",
    //   //   rank: "F",
    //   //   firstChar: "Q"
    //   // },
    //   // {
    //   //   id: 1015,
    //   //   name: "商河",
    //   //   pinyin: "shanghe",
    //   //   acronym: "shanghe",
    //   //   rank: "F",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 1017,
    //   //   name: "泗水",
    //   //   pinyin: "sishui",
    //   //   acronym: "sishui",
    //   //   rank: "F",
    //   //   firstChar: "S"
    //   // },
    //   // {
    //   //   id: 1134,
    //   //   name: "鄄城县",
    //   //   pinyin: "juanchengxian",
    //   //   acronym: "juanchengxian",
    //   //   rank: "F",
    //   //   firstChar: "J"
    //   // },
    //   // {
    //   //   id: 1156,
    //   //   name: "平阴县",
    //   //   pinyin: "pingyinxian",
    //   //   acronym: "pingyinxian",
    //   //   rank: "F",
    //   //   firstChar: "P"
    //   // },
    //   // {
    //   //   id: 1181,
    //   //   name: "鱼台县",
    //   //   pinyin: "yutaixian",
    //   //   acronym: "yutaixian",
    //   //   rank: "F",
    //   //   firstChar: "Y"
    //   // }
    // ];
  },
  methods: {
    changCity(item) {
      this.$store.dispatch('setPosition', item)

      this.$router.push({name: 'index'})
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy";
</style>

