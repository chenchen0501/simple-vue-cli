import request from '@/utils/request'

export default {
  testAjax: params => {
    return request.get({
      url: 'test/get',
      params
    })
  }
}
