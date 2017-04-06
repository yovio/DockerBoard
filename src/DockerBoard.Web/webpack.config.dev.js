const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.base');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devServer: {
            contentBase: ".",
            host: "localhost",
            port: 9000
        }
    })
}