import request from "@/utils/request";

export default {
  // 销售查询
  querySell: params => {
    return request.get({
      url: "/order/query",
      params
    });
  },

  // 订单创建
  createOrder: params => {
    return request.get({
      url: "/order/create",
      params
    });
  }
};
