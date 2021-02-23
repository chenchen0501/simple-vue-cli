import ls from "@/utils/localStorage";
import { isObject } from "lodash";

export const getToken = () => ls.get("cc_vue_token");

export const removeToken = () => ls.remove("cc_vue_token");

export const clearLs = () => localStorage.clear();

// 根据后端返回的权限路由，过滤出本地的路由集合
// 原因：component无法进行保存
export const filterRoutes = (AllRoutes, permissionRoutes) => {
  let afterFilterRoutes = [];
  AllRoutes.forEach(ai => {
    permissionRoutes.forEach(pi => {
      if (ai.name === pi.name) {
        if (ai.children && ai.children.length > 0) {
          ai.children = filterRoutes(ai.children, pi.children);
        }
        afterFilterRoutes.push(ai);
      }
    });
  });
  return afterFilterRoutes;
};

// 导入路径下所有模块
export const importAll = context => {
  const map = {};
  context.keys().forEach(file => {
    map[file] = context(file);
  });
  return map;
};

// 文件下载 - (不传文件名则取后端定义的文件名, 规定第一个参数为blob格式的数据)
export const downloadFile = ({ data, headers }, fileName) => {
  const name = fileName || headers["content-disposition"].split("filename=")[1];
  // 支持IE浏览器
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data, name);
    return;
  }
  const url = window.URL.createObjectURL(data);
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// 格式化树形数据
export const formateTreeData = (
  data,
  props = { value: "value1", label: "label1", children: "children1" }
) => {
  let options = JSON.parse(JSON.stringify(data));
  if (!Array.isArray(options)) return [];

  for (let item of options) {
    for (let prop in props) {
      if (prop === "children") {
        if (Array.isArray(item[props[prop]]) && item[props[prop]].length) {
          item[prop] = formateTreeData(item[props[prop]]);
        }
      } else {
        item[prop] = item[props[prop]];
      }

      delete item[props[prop]];
    }
  }

  return options;
};

// 获取当前节点下所有叶子节点
export const getAllLeafNodes = data => {
  let { children } = data;
  let arr = [];

  if (!children) {
    // 本身就是叶子节点
    return [data];
  }

  for (let item of children) {
    if (item.children && Array.isArray(item.children) && item.children.length) {
      arr.push(...getAllLeafNodes(item));
    } else {
      arr.push(item);
    }
  }
  return arr;
};

// 查找目标value，在树中的对象Obj
export const findInTreeData = (ids, data) => {
  if (!Array.isArray(data)) return;

  // 判断是否为多选
  let isMultiple = Array.isArray(ids);

  // 目标对象(可能为string，可能为array)
  let goal = null;

  if (isMultiple) {
    goal = [];
    for (let id of ids) {
      let res = findInTreeData(id, data);
      if (res) {
        goal.push(res);
      }
    }
  } else {
    // 遍历树
    for (let item of data) {
      let { value, children } = item;
      if (value === ids) {
        goal = item;
        break;
      } else {
        if (children && Array.isArray(children) && children.length) {
          goal = findInTreeData(ids, children);
          if (goal) break;
        }
      }
    }
  }

  return goal;
};

// 根据主键获取从顶层父节点至该节点的路径
export const findPathByValue = (value, data) => {
  let arr = [];

  let currentNode = findInTreeData(value, data);

  // 判断当前节点是否找到，找到则加入数组
  if (isObject(currentNode) && Object.keys(currentNode).length) {
    arr.unshift(currentNode);
  }

  // 判断当前节点是否有父节点，若有则继续递归查找父节点id所在node
  if (currentNode.parentId) {
    arr.unshift(...findPathByValue(currentNode.parentId, data));
  }

  return arr;
};
