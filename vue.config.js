const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/callerai/" : "/",
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/global.scss"; `
      }
    },
  },
})
