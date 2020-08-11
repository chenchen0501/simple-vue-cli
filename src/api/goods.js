import request from "@/utils/request";

export default {
  // 新增商品
  addGood: params => {
    return request.get({
      url: "/goods/typing",
      params
    });
  },

  // 商品查询
  queryGood: params => {
    return request.get({
      url: "/goods/query",
      params
    });
  }
};
