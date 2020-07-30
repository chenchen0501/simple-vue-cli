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
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    const { status } = response.data
    const msg = response.data && response.data.message

    if (status === 200) {
      // 成功
      return Promise.resolve(response.data)
    }

    if (status === 10004) {
      // token国企
      router.replace({ path: '/login' })
      return Promise.reject(msg)
    }

    if (status === 500) {
      // 后端错误
      Message.error(msg)
      return Promise.reject(msg)
    }

    return Promise.resolve(response.data)
  },
  error => {
    Message({
      message: error.msg || '系统错误',
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
