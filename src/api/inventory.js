import request from "@/utils/request";

export default {
  // 库存查询
  queryInventory: params => {
    return request.get({
      url: "/depository/query",
      params
    });
  }
};
