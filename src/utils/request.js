import axios from 'axios'
import { getToken } from '@/utils'
import { Message } from 'element-ui'
// import store from '@/store'
import router from '../router'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 10000 // 请求超时设置
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = 'Bearer ' + getToken()
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 10000) {
      // 成功回调
      return Promise.resolve(res)
    } else {
      if (res.code === 10004) {
        // token 过期
        router.replace({ path: '/login' })
      }
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(res)
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default {
  post: p => service({ method: 'post', ...p }),
  get: p => service({ method: 'get', ...p, paramsSerializer: params => {
    return qs.stringify(params, {
      indices: false
    })
  }
  })
}
