// 动态的路由（这部分路由会根据权限变化，默认只有两层路由）
export const asyncRoutes = [
  {
    path: '/main/purchase',
    name: 'purchase',
    icon: 'el-icon-shopping-cart-2',
    meta: {
      title: '采购'
    },
    component: () => import('../views/purchase'),
    children: [
      {
        path: '/main/purchase/orders',
        name: 'orders',
        meta: {
          title: '采购列表'
        },
        component: () => import('../views/purchase/orders')
      },
      {
        path: 'add-purchase',
        name: 'add-purchase',
        meta: {
          title: '新增采购单'
        },
        component: () => import('../views/purchase/orders/addPurchase')
      }
    ]
  },
  {
    path: '/main/sell',
    name: 'sell',
    icon: 'el-icon-location',
    meta: {
      title: '销售'
    },
    component: () => import('../views/sell'),
    children: [
      {
        path: '/main/sell/sell-list',
        name: 'sell-list',
        meta: {
          title: '销售列表'
        },
        component: () => import('../views/sell/sellList')
      }
    ]
  },
  {
    path: '/main/store',
    name: 'store',
    icon: 'el-icon-truck',
    meta: {
      title: '仓库'
    },
    component: () => import('../views/store'),
    children: [
      {
        path: '/main/storeinventory',
        name: 'inventory',
        meta: {
          title: '库存管理'
        },
        component: () => import('../views/store/inventory')
      }
    ]
  },
  {
    path: '/main/report',
    name: 'report',
    icon: 'el-icon-tickets',
    meta: {
      title: '报表'
    },
    component: () => import('../views/report')
  },
  {
    path: '/main/finance',
    name: 'finance',
    icon: 'el-icon-wallet',
    meta: {
      title: '财务'
    },
    component: () => import('../views/finance')
  },
  {
    path: '/main/setting',
    name: 'setting',
    icon: 'el-icon-setting',
    meta: {
      title: '设置'
    },
    component: () => import('../views/setting'),
    children: [
      {
        path: '/main/setting/goods',
        name: 'goods',
        meta: {
          title: '商品管理'
        },
        component: () => import('../views/setting/goods')
      }
    ]
  }
];

export default [
  {
    path: "/",
    name: "/",
    redirect: "/main",
    component: () => import("@/layout"),
  },
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
    path: "/404",
    name: "404",
    title: "页面404",
    component: () => import("../views/404.vue")
  }
];
