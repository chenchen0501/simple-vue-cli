import router from '@/router'
import { getToken } from '@/utils'

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
