module.exports = {
  publicPath:'./',
  configureWebpack: {
    devServer:{
      proxy: {
        "/api": {
          target: "http://m.maoyan.com",
          pathRewrite: {"^/api" : ""},
          changeOrigin:true
        }
      }
    }
  }
}