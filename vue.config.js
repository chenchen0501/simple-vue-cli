module.exports = {
  configureWebpack: config => {
    console.log("webpack:", config);
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://m.baidu.com", //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { "^/api": "/" } //这里重写路径
      }
    }
  }
};
