import ls from "@/utils/localStorage";

export const getToken = () => ls.get("token");

export const removeToken = () => ls.remove("token");

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
  const map = {}
  context.keys().forEach(file => {
    map[file] = context(file)
  })
  return map
}