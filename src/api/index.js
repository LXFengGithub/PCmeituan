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
  }
}

export default api