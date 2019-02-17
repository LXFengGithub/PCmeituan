// 单独封装所有请求，方便查看
import axios from '@/axios.js'

var api = {
  getSearhHotWord(params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList() {
    return axios.get("/api/meituan/header/search.json")
  },
  getMunuList() {
    return axios.get('/api/meituan/index/nav.json')
  },
  getContainer() {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList() {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getNav() {
    return axios.get('/api/meituan/list/classify.json')
  },
  getHotCity() {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getRecentCity() {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvince() {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList() {
    return axios.get('/api/meituan/city/cityList.json')
  }
}

export default api
