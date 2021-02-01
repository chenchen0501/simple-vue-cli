import { importAll } from "@/utils";

// 引入当前目录下所有js文件
const map = importAll(require.context("./", false, /.js$/));

const modules = {};

for (let key in map) {
  if (key !== "./index.js") {
    // 以文件名(去除后缀)作为modules的key
    const newKey = key.replace(/\.\//g, "").replace(/.js$/g, "");
    modules[newKey] = map[key].default;
  }
}

export default modules;
