import router from "@/router";
import { getToken } from "@/utils";
import ls from "@/utils/localStorage";

router.beforeEach((to, from, next) => {
  console.log(1);
  if (getToken()) {
    console.log(2);
    if (to.path === "/main" && from.path === "/login") {
      console.log(3);
      const asyncRoutes = ls.get("routes");
      router.addRoutes([
        {
          path: "/main",
          name: "main",
          redirect: "/main/home",
          component: () => import("@/layout"),
          children: [
            {
              path: "home",
              name: "home",
              meta: {
                title: "首页"
              },
              component: () => import("../views/home.vue")
            },
            ...asyncRoutes
          ]
        }
      ]);
      next({ ...to, replace: true });
    }
    next();
  } else {
    if (to.path === "/login") {
      next();
    } else {
      next("/login");
    }
  }
});
