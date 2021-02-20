import ls from "@/utils/localStorage";

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
  const map = {}
  context.keys().forEach(file => {
    map[file] = context(file)
  })
  return map
}

// 文件下载 - (不传文件名则取后端定义的文件名, 规定第一个参数为blob格式的数据)
export const downloadFile = ({ data, headers }, fileName) => {
  const name = fileName || headers['content-disposition'].split('filename=')[1]
  // 支持IE浏览器
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(data, name)
    return
  }
  const url = window.URL.createObjectURL(data)
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', name)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
