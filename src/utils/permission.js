import router from "@/router";
import store from "@/store";
import { getToken, clearLs } from "@/utils";
import data from '@/utils/data'

router.beforeEach((to, from, next) => {
  // clearLs()
  if (getToken()) {
    if (to.path === "/login") {
      next("/main");
    } else {
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
                  component: () => import("../views/dashbord.vue")
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
    if (data.whiteRoutes.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
