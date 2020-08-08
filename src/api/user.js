import request from '@/utils/request'

export default {
  login: params => {
    return request.get({
      url: '/login',
      params
    })
  },
  registry: params => {
    return request.get({
      url: '/registry',
      params
    })
  },
}
