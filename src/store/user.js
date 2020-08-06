// 全局变量
import ls from "@/utils/localStorage";
import router from "@/router";
import { asyncRoutes as allRoutes } from "@/router/routes";

function filterRoutes (AllRoutes, permissionRoutes) {
  let afterFilterRoutes = []
  AllRoutes.forEach(ai => {
    permissionRoutes.forEach(pi => {
      if (ai.name === pi.name) {
        if (ai.children && ai.children.length > 0) {
          ai.children = filterRoutes(ai.children, pi.children)
        }
        afterFilterRoutes.push(ai)
      }
    })
  })
  return afterFilterRoutes
}

export default {
  namespaced: true,
  state: () => ({
    userInfo: {
      routes: [], // 权限路由
      btns: [] // 权限按钮
    }
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      ls.set("userInfo", userInfo);
      state.userInfo = userInfo;
    }
  },
  actions: {
    // 登录
    signIn({ commit }, signInfo) {
      return new Promise((resolve, reject) => {
        // todo 登录接口

        // 设置token
        ls.set("token", "qqweqweqweqweqweqw");

        resolve();
      });
    },

    // 获取当前用户信息 (如：缓存丢失情况下调用)
    getCurrentUserInfo({ commit }, token) {
      return new Promise((resolve, reject) => {
        const oldUserInfo = ls.get("userInfo");

        // 判断缓存是否存在
        let isCacheExist = oldUserInfo && oldUserInfo.routes.length;

        // 存储当前用户信息(缓存中 或者 接口获取)
        let currentUserInfo;

        if (isCacheExist) {
          currentUserInfo = oldUserInfo;
          commit("setUserInfo", oldUserInfo);
        } else {
          const userInfo = { name: "cc", routes: allRoutes, btns: ["del_btn"] }; // todo 为后端获取
          commit("setUserInfo", userInfo);
          currentUserInfo = userInfo;
        }
        const routes = filterRoutes(allRoutes, currentUserInfo.routes);
        resolve({...currentUserInfo, routes});
      });
    }
  }
};
