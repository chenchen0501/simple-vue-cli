import ls from "@/utils/localStorage";

export const getToken = () => ls.get("token");

export const removeToken = () => ls.remove("token");

export const clearLs = () => localStorage.clear();

// 根据后端返回的权限路由，过滤出本地的路由集合
// 原因：component无法进行保存
