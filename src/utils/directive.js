// 自定义指令
import Vue from "vue";
import store from "@/store";

// 自定义指令-根据权限显示按钮
Vue.directive("permission", {
  inserted: function(el, { value }) {
    // 该用户所有按钮权限集合 - 后端接口返回
    const arr = store.state.user.userInfo.btns;
    
    if (!arr.includes(value)) {
      el.parentNode.removeChild(el);
    }
  }
});
