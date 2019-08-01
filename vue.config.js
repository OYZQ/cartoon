module.exports = {
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