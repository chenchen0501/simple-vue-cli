import router from "@/router";
import store from "@/store";
import { getToken, clearLs } from "@/utils";
import { asyncRoutes as allRoutes } from '@/router/routes'

router.beforeEach((to, from, next) => {
  // clearLs()
  if (getToken()) {
    if (to.path === "/login") {
      next("/main");
    } else {
      // 防止刷新导致动态路由信息丢失
      if (!store.state.user.userInfo.routes.length) {
        store.dispatch("user/getCurrentUserInfo").then(({ routes }) => {
          router.addRoutes([
            {
              path: "/main",
              name: "main",
              redirect: "/main/home",
              component: () => import("@/layout"),
              children: [
                {
                  path: "/main/home",
                  name: "home",
                  meta: {
                    title: "首页"
                  },
                  component: () => import("../views/home.vue")
                },
                ...routes
              ]
            }
          ]);
        });
        next({ ...to, replace: true });
      } else {
        next();
      }
    }
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
