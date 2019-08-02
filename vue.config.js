module.exports = {
    publicPath:'./',//vue-cli3.3+新版本使用 publicPath:'./',//vue-cli3.3+新版本使用
    lintOnSave: false, //关闭eslint
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 25,
                    }), // 换算的基数
                ]
            }
        }
    }
}