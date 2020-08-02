
// 动态的路由（这部分路由会根据权限变化，默认只有两层路由）
export const asyncRoutes = [
  {
    path: '/purchase',
    name: 'purchase',
    icon: 'el-icon-shopping-cart-2',
    meta: {
      title: '采购'
    },
    component: () =>
      import('../views/purchase')
  },
  {
    path: '/sell',
    name: 'sell',
    icon: 'el-icon-location',
    meta: {
      title: '销售'
    },
    component: () =>
      import('../views/sell'),
    children: [{
      path: 'sell-list',
      name: 'sell-list',
      meta: {
        title: '销售列表'
      },
      component: () => import('../views/sell/sellList')
    }
    ]
  },
  {
    path: '/store',
    name: 'store',
    icon: 'el-icon-truck',
    meta: {
      title: '仓库'
    },
    component: () =>
      import('../views/store'),
    children: [{
      path: 'inventory',
      name: 'inventory',
      meta: {
        title: '库存管理'
      },
      component: () => import('../views/store/inventory')
    }
    ]
  },
  {
    path: '/report',
    name: 'report',
    icon: 'el-icon-tickets',
    meta: {
      title: '报表'
    },
    component: () =>
      import('../views/report')
  },
  {
    path: '/finance',
    name: 'finance',
    icon: 'el-icon-wallet',
    meta: {
      title: '财务'
    },
    component: () =>
      import('../views/finance')
  },
  {
    path: '/setting',
    name: 'setting',
    icon: 'el-icon-setting',
    meta: {
      title: '设置'
    },
    component: () =>
      import('../views/setting'),
    children: [{
      path: 'goods',
      name: 'goods',
      meta: {
        title: '商品管理'
      },
      component: () => import('../views/setting/goods')
    }
    ]
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

