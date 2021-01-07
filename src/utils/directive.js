// 自定义指令
import Vue from "vue";
import store from "@/store";
import _ from "lodash";

function Debounce(fn, t) {
  console.log("in debounce");
  let delay = t || 2000; // 默认2s
  let timer;
  return function() {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
}

// 自定义指令-根据权限显示按钮
Vue.directive("permission", {
  inserted: function(el, { value }) {
    console.log("in per");
    // 该用户所有按钮权限集合 - 后端接口返回
    const arr = store.state.user.userInfo.btns;

    if (!arr.includes(value)) {
      el.parentNode.removeChild(el);
    }
  }
});

// 下拉选滚动加载
Vue.directive("loadmore", {
  bind(el, binding) {
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM = el.querySelector(
      ".el-select-dropdown .el-select-dropdown__wrap"
    );
    SELECTWRAP_DOM.addEventListener(
      "scroll",
      _.debounce(function() {
        const CONDITION =
          this.scrollHeight - this.scrollTop - 5 <= this.clientHeight;
        if (CONDITION) {
          binding.value();
        }
      }, 2000)
    );
  }
});
