module.exports = {
  outputDir: "build/",
  publicPath: "/o/vue-purejs-portlet/",
  pages: {
    index: {
      entry: ".webpack/index.js",
      template: ".webpack/index.html"
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  transpileDependencies: ["vuetify"]
};
