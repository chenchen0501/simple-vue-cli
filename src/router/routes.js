// 动态的路由（这部分路由会根据权限变化，默认只有两层路由）
export const asyncRoutes = [
  {
    path: "/main/a",
    name: "a",
    icon: "el-icon-location",
    meta: {
      title: "页面a"
    },
    component: () => import("../views/a.vue"),
    children: [
      {
        path: "/main/a/q",
        name: "a1",
        meta: {
          title: "页面a1"
        },
        component: () => import("../views/a1.vue")
      }
    ]
  },
  {
    path: "/main/b",
    name: "b",
    icon: "el-icon-location",
    meta: {
      title: "页面b"
    },
    component: () => import("../views/b.vue")
  },
  {
    path: "/main/c",
    name: "c",
    icon: "el-icon-location",
    meta: {
      title: "页面c"
    },
    component: () => import("../views/c.vue")
  }
];

export default [
  {
    path: "/",
    name: "/",
    redirect: "/main",
    component: () => import("@/layout"),
  },
  // {
  //   path: "/main",
  //   name: "main",
  //   redirect: "/main/home",
  //   component: () => import("@/layout"),
  //   children: [
  //     {
  //       path: "/home",
  //       name: "home",
  //       meta: {
  //         title: "首页"
  //       },
  //       component: () => import("../views/home.vue")
  //     },
  //     ...asyncRoutes
  //   ]
  // },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录"
    },
    component: () => import("../views/login")
  },
  {
    path: "/changePw",
    name: "changePw",
    meta: {
      title: "修改密码"
    },
    component: () => import("../views/login/changePw")
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "注册"
    },
    component: () => import("../views/login/register")
  },
  {
    path: "/404",
    name: "404",
    title: "页面404",
    component: () => import("../views/404.vue")
  }
];
