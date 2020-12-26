module.exports = {

    publicPath: "",

    outputDir: "dist", 

    productionSourceMap: false, // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

    chainWebpack: () => {},

    configureWebpack: () => {}, // CSS 相关选项


    parallel: require("os").cpus().length > 1, // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

    pwa: {}, // configure webpack-dev-server behavior

    devServer: {
        open: true,
        port: 8080,
        // before: app => {}
    }, // 第三方插件配置

    pluginOptions: {
        // ...
    }
};