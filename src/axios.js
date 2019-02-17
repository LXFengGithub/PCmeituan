// axios拦截器
import axios from 'axios'
axios.defaults.baseURL = "http://api.duyiedu.com"
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.params = {
    ...config.params,  // 利用结构赋值   把之前也放在这，然后拼接这个数据。防止被覆盖
    appkey: "1371462558_1546958773684"
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

export default axios