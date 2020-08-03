
// 动态的路由（这部分路由会根据权限变化，默认只有两层路由）
export const asyncRoutes = [
  {
    path: '/a',
    name: 'a',
    icon: 'el-icon-location',
    meta: {
      title: '页面a'
    },
    component: () =>
      import('../views/a.vue'),
    children: [
      {
        path: 'q',
        name: 'a1',
        meta: {
          title: '页面a1'
        },
        component: () =>
          import('../views/a1.vue')
      }
    ]
  },
  {
    path: '/b',
    name: 'b',
    icon: 'el-icon-location',
    meta: {
      title: '页面b'
    },
    component: () =>
      import('../views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    icon: 'el-icon-location',
    meta: {
      title: '页面c'
    },
    component: () =>
      import('../views/c.vue')
  }
]

export default [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('../views/home.vue')
      },
      ...asyncRoutes
    ]
  },
  {
    path: '/login',
    name: 'login',
    icon: 'el-icon-location',
    meta: {
      title: '登录'
    },
    component: () =>
      import('../views/login')
  },
  {
    path: '/404',
    name: '404',
    title: '页面404',
    component: () =>
      import('../views/404.vue')
  }
]

