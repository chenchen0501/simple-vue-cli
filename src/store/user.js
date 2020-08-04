// 全局变量
import ls from "@/utils/localStorage";
import router from "@/router";
import { asyncRoutes as allRoutes } from "@/router/routes";

export default {
  namespaced: true,
  state: () => ({
    userInfo: {}
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    signIn({ commit }, signInfo) {
      return new Promise((resolve, reject) => {
        // todo 登录接口
        commit("setUserInfo", { name: "cc" });
        ls.set("token", "qqweqweqweqweqweqw");
        ls.set("routes", allRoutes);
        router.push("/");
        resolve();
      });
    }
  }
};
