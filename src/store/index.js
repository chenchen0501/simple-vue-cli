import Vue from "vue";
import Vuex from "vuex";
import { importAll } from "@/utils";

// 引入当前目录下所有js文件
const map = importAll(require.context("./", false, /.js$/));

const modules = {};

for (let key in map) {
  if (key !== "./index.js") {
    const newKey = key.replace(/\.\//g, "").replace(/.js$/g, "");
    modules[newKey] = map[key].default;
  }
}

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
