// 自定义指令
import Vue from 'vue'

// 该用户所有按钮权限集合 - 后端接口返回
const arr = ['DEL_BTN']

// 自定义指令-根据权限显示按钮
Vue.directive('permission', {
  inserted: function(el, { value }) {
    if (!arr.includes(value)) {
      el.parentNode.removeChild(el)
    }
  }
})
