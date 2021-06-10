import request from "@/utils/request";

export default {
  // 获取博客详情
  getBlogInfoById: id => {
    return request.get({
      url: `/blog/getFile`,
    });
  }
};
