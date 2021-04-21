import request from "@/utils/request";

export default {
  testExpressGet: params => {
    return request.get({
      url: "/users",
      params
    });
  }
};
